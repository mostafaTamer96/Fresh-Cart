import { getSpecificProduct } from '@/Services/Products'

import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb" 
import { FaBolt, FaHome, FaShoppingCart, FaStar, FaShieldAlt, FaTruck, FaCheck, FaBoxOpen, FaRegStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'
import { IoShareSocialOutline } from 'react-icons/io5'
import { FaTruckFast } from 'react-icons/fa6'
import { IoIosRefresh } from 'react-icons/io'
import ProductTabs from '@/app/_components/ProductTabs';



  interface ParamsProps {
  params: Promise<{
    id: string;
  }>;
}


export default async function page( { params }:ParamsProps) {
  console.log("props from dynamic routing", params)
  const myParams = await params
  console.log("myParams ", myParams)
  const product = await getSpecificProduct(myParams.id)
  console.log("product is a", product)

  let discounted = 0;
  if (product?.priceAfterDiscount) {
    discounted = 100 - ((product.priceAfterDiscount) / (product.price)) * 100
  }

  const cards = [
    { description: "On orders over 500 EGP", title: "Free Shipping", icon: FaTruckFast, key: "movingTruck", bg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
    { description: "Secure Payment", title: "100% Secure Transactions", icon: IoIosRefresh, key: "refresh", bg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
    { description: "Easy Returns", title: "14-day Return Policy", icon: FaShieldAlt, key: "shield", bg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
  ]

  const activeTabClass = `relative flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-gray-600 transition-all cursor-pointer rounded-none hover:bg-[#F9FAFB] hover:text-[#16a34a] focus-visible:outline-none after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-transparent data-[state=active]:bg-[#F7FEF9] data-[state=active]:text-[#16a34a] data-[state=active]:after:bg-[#16a34a] data-[state=active]:shadow-none`
  const btnClass = `hover:text-[#16a34a] text-[#6A7282] font-medium text-sm cursor-pointer`

  return (
    <section className='mx-auto w-10/12 container min-h-screen py-6'>
      
      {/* Breadcrumb Header */}
      <Breadcrumb className='py-3 mb-4'>
        <BreadcrumbList>
          <BreadcrumbItem className='flex items-center'>
            <FaHome />
            <BreadcrumbLink className={btnClass} href="/"> Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        
          <BreadcrumbItem>
            <BreadcrumbLink className={btnClass} href="#">{product?.category?.name}</BreadcrumbLink>
          </BreadcrumbItem>
          
          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage className={btnClass}>{product?.category?.slug}</BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          
          <BreadcrumbItem>
            <BreadcrumbPage className={btnClass}>{product?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Main Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">

        {/* Left Column: Sticky Image */}
        <div className="lg:col-span-1 border-2 shadow-lg p-2">
          <div className="sticky top-6 p-4 border rounded-lg border-[#d4d4d4] shadow-lg bg-white">
            image
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="lg:col-span-3 border shadow-lg p-4">

          {/* Badges */}
          <div className="title flex items-center gap-2">
            <span className="bg-[#DCFCE7] text-[#15803d] text-xs px-3 py-1.5 rounded-full hover:bg-[#b8fcd0] transition cursor-pointer font-medium">
              {product?.category?.name}
            </span>
            <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium">
              {product?.category?.slug}
            </span>
          </div>

          {/* Title */}
          <h2 className='text-[#101828] font-bold text-3xl'>{product?.title}</h2>

          {/* Reviews */}
          <div className='flex items-center gap-2 reviews'>
            <FaStar className='text-amber-300' />
            <span className='text-[#4A5565] font-medium text-sm'>
              {product?.ratingsAverage} ({product?.quantity} Reviews)
            </span>
          </div>

          {/* Pricing */}
          <div>
            {product?.priceAfterDiscount ? (
              <div className='flex items-center gap-4 my-3  '>
                  <p className='         text-[#101828] font-bold text-3xl '>{product.priceAfterDiscount} EGP</p>
                <p className='text-[#99a1af] font-medium text-lg line-through  '>{product?.price} EGP</p>
              
                <p className=' my-3 font-medium text-white bg-red-500 py-1 px-3 rounded-full text-sm'>
                  save {Math.floor(discounted)}%
                </p>
              </div>
            ) : (
              <p className='text-[#101828] font-bold text-3xl'>{product?.price} EGP</p>
            )}
          </div>

          {/* Stock Tag */}
          <div className='quantity flex items-center gap-2'>
            {product?.quantity ? (
              <div className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700 font-medium">
                <span className='w-2 h-2 rounded-full bg-green-500'></span>
                <p>In stock</p>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-red-50 text-red-700 font-medium">
                <span className='w-2 h-2 rounded-full bg-red-500'></span>
                <p>Not in stock</p>
              </div>
            )}
          </div>

          {/* Description */}
          <p className='description border-t my-3  border-[#F3F4F6] pt-4 text-[#4A5565] font-medium text-base'>
            {product?.description}
          </p>

          {/* Quantity Controls */}
          <div>
            <p className='text-[#364153] font-medium text-sm mb-1'>Quantity</p>
          </div>

          {/* Total Price Box */}
          <div className='p-4 flex items-center justify-between my-5 bg-gray-50 border rounded-2xl border-gray-200'>
            <p className='text-[#4A5565] font-medium text-xl'>Total Price:</p>
            <p className='text-[#16A34A] font-bold text-2xl'>{product?.price}.00 EGP</p>
          </div>

          {/* Buttons */}
          <div className="buttons flex flex-col sm:flex-row gap-3">
            <button type='button' className='shadow-lg flex items-center justify-center gap-3 bg-[#16A34A] text-white cursor-pointer h-[52px] w-full rounded-2xl py-3.5 px-6 hover:bg-[#078234] transition'>
              <FaShoppingCart className='w-5 h-4' />
              <span className='font-medium text-lg my-2'>Add to Cart</span>
            </button>

            <button type='button' className='shadow-lg flex items-center justify-center gap-3 bg-[#101828] text-white cursor-pointer h-[52px] w-full rounded-2xl py-3.5 px-6 hover:bg-gray-800 transition'>
              <FaBolt className='w-5 h-4' />
              <span className='font-medium text-lg'>Buy Now</span>
            </button>
          </div>

          {/* Wishlist & Share */}
          <div className='flex items-center gap-3 pt-2'>
            <button type="button" className="group cursor-pointer w-full border-2 py-3 px-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 border-gray-200 text-gray-700 hover:border-[#86EFAC] hover:text-[#86EFAC]">
              <CiHeart className="text-gray-700 group-hover:text-[#86EFAC] text-xl transition-colors duration-200" />
              <span className="font-medium text-base text-[#364153] group-hover:text-[#86EFAC] transition-colors duration-200">
                Add to Wishlist
              </span>
            </button>

            <button type="button" className='group cursor-pointer border-2 border-gray-200 text-gray-700 p-3 rounded-xl hover:border-[#16A34A] transition-colors duration-200'>
              <IoShareSocialOutline className='group-hover:text-[#16A34A] text-xl' />
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {cards.map((item) => (
              <div key={item.key} className="p-4 rounded-xl  shadow-sm flex items-center gap-3">
                <div className={`icon ${item.bg} w-10 h-10 rounded-full flex items-center justify-center`}>
                  <item.icon className={`${item.iconColor} font-bold text-lg`} />
                </div>
                <div className="services flex-1 min-w-0">
                  <h5 className="font-semibold text-sm text-[#1E2939] truncate">{item.title}</h5>
                  <p className="font-medium text-[#6A7282] text-xs truncate">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Shadcn UI Tabs Component */}

      <ProductTabs product={product}  />
      

    </section>
  )
}