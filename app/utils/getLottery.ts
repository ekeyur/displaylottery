import {cache} from 'react'
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
 
export const revalidate = 300;

export const getLottery = cache(async ({docid, sheetname}: {docid: string, sheetname: string}) => {
  
const doc = new GoogleSpreadsheet(docid, serviceAccountAuth);

await doc.loadInfo(); // loads document properties and worksheets

const sheet = doc.sheetsByTitle[sheetname];
const sheetRows = await sheet.getRows();
const data = sheetRows.map(row => row.toObject());

const img_width = data[0].image_width;
const ad_div_height = data[0].ad_div_height;
const num_to_display = data[0].num_to_display;
const state = data[0].state;


const moreData = await Promise.allSettled(data.map(async each_row => {
 
  // async function getData(url:string) {
  //   const res = await fetch(url);
  //   return await res.json(); 
  // }


// @ts-ignore
  // const lotdata = await getData(getDataUrl(each_row.game_number, state));
  // console.log(lotdata);

  return {
    slot_number: each_row.slot_number,
    game_number: each_row.game_number,
    image_url: each_row.image_url,
    game_name: each_row.game_name,
    ticket_price: each_row.ticketPrice,
    is_featured: each_row.is_featured
  }
}));

const finalData = moreData.map(data => {
  return {
    // @ts-ignore
    ...data.value
  }
})

return {data: finalData, img_width, ad_div_height, num_to_display };

})