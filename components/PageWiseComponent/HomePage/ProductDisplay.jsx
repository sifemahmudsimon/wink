'use client'
import React from "react";
import SectionTitle from "../ReuseableComponent/SectionTitle";
import Image from "next/image";

const ProductDisplay = ({ theme, size, gap }) => {
  console.log("size matters", size);
  const customtheme = {
    bg: theme == "dark" ? "black" : "white",
    text: theme == "dark" ? "white" : "black",
    img_width: size === "sm" ? "408px" : "553px",
    img_height: size === "sm" ? "580px" : "788px",
    img_gap: gap==='24px' ? gap : "16px",
  };
  return (
    <div
      className={`w-full bg-${customtheme.bg} text-${customtheme.text}  py-[20px] md:pt-[56px] md:pb-[96px]`}
    >
      <SectionTitle
        title="Men's Boxer"
        subtitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been "
      />
      <div className="overflow-x-auto">
        <div
          className={`flex mb-[20px] md:mb-[96px] ml-[30px] md:ml-[16px]`}
          style={{
            gap:window.innerWidth < 768 ? "30px" : customtheme.img_gap,
          }}
        >
          {[...Array(6)].map((data, index) => (
            <div key={index}>
              <div
                className="relative"
                style={{
                  width: window.innerWidth < 768 ? "200px" : customtheme.img_width,
                  height: window.innerWidth < 768 ? "300px" : customtheme.img_height,
                }}
              >
                <Image
                  src="/dummyimages/dasd.jpeg"
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt={`Image`}
                />
              </div>
              <div className="text-center mt-[10px] mb:mt-[33px]"
             >

                <h3 className="text-[18px] md:text-[26px] leading-[100%] mb-[8px] md:mb-[24px]">
                  Men's Boxer Black Space
                </h3>
                <p className="text-[13.5px] md:text-[19px] leading-[100%]">Tk 350</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
