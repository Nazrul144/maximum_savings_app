
import Header from '@/components/addYourBusiness/Header'
import Partner from '@/components/addYourBusiness/Partner'
import WhatYouGet from '@/components/addYourBusiness/WhatYouGet'
import Works from '@/components/addYourBusiness/Works'
import Subscription from '@/components/LandingPage/Subscription'
import React from 'react'

const BusinessPage = () => {
  return (
    <div>
      <Header/>
      <Partner/>
      <Works/>
      <Subscription/>
      <WhatYouGet/>
    </div>
  )
}

export default BusinessPage
