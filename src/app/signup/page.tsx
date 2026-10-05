
import { FaFacebook, FaGoogle, FaShieldAlt, FaStar } from 'react-icons/fa'

import { IoIosPersonAdd } from "react-icons/io";
import { FaTruckFast } from 'react-icons/fa6'
import Link from 'next/link'
import { Input } from '@/components/ui/input';

export default function Signup() {

  const services = [
    { title: "Premium Quality", description: "Premium quality products sourced from trusted suppliers.", icon: FaStar, key: "star" },
    { title: "Fast Delivery", description: "Same-day delivery available in most areas", icon: FaTruckFast, key: "truck" },
    { title: "Secure Shopping", description: "Your data and payments are completely secure", icon: FaShieldAlt, key: "shield" }
  ]

  return (
    <>
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">

        <div className="">

          <h1 className='font-bold text-4xl text-[#364153]'>Welcome to <span className='text-[#16A34A]'>FreshCart</span></h1>
          <p className='font-medium my-4 text-[#364153] text-xl'>Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.</p>

          <div className="CARDS">
            {services.map((card) => (
              <div className='my-4 flex justify-self-start gap-4 items-center' key={card.key}>
                <div className="icon w-12 h-12 flex items-center justify-center rounded-full bg-[#BBF7D0]">
                  <span className='text-[#16A34A]'>
                    <card.icon />
                  </span>
                </div>

                <div className="disc">
                  <h2 className='font-semibold text-lg text-[#364153]'>{card.title}</h2>
                  <p className='font-medium text-[#4A5565] text-base'>{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='shadow-lg p-2'>
            <div className="testimonials flex items-center justify-start gap-4">
              <div className="image">
                {/* <img src={customer.src} alt='customer pic' className='h-12 w-12 rounded-full' /> */}
              </div>

              <div className="proofs">
                <h2 className='font-medium text-[#364153] text-base'>Sarah Johnson</h2>
                <div className="stars flex">
                  <span><FaStar className='text-[#FFDF20]' /></span>
                  <span><FaStar className='text-[#FFDF20]' /></span>
                  <span><FaStar className='text-[#FFDF20]' /></span>
                  <span><FaStar className='text-[#FFDF20]' /></span>
                  <span><FaStar className='text-[#FFDF20]' /></span>
                </div>
              </div>
            </div>

            <p className='p-2'>
              <i className='my-9 font-medium text-base text-[#4A5565]'>
                FreshCart has transformed my shopping experience. The quality of the
                products is outstanding, and the delivery is always on time. Highly
                recommend!
              </i>
            </p>
          </div>

        </div>

        <div className='bg-white rounded-lg shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] p-4'>

          <div className="text-center p-4">
            <h2 className='text-[#364153] font-semibold text-3xl'>Create Your Account</h2>
            <p className='font-medium text-base text-[#364153]'>Start your fresh journey with us today</p>
          </div>

          <div className="btns flex gap-3">
            <button className='flex items-center gap-3 cursor-pointer justify-center border border-[#D1D5DC] rounded-[8px] w-65.5 h-11 hover:bg-[#F3F4F6]'>
              <FaGoogle className='text-[#E7000B]' />
              Google
            </button>

            <button className='flex items-center gap-3 cursor-pointer justify-center border border-[#D1D5DC] rounded-[8px] w-65.5 h-11 hover:bg-[#F3F4F6]'>
              <FaFacebook className='text-[#155DFC]' />
              Facebook
            </button>
          </div>

          <div className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4" />

          <form>
            <div className='my-2'>
              <label htmlFor="name" className='block text-sm font-medium text-[#364153] mb-1'>Name*</label>
              <Input id="name" placeholder="Ali" autoComplete="off" />
            </div>

            <div className='my-2'>
              <label htmlFor="email" className='block text-sm font-medium text-[#364153] mb-1'>Email*</label>
              <Input id="email" placeholder="aLi@example.com" autoComplete="off" />
            </div>

            <div className='my-2'>
              <label htmlFor="password" className='block text-sm font-medium text-[#364153] mb-1'>Password*</label>
              <Input id="password" type="password" placeholder="create a strong password" autoComplete="off" />
            </div>

            <div className='my-2'>
              <label htmlFor="rePassword" className='block text-sm font-medium text-[#364153] mb-1'>Confirm Password*</label>
              <Input id="rePassword" type="password" placeholder="confirm your password" autoComplete="off" />
            </div>

            <div className='my-2'>
              <label htmlFor="phone" className='block text-sm font-medium text-[#364153] mb-1'>Phone Number*</label>
              <Input id="phone" placeholder="Enter an Egyptian number 01000000000" autoComplete="off" />
            </div>

            <button className='bg-[#16A34A] w-full h-10 rounded-2xl cursor-pointer flex items-center justify-center gap-3 text-white hover:bg-[#15803D] transition'>
              <span><IoIosPersonAdd className='w-[18.5px] h-[15.75px]' /></span>
              <span className='font-semibold text-base'>Create My account</span>
            </button>

            <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
              Already have an account?
              <Link href={"/login"} className='text-primary-600 hover:underline font-medium text-[#16a34a]'>
                Sign In
              </Link>
            </p>
          </form>

        </div>

      </div>
    </>
  )
}