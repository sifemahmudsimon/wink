import { Button } from "@heroui/button";
import Image from "next/image";
import React from "react";

const OurStory = () => {
  return (
    <div className="w-full mb-[96px] px-[32px]">
      <div className="flex max-w-[1255px] mx-auto gap-[67px]">
        <div className='flex-1 mt-[212px]'>
          <h1 className="font-medium text-[50px] leading-[100%] mb-[53px]">OurStory</h1>
          <p className="leading-[100%] mb-[44px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
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
        <div className="relative flex w-[618px] h-[789px] ">
             <div className='absolute w-[474px] h-[680px] left-0 bottom-0 z-10'>
            <Image src={'/dummyimages/dasd.jpeg'} fill objectFit="cover" objectPosition="center" alt='image'/>
            </div>
            <div className='absolute w-[537px] h-[683px] right-0'>
            <Image src={'/dummyimages/ban.jpeg'} fill objectFit="cover" objectPosition="center" alt='image'/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
