import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const Register = () => {
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
     <div className="z-10  drop-shadow-lg">
        <h1 className='text-3xl font-bold text-white'>Create your accoun</h1>
        <h4 className='text-lg montserrat-text text-white mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</h4>
     </div>
      </div>

      {/* Optional dark overlay for readability */}
       <div className="absolute inset-0 rounded-lg bg-black/30" />
    </div>
            {/*Login form div*/}
            <div className='h-[600px] w-96 '>
              <div className="w-full max-w-md p-8 space-y-3   text-gray-100 h-full ">
	<h1 className=" montserrat-text common-text text-5xl font-bold">Account</h1>
	<form noValidate="" action="" className="space-y-6">
		<div className="space-y-1 text-sm">
			<label htmlFor="username" className="block text-gray-400">Email Address</label>
			<input type="text" name="username" id="username" placeholder="Enter your email" className="w-full px-4 py-3 rounded-md border-1 border-[#00308F] bg-transparent text-gray-100 " />
		</div>
		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-1 border-[#00308F] bg-transparent text-gray-100 focus:border-violet-400" />
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
		<Link rel="noopener noreferrer" href="#" className="underline font-bold"> Sign up</Link>
	</p>
</div>
            </div>
        </div>
    </div>
  )
}

export default Register
