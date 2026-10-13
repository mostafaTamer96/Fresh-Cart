import React from 'react'
import Image from 'next/image'
import { FaTags } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'

import { getAllBrands } from '@/Services/Products'
import Categoriesnav from '../_components/Categoriesnav'

export default async function Brands() {
  const product = await getAllBrands()

  return (
    <section>
      <Categoriesnav
        field="Brands"
        bgLinear="bg-gradient-to-br from-[#7F22FE] via-[#8E51FF] to-[#C27AFF]"
        title="Top Brands"
        disc="Shop from your favorite brands"
        icon={<FaTags className="text-3xl text-white" />}
      />

      <div className="mx-auto w-10/12">
        <div className="grid grid-cols-2 gap-6 p-5 lg:grid-cols-6">
          {product?.map((brand) => (
            <div
              key={brand._id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm duration-350 hover:-translate-y-5 hover:border-violet-200 hover:shadow-2xl"
            >
              <div className="m-5 rounded-2xl bg-[#F9FAFB] p-4">
                <div className="relative h-28 w-full">
                  <Image
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    fill
                    sizes="(max-width: 1024px) 45vw, 15vw"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="px-5 pb-6 text-center">
                <h3 className="mb-4 font-semibold text-[#101828] transition-colors group-hover:text-[#7f22fe]">
                  {brand.name}
                </h3>

                <button className="flex w-full items-center justify-center gap-1.5 py-2.5 text-sm opacity-0 duration-350 group-hover:text-[#7f22fe] group-hover:opacity-100">
                  <span>View All Products</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}