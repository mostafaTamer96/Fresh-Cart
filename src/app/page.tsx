import React from 'react'
import Services from './_components/Services'
import CouponCards from './_components/CouponCards'
import Image from 'next/image'
import { getAllProducts } from '@/Services/Products'
import Products from './_components/Products'
import Newsletter from './_components/NewsLetter'







export default async function page() {
 

  const product= await getAllProducts()

 
  return (

    <section className='  '>
     
 

      <Services />

     

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






