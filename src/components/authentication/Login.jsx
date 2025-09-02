import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from "react-icons/fc";
import Link from 'next/link';

const Login = () => {
  return (
    <div>
        <div className='lg:flex md:flex mt-12 justify-center mx-auto gap-6 bg-white w-[820px] p-2 shadow-2xl'>
          {/*Image div*/}
            <div className="relative h-[600px] w-96">
      {/* Image fills the parent */}
      <Image
        src="/login.JPG"            // must match exact filename/case in /public
        alt="Login_Image"
        fill                         // use fill instead of width/height
        className=" object-cover"
        priority
      />

      {/* Centered overlay */}
      <div className="absolute inset-0 grid place-items-center ml-14">
        <h1 className="z-10 text-3xl font-bold text-white drop-shadow-lg">
          Welcome To MaximumSavings
         <hr className="border-t-1 border-[#7BB662] w-72 mt-2" />
        </h1>
        
      </div>
        <h4 className='text-white absolute bottom-4 text-sm left-12'>Log in to your <span className='font-bold'>MaximumSavings</span> account.</h4>

      {/* Optional dark overlay for readability */}
       <div className="absolute inset-0 rounded-lg bg-black/30" />
    </div>
            {/*Login form div*/}
            <div className='h-[600px] w-96 '>
              <div className="w-full max-w-md p-8 space-y-3   text-gray-100 h-full ">
	<h1 className=" montserrat-text text-center common-text text-5xl font-bold">Login</h1>
	<form noValidate="" action="" className="space-y-6">
		  <div className="relative w-80">
      {/* Label on border */}
      <label
        htmlFor="email"
        className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600"
      >
        Email Address
      </label>

      {/* Input box */}
      <input
        type="email"
        id="email"
        className="w-full h-12 rounded-md border border-blue-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
    </div>
		<div className="space-y-1 text-sm">
			  <div className="relative w-80">
      {/* Label on border */}
      <label
        htmlFor="email"
        className="absolute -top-2 left-3 bg-white px-1 text-sm text-gray-600"
      >
        Password
      </label>

      {/* Input box */}
      <input
        type="email"
        id="email"
        className="w-full h-12 rounded-md border border-blue-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
    </div>
			<div className="flex justify-end text-xs text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<Button className="block w-full text-center rounded-sm text-white bg-[#00308F]  h-12 cursor-pointer">LOG IN</Button>
		<Button className="flex items-center justify-center w-full h-12 bg-transparent border-1 border-[#00308F] common-text rounded-sm cursor-pointer text-xl hover:bg-white">
      <FcGoogle className='text-2xl ' /> {/* Add a little margin-right to space out the icon */}
      Google
    </Button>
	</form>
	
	<p className="text-xs text-center sm:px-6 text-gray-800">Don't have an account?
		<Link href={"/register"} className="underline font-bold"> Sign up</Link>
	</p>
</div>
            </div>
        </div>
    </div>
  )
}

export default Login
