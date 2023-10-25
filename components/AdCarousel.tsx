'use client'
import React, { useState } from 'react'
import ImageWithFallback from './ImageWithFallback';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";


function AdCarousel({
  ad_images,
  ad_div_height,
}: {
  ad_images: {img: string, time: string}[];
  ad_div_height?: string;
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
      {ad_images?.map(({ img, time }: { img: string; time: string }) => (
        <div
          key={img}
          data-interval={parseInt(time) * 1000}
          className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-item
          data-te-carousel-active
        >
          <ImageWithFallback
            src={img}
            alt="image"
            width={500}
            height={600}
            style={{...(ad_div_height && { height: `${ad_div_height}px`}), objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default AdCarousel;