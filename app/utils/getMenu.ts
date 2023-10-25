import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
const DEFAULT_TIME = '30'

const serviceAccountAuth = new JWT({
  email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});
 
export const getMenu = async ({docid, sheetname}: {docid: string, sheetname: string}) => {

const doc = new GoogleSpreadsheet(docid, serviceAccountAuth);

await doc.loadInfo(); // loads document properties and worksheets

const sheet = doc.sheetsByTitle[sheetname];
const sheetRows = await sheet.getRows();
const data = sheetRows.map(row => row.toObject());

const finalData = data.map(each_row => {
  return {
    img: each_row.image_url,
    time: each_row.display_time_sec,
    text: each_row.image_text
  }
})

return { data: finalData };

}