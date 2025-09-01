import Image from 'next/image'
import React from 'react'

const SubmitForm = () => {
  return (
    <div>
        <div className="w-full relative h-screen" >
      <Image
        src="/addBusiness/header.png"
        alt="header"
        width={1920}   // original image width
        height={300}   // desired header height
        className="object-cover w-full"
        priority
      />

      {/* Optional overlay text */}
      <div className="absolute inset-0 top-4 lg:top-28">
        <h1 className="text-white text-xl md:text-4xl lg:text-5xl font-bold text-center drop-shadow-lg inter-text">
          Welcome To Exclusive Discounts & Savings
        </h1>
        <h3 className='text-center text-sm lg:text-xl lg:mt-2 montserrat-text text-white'>Get access to curated deals across various categories</h3>
      </div>
        </div>
        {/*Submit Form*/}
        <div className='lg:w-[886px] lg:h-[1616px] bg-amber-700'>

        </div>
    </div>
  )
}

export default SubmitForm
