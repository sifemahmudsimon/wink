import React from 'react'
import SectionTitle from '../ReuseableComponent/SectionTitle'
import Image from 'next/image'

const ProductAvailablity = () => {
  return (
    <div className='py-[16px] md:pt-[100px] md:pb-[44px]'>
        <SectionTitle 
        title='Our Products are Available Near you' 
        subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '/>
        <div className='flex flex-wrap gap-[16px] mx-auto justify-center max-w-[1256px]'>
        {[...Array(6)].map((data, index) => (
          <div key={index} className="relative w-[150px] h-[88px] md:w-[196px] md:h-[114px]">
            <Image
              src="/dummyimages/log.png"
              fill
              objectFit="contain"
              objectPosition="center"
              alt={`Image`}
            />
          </div>
        ))}
        </div>
    </div>
  )
}

export default ProductAvailablity