import React from 'react'
import { useId } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const EmailSubscription = () => {
    const id = useId()
  return (
    <div>
      <div className='lg:flex gap-6'>
        <div>
            <h3>Mega Pale</h3>
            <h2>Join Our Savings Club</h2>
            <p>Be the first to know about exclusive offers, latest discounts, and special rewards. Subscribe to our newsletter and never miss a deal again!</p>
            
             <div className="*:not-first:mt-2">
      <Label htmlFor={id}>Input with button</Label>
      <div className="flex gap-2">
        <Input id={id} className="flex-1" placeholder="Email" type="email" />
        <Button variant="outline">Send</Button>
      </div>
    </div>
        </div>
        <div>
            image
        </div>
      </div>
    </div>
  )
}

export default EmailSubscription
