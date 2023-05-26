import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'

type ImageSliderProps = {
  images: string[];
};

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const currentIndex = useRef(0);

  useEffect(() => {
    imageRefs.current.forEach((ref, index) => {
      gsap.to(ref, { autoAlpha: index === 0 ? 1 : 0 });
    });

    const interval = setInterval(() => {
      gsap.to(imageRefs.current[currentIndex.current], { autoAlpha: 0 });

      currentIndex.current =
        currentIndex.current < images.length - 1 ? currentIndex.current + 1 : 0;

      gsap.to(imageRefs.current[currentIndex.current], { autoAlpha: 1 });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <img
          key={index}
          ref={(el) => (imageRefs.current[index] = el)}
          className="absolute w-full h-full object-cover"
          src={image}
          alt={`Monte sinai - ${index}`}
        />
      ))}
    </div>
  );
};
