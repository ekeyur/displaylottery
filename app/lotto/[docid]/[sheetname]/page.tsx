"use client";

import React from "react";
import ImageWithFallback from "@/components/ImageWithFallback";
import { cn, priceBgColorString } from "../../../utils";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import { getLotteryData } from "../../../utils/getLotteryData";

function Screen({
  params: { docid, sheetname },
}: {
  params: { docid: string; sheetname: string };
}) {
  const { data, error } = useQuery({
    queryKey: ["getLotteryData", docid, sheetname],
    refetchInterval: 1000 * 60 * 60,
    queryFn: () => getLotteryData({ docid, sheetname }),
    refetchOnWindowFocus: false,
  });

  if (error) return null;
  if (!data?.values) return null;

  return (
    <main className="flex flex-col p-1 overflow-hidden h-screen w-screen bg-gray-50">
      <div className="w-full h-full flex items-center justify-around font-mono flex-wrap">
        {data.values
          .slice(0, data.num_of_slots)
          .map((game: any, index: number) => {
            return (
              <div key={game.slot_number} className={cn("relative")}>
                {game.game_price && game.slot_number && (
                  <div
                    className={cn(
                      "absolute z-10 bottom-0 right-1/3 w-16 h-16 text-4xl font-bold bg-black text-white flex justify-center items-center rounded-full"
                    )}
                  >
                    {game.slot_number}
                  </div>
                )}
                {game.game_price && game.featured_label && (
                  <div
                    className={cn(
                      "absolute z-10 top-0 right-0 p-1 font-bold px-4 bg-red-600 text-white flex justify-center items-center rounded-md"
                    )}
                  >
                    {game.featured_label}
                  </div>
                )}
                {game.game_price && (
                  <div
                    className={`absolute z-10 bottom-1/3 text-4xl right-0 px-2 py-1 font-semibold text-black ${priceBgColorString(
                      parseInt(game.game_price)
                    )} flex justify-center items-center rounded-md shadow-xl`}
                  >
                    <div className="flex items-start">
                      <span className="text-sm">&#x24;</span>
                      {parseInt(game.game_price)}
                    </div>
                  </div>
                )}

                <div className="relative flex justify-center items-center">
                  <ImageWithFallback
                    style={{
                      width: `${data.img_width}px`,
                      height: `${data.img_height}px`,
                    }}
                    src={game?.game_image_url}
                    isfeatured={game.is_featured.toString()}
                    fallbackSrc={`/assets/coming-soon.svg`}
                    width={500}
                    height={600}
                    alt={game?.game_number}
                    className={cn(
                      `rounded-md`,
                      game?.game_price
                        ? `object-cover object-left-top`
                        : `object-contain object-center`
                    )}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </main>
  );
}

export default Screen;
