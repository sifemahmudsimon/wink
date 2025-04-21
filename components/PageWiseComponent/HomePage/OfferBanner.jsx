import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

const OfferBanner = () => {
  return (
    <div className="relative h-[549px] md:h-[min(1080px,_calc(100vh))] overflow-hidden">
      <Image
        src="/dummyimages/ban.jpeg"
        fill
        objectFit="cover"
        objectPosition="center"
        alt={`Image`}
      />

      <div
        className="absolute top-0 left-0 w-full h-full 
    flex flex-col items-center justify-center 
    bg-gradient-to-t from-[rgba(0,0,0,0.27)] to-[rgba(0,0,0,0.51)] text-white"
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
          since the 1500s,
        </p>
        <Button className="h-[60px] min-w-[151px] rounded-full !bg-[#FA4A4A] p-[20px] uppercase font-medium text-[16px] text-white">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default OfferBanner;
