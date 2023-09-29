'use client'
import React from 'react'
import ImageWithFallback from './ImageWithFallback';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";


function AdCarousel({
  ad_images,
  ad_div_height,
}: {
  ad_images: string[];
  ad_div_height: string;
}) {

  return (
    <Carousel
      infiniteLoop
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      autoPlay
      interval={10_000}
      transitionTime={1_500}
    >
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
            width={500}
            height={ad_div_height}
            style={{ height: `${ad_div_height}px`, objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default AdCarousel;