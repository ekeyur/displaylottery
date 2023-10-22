import React from "react";
import ImageWithFallback from "../../../../components/ImageWithFallback";
import { getLottery } from "../../../utils/getLottery";
import AdCarousel from "@/components/AdCarousel";
import { cn, priceBgColorString, randomInteger } from "../../../utils";

async function Screen({
  params: { docid, sheetname },
}: {
  params: { docid: string; sheetname: string };
}) {
  const {
    data,
    img_width,
    ad_div_height,
    num_to_display,
    ad_images,
    empty_slot_images,
    img_height,
  } = await getLottery({ docid, sheetname });

  const empty_slot = [...empty_slot_images, "/coming-soon.jpg"];

  if (!data) return null;

  return (
    <main className="flex flex-col p-1 overflow-hidden h-screen w-screen bg-gray-50">
      <div className="w-full h-full flex items-center justify-around font-mono flex-wrap">
        {data.slice(0, num_to_display).map((game, index) => {
          return (
            <div key={index} className={cn("relative")}>
              {game.ticket_price && (
                <div className="absolute z-10 bottom-0 right-1/3 w-16 h-16 text-4xl font-bold bg-black text-white flex justify-center items-center rounded-full">
                  {game.slot_number}
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
                    {parseInt(game.ticket_price ?? 0)}
                  </div>
                </div>
              )}
              {!!game.is_featured && (
                <div className="absolute top-0 z-10 right-0 w-12 h-12 text-4xl font-bold  bg-lime-200 text-green-700 flex justify-center items-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                    />
                  </svg>
                </div>
              )}
              {
                <ImageWithFallback
                  style={{
                    width: `${img_width}px`,
                    height: `${img_height}px`,
                  }}
                  src={game.image_url}
                  isfeatured={game.is_featured}
                  fallbackSrc={
                    empty_slot[randomInteger(0, empty_slot_images.length)]
                  }
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
              }
            </div>
          );
        })}
      </div>
      {!!ad_images?.length && (
        <div
          style={{ height: `${ad_div_height}px` }}
          className={`bg-slate-200 rounded-sm flex gap-1`}
        >
          <AdCarousel ad_images={ad_images} ad_div_height={ad_div_height} />
        </div>
      )}
    </main>
  );
}

export default Screen;
