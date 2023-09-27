
import React, { useEffect } from 'react'
import ImageWithFallback from "../../../../components/ImageWithFallback"
import { getLottery } from "../../../utils/getLottery";

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = true;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";
export const maxDuration = 4;
 


async function Screen({ params: {docid, sheetname} }: { params: { docid: string, sheetname: string } }) {

  const { data, img_width, ad_div_height, num_to_display } = await getLottery({ docid, sheetname });

  if(!data) return null

  return (
    <main className="flex flex-col gap-2 h-screen p-1">
      <div className="w-full h-full flex items-center justify-around gap-1 font-mono flex-wrap">
        {data.slice(0, num_to_display).map((game, index) => {
          return (
            <div key={index} className="relative">
              {game.ticket_price && (
                <div className="absolute bottom-0 right-0 w-16 h-16 text-4xl font-bold bg-white flex justify-center items-center rounded-full">
                  {game.slot_number}
                </div>
              )}
              {game.ticket_price && (
                <div className="absolute top-0 text-3xl right-0 font-semibold text-white h-16 w-16 bg-red-500 flex justify-center items-center rounded-full">
                  <div className="flex items-start">
                    <span className="text-sm">&#x24;</span>
                    {parseInt(game.ticket_price ?? 0) / 100}
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
        className={`bg-red-500 rounded-sm`}
      ></div>
    </main>
  );
}

export default Screen