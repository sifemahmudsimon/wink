import Image from "next/image";
import Link from "next/link";
import React from "react";

const navlist = [
  { name: "What's New", link: "/whats-new" },
  { name: "Features Product", link: "/features-product" },
  { name: "Others", link: "/others" },
  { name: "Shop", link: "/shop" },
  { name: "About", link: "/about" },
];

const NavBar = () => {
  return (
    <>
      <div className="bg-black">
        <p className="text-[12px] leading-[100%] tracking-[2.25px] text-white text-center py-[12px] font-light">
          FREE SHIPPING IN DHAKA
        </p>
      </div>
      <div className="relative flex justify-center  h-[76px] z-40 mb-[-76px]">
      <div className="flex absolute bottom-0 left-[48.85%] transform -translate-x-1/2">
          <div className="flex justify-center items-center gap-[40px]  text-white leading-[100%] ">
            {navlist.slice(0, 2).map((item, index) => (
              <Link href={item.link} key={index}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="ml-[30px] mr-[32.36px]">
            <Image
              src="/logo/navbarlogo.svg"
              height={27.09}
              width={86.64}
              alt={`Image`}
            />
          </div>

          <div className="flex justify-center items-center gap-[40px]  text-white leading-[100%] ">
            {navlist.slice(2).map((item, index) => (
              <a href={item.link} key={index}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
