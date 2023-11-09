import { NextResponse } from "next/server";

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import { getImageUrl } from '../../utils/getImageUrl';
const DEFAULT_TIME = '30'

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url);
    const docid = searchParams.get('docid')!;
    const sheetname = searchParams.get('sheetname')!;

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY,
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const doc = new GoogleSpreadsheet(docid, serviceAccountAuth);

    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByTitle[sheetname];
    const sheetRows = await sheet.getRows();
    const data = sheetRows.map(row => row.toObject());

    const img_width = data[0].image_width;
    const img_height = data[0].image_height;
    const ad_div_height = data[0].ad_div_height;
    const num_to_display = data[0].num_to_display;
    const state = data[0].state
    type ad_image_type = {img: string, time: string, text: string}
    const ad_images: ad_image_type[] = [];

    data.forEach((val) => {
      if(!val.ad_image) return
      //@ts-ignore
      ad_images.push({img: val?.ad_image, time: val?.ad_image_display_time_sec ?? DEFAULT_TIME, text: val?.ad_image_display_text});

    });

    const finalData = data.map(each_row => {
      return {
        slot_number: each_row.slot_number,
        game_number: each_row.game_number,
        image_url: each_row.game_number ? getImageUrl(each_row.game_number,state) : null,
        game_name: each_row.game_name,
        ticket_price: each_row.ticket_price,
        ticket_label: each_row.ticket_label,
        is_featured: each_row.is_featured === "Yes"
      }
    })
    
    return NextResponse.json({ values: finalData, img_width , img_height, ad_div_height, num_to_display, ad_images });

}