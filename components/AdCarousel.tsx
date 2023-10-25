'use client'
import React, { useState } from 'react'
import ImageWithFallback from './ImageWithFallback';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";
import { randomInteger } from '@/app/utils';


function AdCarousel({
  ad_images,
  height,
  width
}: {
  ad_images: {img: string, time: string, text:string}[];
  height?: string;
  width?: string;
}) {

  const [intervalz, setIntervalz] = useState(parseInt(ad_images[0].img)*1000);
   const onChange = (_index: number, item: any) => {
     setIntervalz(item?.props["data-interval"]);
   };

  return (
    <Carousel
      onChange={onChange}
      infiniteLoop
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      autoPlay
      interval={intervalz}
      transitionTime={1_500}
    >
      {ad_images?.map(
        ({ img, time, text }: { img: string; time: string; text: string }) => (
          <div
            key={img}
            data-interval={parseInt(time) * 1000}
            className="relative pt-1 float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
            style={{ height, width }}
          >
            <div className="absolute top-1 right-1 text-xl font-bold">
              {text}
            </div>
            <ImageWithFallback
              src={img}
              alt="image"
              width={500}
              height={600}
              style={{
                ...(width && { height: `${width}px` }),
                objectFit: "cover",
              }}
            />
          </div>
        )
      )}
    </Carousel>
  );
}

export default AdCarousel;