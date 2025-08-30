import React from 'react'
import { Button } from '../ui/button'

const Partner = () => {
  return (
    <div>
      <div className='lg:w-7xl mx-auto mt-16'>
            <h1 className='text-center font-bold text-5xl common-text montserrat-text '>Why Partner With Us</h1>
            <h3 className='text-center mt-6 text-lg poppins-text '>A trusted platform built for high-impact results. <br /> With over a million verified members and thousands of trusted partners, we help your business <br /> stand out. Whether you're a local shop or a national brand, your offers gain powerful exposure <br /> across our app, website, and marketing channels — without the stress of setup fees or long <br /> commitments. You bring the offer, we bring the audience.</h3>
            <div className='flex justify-center items-center mt-6'>
                <Button className='common-bg montserrat-text text-lg cursor-pointer'>Click Here To Submit Your Offer</Button>
            </div>
            <div className='grid lg:grid-cols-2 gap-10 mt-8'>
            {
                cardData?.map((card)=>(
                    <div key={card.title} className='lg:w-[633px] h-[233px] rounded-lg border-b-4 border-[#00308F] shadow-xl'>
                        <h3 className='text-center common-text font-bold text-4xl inter-text mt-16'>{card.title}</h3>
                        <h3 className='text-center px-25 mt-2'>{card.description}</h3>
                    </div>
                ))
            }
      </div>
      </div>
      {/*Card*/}
      
    </div>
  )
}

export default Partner

const cardData = [
    {
        title: "1M+ Members",
        description: "Access a large verified audience ready to support your offers and promotions."
    },
    {
        title: "No Setup Costs",
        description: "Start your partnership with zero upfront investment and dedicated support."
    },
    {
        title: "High Engagement",
        description: "Your offers will appear across our web platform, app, and email campaigns."
    },
    {
        title: "15K+ Brands",
        description: "Join a network of trusted brands offering exclusive benefits to key workers."
    },
]
