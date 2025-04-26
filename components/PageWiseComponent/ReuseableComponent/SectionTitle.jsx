import React from 'react'

const SectionTitle = ({title,subtitle}) => {
  return (
    <div className='text-center mx-auto px-[16px] py-[32px] md:py-[40px]'>
      <h1 className={`font-light md:font-medium text-[36px] md:text-[50px] leading-[100%] ${subtitle && 'mb-[10px] md:mb-[26px]'}`}>{title ? title : 'Section Title'}</h1>
      {subtitle && <p className='md:h-[48px] leading-[100%]'>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle