import React from 'react'
import ImageWithFallback from './ImageWithFallback';
import { cn, randomNoRepeats } from '@/app/utils';

function AdImageWithText({adImages}: {adImages: any}) {

const getImage = randomNoRepeats(adImages);

  const image = getImage();

  return (
    <div className="relative" key={image.img}>
      <div className="absolute -top-2 right-2 text-xl font-bold">{image.text}</div>
      <ImageWithFallback
        src={image.img}
        width={500}
        height={600}
        alt={"advertizement"}
        className={cn(`rounded-md object-contain object-center`)}
      />
    </div>
  );
}

export default AdImageWithText