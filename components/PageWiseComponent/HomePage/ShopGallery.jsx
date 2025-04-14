import React from "react";
import SectionTitle from "../ReuseableComponent/SectionTitle";
import Image from "next/image";

const ShopGallery = () => {
  return (
    <div className="pt-[46px] pb-[96px]">
      <SectionTitle />
      <div className="flex gap-[16px] justify-center w-[100%]">
        {[...Array(4)].map((data, index) => (
          <div key={index} className="relative w-[302px] h-[445px]">
            <Image
              src="/dummyimages/dasd.jpeg"
              fill
              objectFit="cover"
              objectPosition="center"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopGallery;
