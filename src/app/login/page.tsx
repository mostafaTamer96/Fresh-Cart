import Image from 'next/image'
import React from 'react'
import logInImage from "@/images/logInImageCart.png"
import { FaFacebook, FaGoogle, FaShieldAlt, FaTruck } from 'react-icons/fa'
import { FaClock } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";

import Link from 'next/link';
export default function page() {

    const services=[
        {icon:FaTruck, className:"text-[#6a7282] text-base font-medium", text:"Free delivery" ,key:"truck"},
         {icon:FaShieldAlt , className:"text-[#6a7282] text-base font-medium", text:"Secure Payment" ,key:"shield"},
          {icon:FaClock, className:"text-[#6a7282] text-base font-medium", text:"24/7 Support" ,key:"clock"}
    ]
    const userServices=[
               {icon:FaLock  , className:"text-[#6A7282] text-base font-medium", text:"SSL Secured" ,key:"Secured"},
      {icon:HiUserGroup   , className:"text-[#6A7282] text-base font-medium", text:"50K+ Users" ,key:"ppl"},
      {icon:FaStar   , className:"text-[#6A7282] text-base font-medium", text:"4.9 Rating" ,key:"star"},

    ]
  return (
    <>
   <div className="w-10/12 container mx-auto py-16 px-4">
  <div className="flex flex-col items-center justify-center gap-12 lg:flex-row">
   
   <div className="left">
    <div className="  image hidden relative h-96 md:block md:w-[616px]  shadow-lg mb-4  ">
      <Image
        fill
        src={logInImage}
        alt="Login fresh cart"
        className="object-cover  rounded-[16px] "
      />
    </div>

    <div className="text text-center ">
        <h2 className='text-3xl font-bold text-gray-800'> FreshCart - Your One-Stop Shop for Fresh Products</h2>
        <p className='text-lg my-3 text-gray-600'>Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>

    <div className="icons">
       
       <div className="flex items-center justify-center gap-3">

       {services.map( (item)=> <div key={item.key}>
    <div className="flex items-center justify-center gap-3">
            < item.icon className="text-[#16A34A]"  />
<p className= {item.className} >{item.text}</p>

    </div>

       </div> )}
        
       </div>
    </div>

    </div>

    </div>

    {/* <div className=" right w-full lg:w-1/2">
      sdfsd








      
    </div> */}

<div className="right w-full ">
  <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
    <div className="text-center p-4">
        <span className='text-3xl font-bold text-[#16A34A] capitalize'>fresh <span className='text-gray-800'>cart</span></span>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
      <p className="font-medium text-base text-[#364153]">Sign in to continue your fresh shopping experience</p>
    </div>

    <div className="btns space-y-6 my-3">
      <button className="GOOGLE w-full flex items-center gap-3 cursor-pointer justify-center border border-[#D1D5DC] rounded-[8px] h-11 hover:bg-[#F0FDF4] hover:border-2 hover:border-[#ccfcda] transition-all duration-200">
        <FaGoogle className="text-[#E7000B]" />
        Continue with Google
      </button>

      <button className="FACEBOOK w-full flex items-center gap-3 cursor-pointer justify-center border border-[#D1D5DC] rounded-[8px] h-11 hover:bg-[#F0FDF4] hover:border-2 hover:border-[#ccfcda] transition-all duration-200">
        <FaFacebook className="text-[#155DFC]" />
        Continue with Facebook
      </button>
    </div>

    <div className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['OR'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4" />

    <form>
      <div className="my-2">
        <label htmlFor="email" className="block text-sm font-medium text-[#364153] mb-1">
          Email*
        </label>
        {/* <Input id="email" placeholder="aLi@example.com" autoComplete="off" /> */}
      </div>

      <div className="my-2">
        <label htmlFor="password" className="block text-sm font-medium text-[#364153] mb-1">
          Password*
        </label>
        {/* <Input id="password" type="password" placeholder="create a strong password" autoComplete="off" /> */}
      </div>

      <button className="bg-[#16A34A] w-full h-10 rounded-lg my-4 cursor-pointer flex items-center justify-center gap-3 text-white hover:bg-[#15803D] transition">
        <span className="font-semibold text-base">Sign In</span>
      </button>

      <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
        Already have an account?
        <Link href="/signup" className="px-2 text-primary-600 hover:underline font-medium text-[#16a34a]">
          Create an account
        </Link>
      </p>
      
    </form>
<div className="flex flex-row flex-wrap items-center justify-center gap-6">
  {userServices.map((item) => (
    <div key={item.key} className="flex items-center justify-center gap-2">
      <item.icon className='text-[#6A7282]' />
      <span className={item.className}>{item.text}</span>
    </div>
  ))}
</div>
    </div>
  </div>
</div>


  </div>

    </>
  )
}
