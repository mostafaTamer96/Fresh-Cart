import React, { lazy, Suspense } from 'react'
import Services from './_components/Services'
import CouponCards from './_components/CouponCards'
import Image from 'next/image'
import { getAllCategories, getAllProducts } from '@/Services/Products'
import Products from './_components/Products'
import Newsletter from './_components/NewsLetter'
import AllCategories from './_components/AllCategories'
import MySlider from './_components/MySlider'

import sliderImage from "@/images/sliderPic.png"
import secondImage from "@/images/e18063f3aec6ff662019fb987d6290e1655d93be.png"
import { CircularProgress } from 'react-loader-spinner'




export default async function page() {
 

  const product= await getAllProducts()
const listOfImages=[sliderImage.src,sliderImage.src]
console.log("listOfImages",listOfImages)

const AllCategorieslazyLoading= lazy (()=> import ('./_components/AllCategories'))
 
  return (

    <section className='  '>
     
<MySlider
  slides={[
   
   {
   image: `${sliderImage.src}`,
      title: 'Fresh Products Delivered to your Door',
      subtitle: 'Get 20% off your first order',
      primaryButton: { label: 'Shop Now', href: '/shop', color: '#00C950' },
      secondaryButton: { label: 'Learn More', href: '/shop' },
    },
   
   
    {
      image: `${sliderImage.src}`,
      title: 'Fast & Free Delivery',
      subtitle: 'Same day delivery available',
      primaryButton: { label: 'Order Now', href: '/shop', color: '#9333ea' },
      secondaryButton: { label: 'Delivery Info', href: '/delivery' },
    },
    {
   image: `${sliderImage.src}`,
      title: 'Premium Quality Guaranteed',
      subtitle: 'Fresh from farm to your table',
      primaryButton: { label: 'Shop Now', href: '/shop', color: '#2563eb' },
      secondaryButton: { label: 'Learn More', href: '/about' },
    },


    
  ]}
  // optional, these are the defaults
  gradientFrom="#00C950E5"
  gradientTo="#05DF7280"
  gradientDirection="to right"
/>

      <Services />

  <Suspense fallback={<div className='mx-auto w-10/12 container flex items-center justify-center'><CircularProgress
height="100"
width="100"
color="#4fa94d"
ariaLabel="circular-progress-loading"
wrapperStyle={{}}
wrapperClass="wrapper-class"
visible={true}
strokeWidth={2}
animationDuration={1}
/></div>}>

    <AllCategorieslazyLoading />
  </Suspense>

   

      <CouponCards />


      {/* title */}
      <div className=" w-10/12 mx-auto flex items-center gap-3 py-4">
        {/* Vertical  Bar */}
        <div className="w-1.5 h-8 bg-gradient-to-t from-[#00BC7D] to-[#007A55] rounded-full"></div>

        {/* Heading */}
        <h2 className="font-bold text-3xl text-[#1E2939]">
          Featured <span className="text-[#009966]">Products</span>
        </h2>
      </div>


      {/* Mapped product div */}
    {/* <Products/> */}

   <div className="container mx-auto w-10/12  py-4   grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-5">
  {product?.map((product) => (<div key={product.id}>
    <Products product={product}  />

  </div>))}
</div>

<Newsletter/>
    </section>

    

  )
}






