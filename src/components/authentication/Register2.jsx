import Image from 'next/image'
import React from 'react'
import { useId } from "react"

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const Register2 = () => {
     const id = useId()
  return (
    <div>
        <div className='w-[803px] h-[516px]'>
                <div className='w-[820px] h-[50px]'>
                    <Image 
                        src={'/register2.png'}
                          width={802}
                          height={50}
                          objectFit=''
                          priority       
                    />
                </div>
                <h1 className='font-bold common-text text-4xl mt-12 montserrat-text'>Marketing preferences</h1>
                <h3 className='text-center text-lg mt-6'>Can we contact you with promotions and updates to help you get the most out of your Blue Light Card?</h3>
                <div className='mt-10'>
                     <RadioGroup defaultValue="1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="1" id={`${id}-1`} />
        <Label htmlFor={`${id}-1`}>Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="2" id={`${id}-2`} />
        <Label htmlFor={`${id}-2`}>Option 2</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="3" id={`${id}-3`} />
        <Label htmlFor={`${id}-3`}>Option 3</Label>
      </div>
    </RadioGroup>
                </div>
        </div>
    </div>
  )
}

export default Register2
