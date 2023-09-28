

import React from 'react'
import ImageWithFallback from "../../../../components/ImageWithFallback"
import { getLottery } from "../../../utils/getLottery";

async function Screen({ params: {docid, sheetname} }: { params: { docid: string, sheetname: string } }) {

const { data, img_width, ad_div_height, num_to_display } = await getLottery({ docid, sheetname });

  if(!data) return null

  return (
    <main className="flex flex-col gap-1 h-screen p-1">
      <div className="w-full h-full flex items-center justify-around font-mono flex-wrap">
        {data.slice(0, num_to_display).map((game, index) => {
          return (
            <div key={index} className="relative">
              {game.ticket_price && (
                <div className="absolute bottom-0 right-1/3 w-16 h-16 text-4xl font-bold bg-white flex justify-center items-center rounded-full">
                  {game.slot_number}
                </div>
              )}
              {game.ticket_price && (
                <div className="absolute bottom-1/3 text-3xl right-0 font-semibold text-white h-16 w-16 bg-fuchsia-600 flex justify-center items-center rounded-md">
                  <div className="flex items-start">
                    <span className="text-sm">&#x24;</span>
                    {parseInt(game.ticket_price ?? 0)}
                  </div>
                </div>
              )}
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
          );
        })}
      </div>
      <div
        style={{ height: `${ad_div_height}px` }}
        className={`bg-slate-200 rounded-sm flex gap-1`}
      >
        <div className="h-full p-1 justify-between w-2/12 bg-slate-400"></div>
        <div className="h-full p-1 justify-between w-2/12 bg-slate-400"></div>
        <div className="h-full p-1 justify-between w-2/12 bg-slate-400"></div>
        <div className="h-full p-1 justify-between w-2/12 bg-slate-400"></div>
        <div className="h-full p-1 justify-between w-2/12 bg-slate-400"></div>
        <div className="h-full p-1 justify-between w-2/12 bg-slate-400"></div>
      </div>
    </main>
  );
}

export default Screen