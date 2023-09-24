import React from 'react'
import ImageWithFallback from "../../../../components/ImageWithFallback"
import { getLottery } from "../../../utils/getLottery";

async function Screen({ params: {docid, sheetname} }: { params: { docid: string, sheetname: string } }) {
  const { data, img_width, ad_div_height } = await getLottery({ docid, sheetname });
  if(!data) return null
  return (
    <main className="flex flex-col gap-2 h-screen p-1">
      <div className="w-full h-full flex items-center justify-around gap-1 font-mono flex-wrap">
        {data.slice(0, 40).map((game, index) => {
        return (
          <div key={index} className="relative">
            
            {game.ticket_price && <div className="absolute bottom-0 right-0 w-10 h-10 font-bold bg-white flex justify-center items-center rounded-full">
              {game.slot_number}
            </div>}
            {game.ticket_price && <div className="absolute top-0 left-0 w-10 text-white h-10 bg-blue-800 flex justify-center items-center rounded-full">
              <div className="flex items-start">
                <span className="text-xs">&#x24;</span>
                {parseInt(game.ticket_price ?? 0) / 100}
              </div>
            </div>}
            <ImageWithFallback
              style={{
                objectFit: "cover",
                objectPosition: "0px 0px",
                width: `${img_width}px`,
                height: `${img_width}px`,
              }}
              src={game.image_url}
              fallbackSrc={"/coming-soon.jpg"}
              width={400}
              height={400}
              alt={game?.image_url}
              className="rounded-md"
            />
          </div>
        );})}
      </div>
      <div style={{ height: `${ad_div_height}px`}} className={`bg-red-500 rounded-sm`}>
        
      </div>
    </main>
  );
}

export default Screen