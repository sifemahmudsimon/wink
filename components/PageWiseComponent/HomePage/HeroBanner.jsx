import { Button } from "@heroui/button"
import React from "react"

const HeroBanner = () => {
  return (
    <div className="relative h-[448px] md:h-[min(837px,_calc(100vh))] overflow-hidden">
      <video
        width="100%"
        height="100%"
        muted
        loop
        autoPlay={true}
        loading="eager"
        preload="auto"
        className="object-cover w-full h-full"
        playsInline
      >
        <source src="\video\herobanner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full 
      flex flex-col items-center justify-end 
      bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,9,23,0.5)] 
      pb-[35px] md:pb-[252px] md:gap-[30px]">
        <h1
          className="max-w-[338px] md:max-w-[930px] 
    text-white text-center font-medium md:font-medium 
    text-[28px] md:text-[40px] leading-[46px]"
        >
          Automatic Background Video play
        </h1>
        <Button className="h-[50px] rounded-full bg-white px-[20px] py-[17px] tracking-[4] uppercase font-normal text-[16px] mt-[12px] md:m-0">Shop New Edition</Button>
      </div>
    </div>
  )
}

export default HeroBanner