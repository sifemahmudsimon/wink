"use client";

import { Button } from '@heroui/button';
import React, { useEffect, useState } from 'react';

const SaleTimerBanner = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date();
    target.setDate(target.getDate() + 2);
    const countdown = target.getTime();
  
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countdown - now;
  
      if (distance < 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      setTime({ days, hours, minutes, seconds });

      const nextTick = 1000 - (Date.now() % 1000);
      setTimeout(updateTimer, nextTick);
    };
  
    updateTimer();
  
    return () => clearTimeout(updateTimer); // cleanup on unmount
  }, []);

  const pad = (val) => (val < 10 ? `0${val}` : val);

  return (
    <div className='w-[100%] bg-black text-white  flex justify-center items-center'>
      <div className='md:flex justify-between w-[100%] max-w-[1256px] mx-[16px] py-[32px] md:py-[95px]'>
        <div className='px-[32px] md:px-0'>
          <h2 className='font-bold md:font-normal text-[24px] md:text-[40px] leading-[100%] mb-[10px] md:mb-[23px]'>Special Sale Offer</h2>
          <p className='text-[20px] leading-[100%] mb-[20px] md:mb-[36px]'>Hurry up! get 30% off entire order when you buy a pair of leggings!</p>
          <Button
            className="hidden md:block h-[65px] min-w-[199px] border-1 rounded-full bg-none px-[48px] py-[22px]  uppercase font-bold text-[16px]"
            color="light"
            variant="bordered"
          >
            SHOP NOW
          </Button>
        </div>
        <div className="flex justify-between gap-[30px] h-[64px] max-w-[350px] md:max-w-none mx-auto md:mx-0 mt-[48px]">
            
            <div className='text-center border-r-[1px] border-[#FFFFFF80] pr-[20px]'>
            <p className='font-bold text-[28px] md:text-[40px] leading-[100%] mb-[8px]'>{pad(time.days)}</p>
            <p className='font-light text-[12px] md:text-[16px] leading-[100%]'>DAYS</p>
            </div>
           
            <div className='text-center border-r-[1px] border-[#FFFFFF80] pr-[20px]'>
            <p className='font-bold text-[28px] md:text-[40px] leading-[100%] mb-[8px]'> {pad(time.hours)}</p>
            <p className='font-light text-[12px] md:text-[16px] leading-[100%]'>HOURS</p>
            </div>
            
            <div className='text-center border-r-[1px] border-[#FFFFFF80] pr-[20px]'>
            <p className='font-bold text-[28px] md:text-[40px] leading-[100%] mb-[8px]'> {pad(time.minutes)}</p>
            <p className='font-light text-[12px] md:text-[16px] leading-[100%]'>MINUTES</p>
            </div>

            <div className='text-center '>
            <p className='font-bold text-[28px] md:text-[40px] leading-[100%] mb-[8px]'> {pad(time.seconds)}</p>
            <p className='font-light text-[12px] md:text-[16px] leading-[100%]'>SECONDS</p>
            </div>
           
          </div>
      </div>
    </div>
  );
};

export default SaleTimerBanner;
