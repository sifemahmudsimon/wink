import { Button } from '@heroui/button'
import React from 'react'

const FeatureVideo = () => {
  return (
    <div className="relative h-[549px] md:h-[min(1080px,_calc(100vh))] overflow-hidden">
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
    flex flex-col items-end justify-center 
    [background-image:linear-gradient(to_left,_#893302FA_0%,_#893302FA_30%,_rgba(0,0,0,0.27)_100%)] gap-[30px]">
      <div className=' w-[439px] text-white mr-[17.188%]'>
      <h1
        className="max-w-[338px] md:max-w-[930px] 
   font-bold md:font-medium 
  text-[24px] md:text-[47px] leading-[46px] md:leading-[100%] mb-[26px]"
      >
        Perfect Fit Video 
      </h1>
      <p className='leading-[19px]  mb-[38px]'>Lorem Ipsum is simply dummy text of the printing the industry's  standard dummy text ever since the 1500s,</p>
      <Button
            className="h-[60px] min-w-[151px] border-1 rounded-full bg-none p-[20px]  uppercase font-medium text-[16px]"
            color="light"
            variant="bordered"
          >
            SHOP NOW
          </Button>
      </div>
    </div>
  </div>
  )
}

export default FeatureVideo