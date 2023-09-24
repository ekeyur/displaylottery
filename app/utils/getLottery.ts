import { cache } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { getImageUrl } from './getImageUrl';
import { getDataUrl } from './getDataUrl';


const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});
 
export const revalidate = 3600 // revalidate the data at most every hour
 
export const getLottery = cache(async ({docid, sheetname}: {docid: string, sheetname: string}) => {
  
const doc = new GoogleSpreadsheet(docid, serviceAccountAuth);

await doc.loadInfo(); // loads document properties and worksheets

const sheet = doc.sheetsByTitle[sheetname];
const sheetRows = await sheet.getRows();

const data = sheetRows.map(row => row.toObject());

const img_width = data[0].image_width;
const ad_div_height = data[0].ad_div_height;

const moreData = await Promise.allSettled(data.map(async each_row => {
 
  async function getData(url:string) {
    const res = await fetch(url);
    return await res.json(); 
  }


// @ts-ignore
  const lotdata = await getData(getDataUrl(each_row.game_number, "GA"));

  return {
    slot_number: each_row.slot_number,
    game_number: each_row.game_number,
    image_url: getImageUrl(each_row.game_number, "GA"),
    data_url:  each_row.data_url,
    game_name: lotdata.gameName,
    ticket_price: lotdata.ticketPrice,
  }
}));

const finalData = moreData.map(data => {
  return {
    // @ts-ignore
    ...data.value
  }
})

return {data: finalData, img_width, ad_div_height };

})