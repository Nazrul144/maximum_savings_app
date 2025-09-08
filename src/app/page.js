'use client'
import About from "@/components/LandingPage/About";
import EmailSubscription from "@/components/LandingPage/EmailSubscription";
import Faq from "@/components/LandingPage/Faq";
import Header from "@/components/LandingPage/Header";
import LatestNews from "@/components/LandingPage/LatestNews";
import Subscription from "@/components/LandingPage/Subscription";
import Works from "@/components/LandingPage/Works";
import Hero from "@/components/UserLandingPage/Hero";
import { useState } from "react";



export default function Home() {

  const [isLogin, setIsLogin] = useState(true)

  if(isLogin){
    return <Hero/>
  }

  return (
    <div>
      <Header/>
      <Works/>
      <About/>
      <Subscription/>
      <LatestNews/>
      <EmailSubscription/>
      <Faq/>
    </div>
  );
}
