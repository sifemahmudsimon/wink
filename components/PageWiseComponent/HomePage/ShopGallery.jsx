import React from "react";
import SectionTitle from "../ReuseableComponent/SectionTitle";
import Image from "next/image";

const ShopGallery = () => {
  return (
    <div className="pt-[46px] pb-[96px]">
      <SectionTitle 
      title='Shop All' 
      subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been'/>
      <div className="flex flex-wrap gap-[16px] justify-center w-[100%]">
        {[...Array(4)].map((data, index) => (
          <div key={index} className="relative w-[302px] h-[445px]">
            <Image
              src="/dummyimages/dasd.jpeg"
              fill
              objectFit="cover"
              objectPosition="center"
              alt={`Image`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopGallery;
