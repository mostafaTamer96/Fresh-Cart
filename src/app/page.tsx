import { Button } from '@/components/ui/button'
import React from 'react'
import Services from './_components/Services'
import CouponCards from './_components/CouponCards'

export default async  function page() {


async  function getAllProducts(){
try {
 
  
 const res= await fetch("https://ecommerce.routemisr.com/api/v1/products")
const finalResp= await res.json()
console.log("finalResp",finalResp)

} catch (error) {
  console.log(error)
  
}




  }
 const product = await getAllProducts()
  return (
    <div>
     


   <Services />

      {/* <Allcategories /> */}

      <CouponCards />


      {/* title */}
      <div className="container mx-auto flex items-center gap-3 py-4">
        {/* Vertical  Bar */}
        <div className="w-1.5 h-8 bg-gradient-to-t from-[#00BC7D] to-[#007A55] rounded-full"></div>

        {/* Heading */}
        <h2 className="font-bold text-3xl text-[#1E2939]">
          Featured <span className="text-[#009966]">Products</span>
        </h2>



     
      </div>


    </div>
  )
}
