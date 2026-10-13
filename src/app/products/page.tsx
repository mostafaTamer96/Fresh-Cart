
import { getAllProducts } from '@/Services/Products'
import Link from 'next/link'
import React from 'react'

import { FaBoxOpen } from 'react-icons/fa'

import Categoriesnav from '../_components/Categoriesnav'
import Image from 'next/image'
import Products from '../_components/Products'

export default async function page() {
    const products = await getAllProducts()

    
    return (
        <>

        <Categoriesnav field={"Categories"} bgLinear={"bg-gradient-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80]"} 
            title={"All Products"} disc={"Explore our complete product collection"} 
            icon={<FaBoxOpen className='text-white text-3xl'/>}
            />


<div className=" PRODUCTS container w-10/12 mx-auto   py-8">    
  
  
  <p className="  mb-6 w-10/12 pt-8 text-sm text-gray-500">
   Showing  {products?.length} products
  </p>


<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-5">
  {products?.map((product) => <div key={product.id}>
<Products  product={product}  />


  </div>
  

              
              
              )}

</div>


  </div>  


 {/*   */}
            <section className='    '>
     

              


            </section>




        </>
    )
}
