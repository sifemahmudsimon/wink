import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="w-full mt-[30px] mb-[45px] md:mb-[96px] md:mt-0 px-[30px] md:px-[32px]">
      <div className="flex flex-col-reverse md:flex-row max-w-[1255px] mx-auto md:gap-[67px]">
        <div className="flex-1 md:mt-[212px] p-[20px] md:p-0">
          <h1 className="font-medium text-[50px] leading-[100%]mb-[10px] md:mb-[53px]">OurStory</h1>
          <p className="leading-[100%] mb-[20px] md:mb-[44px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry"s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make
          </p>
          <Button
            className="h-[65px] min-w-[199px] border-1 border-black rounded-full bg-none px-[48px] py-[22px]  uppercase font-bold text-[16px]"
            
            variant="ghost"
          >
            About Us
          </Button>
        </div>
        <div className="relative flex w-[65vw] h-auto aspect-[200/225] mx-auto md:mx-0 md:w-[618px] md:h-[789px]">
  <div className="absolute w-[38vw] aspect-[112/168] md:w-[474px] md:h-[680px] left-0 bottom-0 z-10">
    <Image
      src="/dummyimages/dasd.jpeg"
      fill
      objectFit="cover"
      objectPosition="center"
      alt="image"
    />
  </div>
  <div className="absolute w-[42vw] aspect-[122/189] md:w-[537px] md:h-[683px] right-0">
    <Image
      src="/dummyimages/ban.jpeg"
      fill
      objectFit="cover"
      objectPosition="center"
      alt="image"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default OurStory;
