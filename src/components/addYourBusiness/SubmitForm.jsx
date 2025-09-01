import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { useId } from "react"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const SubmitForm = () => {
    const id = useId()
  return (
    <div>
        <div className="w-full relative " >
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
        <div className='w-full h-64 md:h-96 lg:w-[886px] lg:h-[1616px] bg-amber-700 mx-auto'>
            <h1 className='text-center font-bold text-inter text-4xl pt-16 pb-12'>Submit A Request</h1>
                <form className='px-16'>
                    <div className='mb-4'>
                    <Label htmlFor="email">Business Name</Label>
                    <Input className='mt-2 text-[#BFB4B4] border-1 border-[#00308F] h-14 text-xl' type="email" placeholder="Your business or brand name" />
                    </div>
                    <div className='mb-4'>
                    <Label htmlFor="email">Business Secto</Label>
                    <Input className='mt-2 text-[#BFB4B4] border-1 border-[#00308F] h-14 text-xl' type="email" placeholder="Drop Down Menu" />
                    </div>
                    <div className='mb-4'>
                    <Label htmlFor="email">Website Link</Label>
                    <Input className='mt-2 text-[#BFB4B4] border-1 border-[#00308F] h-14 text-xl' type="email" placeholder="https://example.com" />
                    </div>
                    <div className='mb-4'>
                    <Label htmlFor="email">Contact Person Name</Label>
                    <Input className='mt-2 text-[#BFB4B4] border-1 border-[#00308F] h-14 text-xl' type="email" placeholder="Full name" />
                    </div>
                    <div className='mb-4'>
                    <Label htmlFor="email">Contact Email</Label>
                    <Input className='mt-2 text-[#BFB4B4] border-1 border-[#00308F] h-14 text-xl' type="email" placeholder="name@company.com" />
                    </div>
                    <div className='mb-4'>
                    <Label htmlFor="email">Contact Phone</Label>
                    <Input className='mt-2 text-[#BFB4B4] border-1 border-[#00308F] h-14 text-xl' type="email" placeholder="+44 20 1234 5678" />
                    </div>
                    <div className='mb-4'>
                    <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Textarea with no resize</Label>
      <Textarea
        id={id}
        className="[resize:none]"
        placeholder="Leave a comment"
      />
    </div>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default SubmitForm
