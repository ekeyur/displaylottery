'use client'
import React from 'react'
import ImageWithFallback from './ImageWithFallback';
// Initialization for ES Users
import {
  Carousel,
  initTE,
} from "tw-elements";



function AdCarousel({
  ad_images,
  ad_div_height,
}: {
  ad_images: string[];
  ad_div_height: string;
}) {
  initTE({ Carousel });
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="relative"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {ad_images?.map((image: string) => (
          <div
            key={image}
            className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <ImageWithFallback
              src={image}
              alt="image"
              width={1000}
              height={ad_div_height}
              style={{height: `${ad_div_height}px`, objectFit: 'cover'}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdCarousel;