'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/app/utils';

const ImageWithFallback = (props: any) => {
    const { src, fallbackSrc, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
      <div
        className={cn(
          "",
          props.isfeatured ? 
            `motion-safe:animate-heartBeat repeat-infinite` : undefined
        )}
      >
        <Image
          alt={imgSrc ?? "no-image"}
          {...rest}
          src={imgSrc ?? ""}
          onError={() => {
            setImgSrc(fallbackSrc);
          }}
        />
      </div>
    );
};

export default ImageWithFallback;