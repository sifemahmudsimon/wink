import React from 'react'
import SectionTitle from '../ReuseableComponent/SectionTitle'
import Image from 'next/image'

const ProductAvailablity = () => {
  return (
    <div className='pt-[100px] pb-[44px]'>
        <SectionTitle 
        title='Our Products are Available Near you' 
        subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been '/>
        <div className='flex flex-wrap gap-[16px] mx-auto justify-center max-w-[1256px]'>
        {[...Array(6)].map((data, index) => (
          <div key={index} className="relative w-[196px] h-[114px]">
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