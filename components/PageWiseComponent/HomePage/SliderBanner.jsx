"use client";
import { Button } from "@heroui/button";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const SliderBanner = () => {
  const img = [
    { link: "/dummyimages/ban.jpeg" },
    { link: "/dummyimages/dasd.jpeg" },
  ];

  // State to keep track of the current active slide index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-[549px] md:h-[min(1080px,_calc(100vh))] ">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{
          delay: 4000, // delay between slides
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: false, // Prevents overlapping fade, so it's a true fade-out then fade-in
        }}
        loop={true} // Keep looping through slides
        allowTouchMove={false} // Disables touch swipe
        navigation={false}
        pagination={false}
        speed={1000} // controls the fade duration (1s fade-out + fade-in)
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex); // Set the active slide index
        }}
      >
        {img.map((data, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ scale: 1 }}
              animate={{
                scale: activeIndex === index ? 1.1 : 1, // Apply zoom only if it's the active slide
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{
                scale: { duration: 6 }, // Slow transition for zoom
                opacity: { duration: 0.5 }, // Fast transition for fade
              }}
              className="h-[549px] md:h-[min(1080px,_calc(100vh))] overflow-hidden bg-black"
            >
              <Image
                src={data.link}
                fill
                objectFit="cover"
                objectPosition="center"
                alt={`Image`}
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="absolute top-0 left-0 w-full h-full 
        flex flex-col items-center justify-center px-[16px] 
        bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.51)] text-white z-10"
      >
        <h1
          className="max-w-[338px] md:max-w-[746px] 
          text-center font-bold md:font-medium 
          text-[24px] md:text-[40px] leading-[46px] mb-[26px]"
        >
          30% Discount Products
        </h1>
        <p className="mb-[63px] max-w-[746px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry"s standard dummy text ever
          since the 1500s.
        </p>
        <Button className="h-[60px] min-w-[151px] rounded-full !bg-[#FA4A4A] p-[20px] uppercase font-medium text-[16px] text-white">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default SliderBanner;
