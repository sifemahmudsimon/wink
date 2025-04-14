import Image from 'next/image'
import React from 'react'

const FeaturedProducts = () => {
  return (
    <div className='w-[100%] bg-black text-white  flex justify-center items-center gap-[16px] pt-[108px] pb-[196px]'>
        <div className='feature-card text-center max-w-[408px]'>
            <div className='relative w-[400px] h-[534px]'>
            <Image src={'/dummyimages/dasd.jpeg'} fill objectFit="cover" objectPosition="center"/>
            </div>
            <h2 className='text-[35px] leading-[100%] mt-[36px] mb-[33px]'>Lorem Ipsum is simply</h2>
            <h4 className='font-medium text-[18px] leading-[70%] mb-[47px]'>by Paul Pritchard</h4>
            <p>Lorem Ipsum is simply dummy text of the printing 
            the industry's  standard dummy text ever since the</p>
        </div>

        <div className='feature-card text-center max-w-[408px]'>
            <div className='relative w-[400px] h-[534px]'>
            <Image src={'/dummyimages/dasd.jpeg'} fill objectFit="cover" objectPosition="center"/>
            </div>
            <h2 className='text-[35px] leading-[100%] mt-[36px] mb-[33px]'>Lorem Ipsum is simply</h2>
            <h4 className='font-medium text-[18px] leading-[70%] mb-[47px]'>by Paul Pritchard</h4>
            <p>Lorem Ipsum is simply dummy text of the printing 
            the industry's  standard dummy text ever since the</p>
        </div>

        <div className='feature-card text-center max-w-[408px]'>
            <div className='relative w-[400px] h-[534px]'>
            <Image src={'/dummyimages/dasd.jpeg'} fill objectFit="cover" objectPosition="center"/>
            </div>
            <h2 className='text-[35px] leading-[100%] mt-[36px] mb-[33px]'>Lorem Ipsum is simply</h2>
            <h4 className='font-medium text-[18px] leading-[70%] mb-[47px]'>by Paul Pritchard</h4>
            <p>Lorem Ipsum is simply dummy text of the printing 
            the industry's  standard dummy text ever since the</p>
        </div>

        
    </div>
  )
}

export default FeaturedProducts