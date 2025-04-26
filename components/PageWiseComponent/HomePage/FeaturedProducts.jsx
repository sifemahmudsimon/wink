import Image from "next/image"
import React from "react"

const FeaturedProducts = () => {
  return (
    <div className="w-[100%] bg-black text-white  flex flex-wrap flex-col md:flex-row justify-center items-center gap-[16px] py-[60px] px-[30px] md:px-0 md:pt-[108px] md:pb-[196px]">
        {[...Array(3)].map((data, index) => (
          <div className="feature-card text-center max-w-[408px]">
          <div className="relative w-[100%] aspect-[400/534] md:w-[400px] md:h-[534px]">
          <Image src={"/dummyimages/dasd.jpeg"} fill objectFit="cover" objectPosition="center" alt="image"/>
          </div>
          <h2 className="text-[21px] md:text-[35px] leading-[100%] mt-[20px] mb-[10px] md:mt-[36px] md:mb-[33px]">Lorem Ipsum is simply</h2>
          <h4 className="font-medium text-[13.6px] md:text-[18px] leading-[70%] mb-[26px] md:mb-[47px]">by Paul Pritchard</h4>
          <p className="mb-[20px] first-line:md:m-0">Lorem Ipsum is simply dummy text of the printing 
          the industry"s  standard dummy text ever since the</p>
      </div>
        ))}
        

     

        
    </div>
  )
}

export default FeaturedProducts