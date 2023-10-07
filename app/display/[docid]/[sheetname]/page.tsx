

import React from 'react'
import ImageWithFallback from "../../../../components/ImageWithFallback"
import { getLottery } from "../../../utils/getLottery";
import AdCarousel from '@/components/AdCarousel';



async function Screen({ params: {docid, sheetname} }: { params: { docid: string, sheetname: string } }) {

const {
  data,
  img_width,
  ad_div_height,
  num_to_display,
  ad_images,
  empty_slot_images,
  img_height,
} = await getLottery({ docid, sheetname });

if(!data) return null

  return (
    <main className="flex flex-col h-screen p-1 overflow-hidden">
      <div className="w-full h-full flex items-center justify-around font-mono flex-wrap">
        {data.slice(0, num_to_display).map((game, index) => {
          return (
            <div key={index} className="relative">
              {game.ticket_price && (
                <div className="absolute bottom-0 right-1/3 w-16 h-16 text-4xl font-bold bg-black text-white flex justify-center items-center rounded-full">
                  {game.slot_number}
                </div>
              )}
              {game.ticket_price && (
                <div className="absolute bottom-1/3 text-3xl right-0 font-semibold  h-16 w-16 text-indigo-900 bg-indigo-50 flex justify-center items-center rounded-md">
                  <div className="flex items-start">
                    <span className="text-sm">&#x24;</span>
                    {parseInt(game.ticket_price ?? 0)}
                  </div>
                </div>
              )}
              {<ImageWithFallback
                style={{
                  objectFit: game.ticket_price ? "cover" : "contain",
                  objectPosition: "0px 0px",
                  width: `${img_width}px`,
                  height: `${img_height}px`,
                }}
                src={game.image_url}
                fallbackSrc={empty_slot_images?.length === 0 ? '/coming-soon.jpg': empty_slot_images[Math.floor(Math.random() * empty_slot_images.length)] }
                width={400}
                height={500}
                alt={game?.image_url}
                className="rounded-md"ß
              />}
            </div>
          );
        })}
      </div>
      {!!ad_images?.length && <div
        style={{ height: `${ad_div_height}px` }}
        className={`bg-slate-200 rounded-sm flex gap-1`}
      >
        <AdCarousel ad_images={ad_images} ad_div_height={ad_div_height}/>
      </div>
      }
    </main>
  );
}

export default Screen