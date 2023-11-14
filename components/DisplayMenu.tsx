'use client'
import React, { useEffect, useState } from 'react'
import ImageWithFallback from './ImageWithFallback';

function DisplayMenu({ data }: {data: any}) {

  const [currentImage, setCurrentImage] = useState<string>(
    showImageBasedOnTime(data)
  );

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentImage(showImageBasedOnTime(data));
    }, 60 * 60 * 1000);

    return () => clearInterval(t);
  }, [data]);

  return (
    <div className="h-screen w-screen">
      <ImageWithFallback
        height={data[0].landscape ? 1280 : 1960}
        width={data[0].landscape ? 1960 : 1280}
        src={currentImage}
        fallbackSrc="/assets/not_found.png"
        alt="menu Image"
        className="object-contain h-full w-full"
      />
    </div>
  );
}

export default DisplayMenu

function showImageBasedOnTime(data: any) {
  const DAY = 'January 1, 1970';
  const currentTime = new Date().setFullYear(1970, 0, 1);
  
  for (const image of data) {
    const startTime = new Date(`${DAY} ${image.start_time}`).getTime()
    const endTime = new Date(`${DAY} ${image.end_time}`).getTime()
    
    if (currentTime >= startTime && currentTime <= endTime) {
      return image.img_url;
    }
  }
  return "/assets/not_found.png";
}