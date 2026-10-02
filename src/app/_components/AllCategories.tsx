import { getAllCategories } from '@/Services/Products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'



export default async function AllCategories() {


  const categories = await getAllCategories()


  return (
    <>
      

  <section className=" w-10/12 mx-auto container  py-10 ">
      <div className="container mx-auto px-4 ">


        <div className="container   mx-auto flex items-center gap-3 mb-8">
          {/* Vertical  Bar */}
          <div className=" w-1.5 h-8 bg-linear-to-t from-[#00BC7D] to-[#007A55] rounded-full"></div>

          <div className="flex my-8 gap-3 flex-1 justify-between items-center">

            <h2 className="  font-bold text-3xl text-[#1E2939]">
              Shop By  <span className="text-[#009966]">Category</span>
            </h2>

            <Link href={"/categories"}  className='cursor-pointer flex gap-1 justify-center items-center font-medium text-[#16A34A] text-base hover:text-[#117134]'>View All Categories

              <FaArrowRight className='hover:text-[#117134]' />
            </Link>
          </div>
        </div>



        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-4">
          {categories?.map(   (item) =>  <div key={item._id}
              className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer" >

              {/* Image Container */}
              <div className="h-20 w-20  relative overflow-hidden bg-green-100/40 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#096]-200 transition">
              
                <Image    className=' object-cover' src={item.image}   fill   alt={item.name}     />
              </div>

              {/* Text Label */}
              <div className="text-center pb-2">
                <p className="text-[#364153] font-semibold text-lg group-hover:text-emerald-600 transition-colors">
                  {item.name}
                </p>

              </div>
            </div>
          )   }
        </div>
      </div>
    </section>




    </>
  )
}
