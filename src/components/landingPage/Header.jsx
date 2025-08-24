import React from 'react'
import { Button } from '../ui/button'
import { BsRocketTakeoffFill } from "react-icons/bs";
import Image from 'next/image';

const Header = () => {
  return (
    <div>
        <h1 className='text-5xl text-center font-extrabold mt-4'>Unlock Over <span className='common-text'>15,000 Discounts</span> for Public Sector <br />Workers.</h1>
        <p className='text-center mt-4'>Access exclusive deals from top brands in retail, travel, and entertainment</p>
        <div className='flex justify-center items-center mt-4'>
        <Button className='common-bg text-xl px-4  font-semibold'>Get Started <BsRocketTakeoffFill /></Button>
        </div>
        <div className="flex justify-center items-center mt-6 bg-white">
      <div className="grid grid-cols-5 gap-3 max-w-5xl w-full px-2">
        {/* Left tall ship */}
        <div className="row-span-2">
          <Image
            src="/header/1.jpg"
            alt="ship-left"
            width={200}
            height={300}
            className="w-full h-[250px] object-cover rounded-md"
          />
        </div>

        {/* Protest */}
        <div className="row-span-1">
          <Image
            src="/header/2.jpg"
            alt="protest"
            width={200}
            height={150}
            className="w-full h-[180px] object-cover rounded-md"
          />
        </div>

        {/* Flag (center large, fill extra space) */}
        <div className="row-span-2 col-span-1">
          <Image
            src="/header/3.jpg"
            alt="flag"
            width={250}
            height={250}
            className="w-full h-[250px] object-cover rounded-md"
          />
        </div>

        {/* Right tall ship */}
        <div className="row-span-2">
          <Image
            src="/header/6.jpg"
            alt="ship-right"
            width={200}
            height={300}
            className="w-full h-[250px] object-cover rounded-md"
          />
        </div>

        {/* Blue building */}
        <div className="row-span-1">
          <Image
            src="/header/7.jpg"
            alt="blue-building"
            width={200}
            height={150}
            className="w-full h-[180px] object-cover rounded-md"
          />
        </div>

        {/* Building with flags */}
        <div className="row-span-1">
          <Image
            src="/header/4.jpg"
            alt="building-flags"
            width={200}
            height={150}
            className="w-full h-[180px] object-cover rounded-md"
          />
        </div>

        {/* Blue interior */}
        <div className="row-span-1">
          <Image
            src="/header/5.jpg"
            alt="blue-interior"
            width={200}
            height={150}
            className="w-full h-[180px] object-cover rounded-md"
          />
        </div>

        {/* Buckingham Palace */}
        <div className="row-span-1">
          <Image
            src="/header/8.jpg"
            alt="palace"
            width={200}
            height={150}
            className="w-full h-[180px] object-cover rounded-md"
          />
        </div>

        {/* Woman in car */}
        <div className="row-span-1">
          <Image
            src="/header/9.jpg"
            alt="woman-car"
            width={200}
            height={150}
            className="w-full h-[180px] object-cover rounded-md"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header