"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className="w-full">
          <Image
            width={100}
            height={100}
            loading="lazy"
            alt="banner-image"
            src="https://links.papareact.com/gi1"
            className="w-full"
          />
        </div>
        <div className="">
          <Image
            width={100}
            height={100}
            loading="lazy"
            alt="banner-image"
            src="https://links.papareact.com/6ff"
          />
        </div>
        <div className="">
          <Image
            width={100}
            height={100}
            loading="lazy"
            alt="banner-image"
            src="https://links.papareact.com/7ma"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
