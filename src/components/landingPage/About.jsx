import React from 'react'
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold common-text inline-block border-b-2 border-blue-900 pb-1">
          About Us
        </h3>
        <p className="text-gray-600 mt-2">
          Follow three easy steps to get your card and unlock exclusive discounts.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6">
        {/* Left Image with overlay stats */}
        <div className="relative ">
          <Image
            src="/header/about.jpg"
            alt="About Us"
            width={560}
            height={400}
            className="rounded-lg object-cover h-[660px] w-full"
          />

          {/* Stats Overlay */}
          <div className="absolute bottom-6 left-150 -translate-x-1/2 bg-white shadow-md rounded-lg flex gap-8 px-8 py-8 w-[90%] md:w-[80%] justify-around">
            <div className="text-center">
              <h4 className="text-blue-900 font-bold text-xl">250+</h4>
              <p className="text-gray-600 text-sm">Verified Discounts</p>
            </div>
            <div className="text-center">
              <h4 className="text-blue-900 font-bold text-xl">100K+</h4>
              <p className="text-gray-600 text-sm">Happy Members</p>
            </div>
            <div className="text-center">
              <h4 className="text-blue-900 font-bold text-xl">4.8★</h4>
              <p className="text-gray-600 text-sm">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Helping Frontline Workers <br /> Save More
          </h2>
          <p className="text-gray-600 mb-6">
           We empower essential workers by providing access to exclusive discounts across thousands of top UK brands. Whether you’re part of the NHS, emergency services, or armed forces, we make life more affordable for those who serve.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span className="text-gray-700 text-sm">
                Maximum Savings Verified Access
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span className="text-gray-700 text-sm">
                Partnered with 15,000+ Brands
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span className="text-gray-700 text-sm">
                Instant Discount Codes
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-5 h-5" />
              <span className="text-gray-700 text-sm">
                Free App & Easy Use
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About