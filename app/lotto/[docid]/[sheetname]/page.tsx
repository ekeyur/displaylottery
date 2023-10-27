

import React from 'react'
import ImageWithFallback from "../../../../components/ImageWithFallback"
import { getLottery } from "../../../utils/getLottery";
import AdCarousel from '@/components/AdCarousel';
import {cn, priceBgColorString, randomInteger, randomNoRepeats, shuffle} from '../../../utils';


async function Screen({ params: {docid, sheetname} }: { params: { docid: string, sheetname: string } }) {

const {
  data,
  img_width,
  num_to_display,
  ad_images,
  img_height,
} = await getLottery({ docid, sheetname });

const getImage = randomNoRepeats(ad_images);

if(!data) return null

  return (
    <main className="flex flex-col p-1 overflow-hidden h-screen w-screen bg-gray-50">
      <div className="w-full h-full flex items-center justify-around font-mono flex-wrap">
        {data.slice(0, num_to_display).map((game, index) => {
          return (
            <div key={index} className={cn("relative")}>
              {game.ticket_price &&
                game.slot_number && (
                  <div
                    className={cn(
                      "absolute z-10 bottom-0 right-1/3 w-16 h-16 text-4xl font-bold bg-black text-white flex justify-center items-center rounded-full"
                    )}
                  >
                    {game.slot_number}
                  </div>
                )}
              {game.ticket_price && game.ticket_label && (
                <div
                  className={cn(
                    "absolute z-10 top-0 right-0 p-1 font-bold px-4 bg-red-600 text-white flex justify-center items-center rounded-md"
                  )}
                >
                  {game.ticket_label}
                </div>
              )}
              {game.ticket_price && (
                <div
                  className={`absolute z-10 bottom-1/3 text-4xl right-0 font-semibold  h-16 w-16 text-black ${priceBgColorString(
                    parseInt(game.ticket_price)
                  )} flex justify-center items-center rounded-md shadow-xl`}
                >
                  <div className="flex items-start">
                    <span className="text-sm">&#x24;</span>
                    {parseInt(game.ticket_price)}
                  </div>
                </div>
              )}

              {game.ticket_price ? (
                <div className="relative">
                  <ImageWithFallback
                    style={{
                      width: `${img_width}px`,
                      height: `${img_height}px`,
                    }}
                    src={game.image_url}
                    isfeatured={game.is_featured.toString()}
                    fallbackSrc={getImage().img}
                    width={500}
                    height={600}
                    alt={game?.image_url}
                    className={cn(
                      `rounded-md`,
                      game.ticket_price
                        ? `object-cover object-left-top`
                        : `object-contain object-center`
                    )}
                  />
                </div>
              ) : (
                <div
                  style={{
                    width: `${img_width}px`,
                    height: `${img_height}px`,
                  }}
                  key={index}
                >
                  <AdCarousel
                    ad_images={[...shuffle(ad_images)]}
                    height={img_height}
                    width={img_width}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Screen

