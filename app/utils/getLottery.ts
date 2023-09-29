import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';


const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});
 
export const revalidate = 300;

export const getLottery = async ({docid, sheetname}: {docid: string, sheetname: string}) => {

const doc = new GoogleSpreadsheet(docid, serviceAccountAuth);

await doc.loadInfo(); // loads document properties and worksheets

const sheet = doc.sheetsByTitle[sheetname];
const sheetRows = await sheet.getRows();
const data = sheetRows.map(row => row.toObject());

const img_width = data[0].image_width;
const ad_div_height = data[0].ad_div_height;
const num_to_display = data[0].num_to_display;

const ad_images: string[] = [];

data.forEach((val) => {
  if(!val.ad_image) return
  //@ts-ignore
  ad_images.push(val?.ad_image);
})

const finalData = data.map(each_row => {
  return {
    slot_number: each_row.slot_number,
    game_number: each_row.game_number,
    image_url: each_row.image_url,
    game_name: each_row.game_name,
    ticket_price: each_row.ticket_price,
    is_featured: each_row.is_featured
  }
})


return { data: finalData, img_width, ad_div_height, num_to_display, ad_images };

}