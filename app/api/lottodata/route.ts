import { NextResponse } from "next/server";

import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';


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
    const num_of_slots = data[0].num_of_slots;
    const state = data[0].state

  
    const finalData = data.map(each_row => {
      return {
        slot_number: each_row.slot_number,
        game_number: each_row.game_number,
        game_image_url: each_row.game_number ? each_row.game_image_url : null,
        game_name: each_row.game_name,
        game_price: each_row.ticket_price,
        featured_label: each_row.ticket_label,
        is_featured: each_row.is_featured === "Yes"
      }
    })  
    return NextResponse.json({ values: finalData, img_width , img_height, num_of_slots });

}