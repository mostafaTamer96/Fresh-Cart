
import { getCategories } from '@/Services/Products'
import Link from 'next/link'
import React from 'react'
import { IoLayers } from 'react-icons/io5'
import Categoriesnav from '../_components/Categoriesnav'
import Image from 'next/image'



export default async function Page() {





    
    const categories = await getCategories()
   

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
         


            <Categoriesnav   field={"Categories"} bgLinear={"bg-gradient-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80]"} 
            title={"All Categories"} disc={"Browse our wide range of product categories"} 
            icon={<IoLayers className="text-white text-3xl"/>}
            
            />

            {/* Categories Grid Section */}
                  <section>
                <div className=" w-10/12   mx-auto px-4 py-10">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                       {categories?.map((item) => (
  <Link
    key={item._id}
    href={`/categories/${item._id}`}
    className="group bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
  >
    <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-gray-50">
      <Image
        src={item.image}
        alt={`${item.name || item.slug} category`}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <h3 className="text-center font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
      {item.name || item.slug}
    </h3>
  </Link>
))}
                    </div>
                </div>




            </section>  
      
        </div>
    )
}