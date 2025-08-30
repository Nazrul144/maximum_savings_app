import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const Register = () => {
  return (
    <div>
         <div classNameName='lg:flex md:flex mt-12 justify-center mx-auto gap-6 bg-white w-[820px] p-2 shadow-2xl'>
          {/*Image div*/}
            <div classNameName="relative h-[600px] w-96">
      {/* Image fills the parent */}
      <Image
        src="/login.JPG"            // must match exact filename/case in /public
        alt="Login_Image"
        fill                         // use fill instead of width/height
        classNameName=" object-cover"
        priority
      />

      {/* Centered overlay */}
      <div classNameName="absolute inset-0 grid place-items-center ml-14">
     <div classNameName="z-10  drop-shadow-lg">
        <h1 classNameName='text-3xl font-bold text-white'>Create your accoun</h1>
        <h4 classNameName='text-lg montserrat-text text-white mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h4>
     </div>
      </div>

      {/* Optional dark overlay for readability */}
       <div classNameName="absolute inset-0 rounded-lg bg-black/30" />
    </div>
            {/*Login form div*/}
            <div classNameName='h-[600px] w-96 '>
              <div classNameName="w-full max-w-md p-8 space-y-3   text-gray-100 h-full ">
	<h1 classNameName=" montserrat-text common-text text-5xl font-bold">Account</h1>
	<form noValidate="" action="" classNameName="space-y-6">
		<div classNameName="space-y-1 text-sm">
			<label htmlFor="username" classNameName="block text-gray-400">Email Address</label>
			<input type="text" name="username" id="username" placeholder="Enter your email" classNameName="w-full px-4 py-3 rounded-md border-1 border-[#00308F] bg-transparent text-gray-100 " />
		</div>
		<div classNameName="space-y-1 text-sm">
			<label htmlFor="password" classNameName="block text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" classNameName="w-full px-4 py-3 rounded-md border-1 border-[#00308F] bg-transparent text-gray-100 focus:border-violet-400" />
			<div classNameName="flex justify-end text-xs text-gray-400">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<Button classNameName="block w-full text-center rounded-sm text-white bg-[#00308F]  h-12 cursor-pointer">LOG IN</Button>
		<Button classNameName="flex items-center justify-center w-full h-12 bg-transparent border-1 border-[#00308F] common-text rounded-sm cursor-pointer text-xl hover:bg-white">
      <FcGoogle classNameName='text-2xl ' /> {/* Add a little margin-right to space out the icon */}
      Google
    </Button>
	</form>
	
	<p classNameName="text-xs text-center sm:px-6 text-gray-800">Don't have an account?
		<Link rel="noopener noreferrer" href="#" classNameName="underline font-bold"> Sign up</Link>
	</p>
</div>
            </div>
        </div>
        <div className="p-6">
  <h2 className="text-2xl font-bold text-blue-800 mb-4">Account</h2>

  <div className="relative inline-block mr-4">
    <label for="first" 
      className="absolute -top-2 left-3 bg-white px-1 text-blue-800 text-sm font-medium">
      First Name
    </label>
    <input id="first" type="text"
      className="border-2 border-blue-800 rounded-md px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  </div>

 
  <div className="relative inline-block">
    <label for="last" 
      className="absolute -top-2 left-3 bg-white px-1 text-blue-800 text-sm font-medium">
      Last Name
    </label>
    <input id="last" type="text"
      className="border-2 border-blue-800 rounded-md px-3 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
  </div>
</div>

    </div>
  )
}

export default Register
