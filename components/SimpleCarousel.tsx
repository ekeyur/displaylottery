'use client'

import React from 'react'
import ImageWithFallback from './ImageWithFallback';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";


function SimpleCarousel({
  images,
  interval,
}: {
  images: string[];
  interval: number;
}) {
  return (
    <Carousel
      infiniteLoop
      showArrows={false}
      showIndicators={true}
      showStatus={false}
      showThumbs={false}
      interval={interval}
      transitionTime={3000}
    >
      {images?.map((img: string) => (
        <div
          key={img}
          className="relative pt-1 float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none rounded-lg"
          data-te-carousel-item
          data-te-carousel-active
        >
          <ImageWithFallback src={img} alt="image" width={1960} height={1080} />
        </div>
      ))}
    </Carousel>
  );
}

export default SimpleCarousel;