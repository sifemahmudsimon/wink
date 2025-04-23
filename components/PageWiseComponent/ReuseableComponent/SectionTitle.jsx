import React from 'react'

const SectionTitle = ({title,subtitle}) => {
  return (
    <div className='text-center mx-auto py-[40px]'>
      <h1 className={`font-medium text-[50px] leading-[100%] ${subtitle && 'mb-[26px]'}`}>{title ? title : 'Section Title'}</h1>
      {subtitle && <p className='h-[48px] leading-[100%]'>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle