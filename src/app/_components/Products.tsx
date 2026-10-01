import { productType } from "@/Types/Products.Types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { LuEye, LuRefreshCcw } from "react-icons/lu";

interface productTypeProps {
  product: productType;
}


export default function Products({ product }: productTypeProps) {
  const BeforeDiscount:number =product.price;
  const priceAfterDiscount :number | undefined =product.priceAfterDiscount
  const discountPercentage :number= priceAfterDiscount ? Math.round(((BeforeDiscount - priceAfterDiscount) / priceBeforeDiscount) * 100):0

  return (
    <>
      {/* <div  className="relative w-60 h-60">
      <Image 
        src={product.imageCover} 
        alt={product.name} 
        fill 
        className="object-cover"
      />
    </div> */}

      <section className="PRODUCTS   ">
       
          <div className="relative cursor-pointer my-4  p-3  border rounded-[8px]  border-[#E5E7EB] hover:shadow-2xl transition  hover:-translate-y-3 " >



     
           
         <div className="relative h-60 w-full overflow-hidden rounded-xl bg-gray-50 group">
  {/* Image */}
  <Image 
    src={product.imageCover} 
    alt={product.title} 
    fill 
    className="object-cover  "
  />

  {/* Discount Badge */}
  {product.priceAfterDiscount && (
    <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg  ">
    {discountPercentage}%
    </span>
  )}

  {/* Action Icons */}
  <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
    <button 
      type="button" 
      aria-label="Add to wishlist" 
      className="flex items-center justify-center p-2 bg-white rounded-full text-gray-600 shadow-md hover:text-red-500 hover:scale-110 transition-all duration-200"
    >
      <CiHeart className="w-5 h-5" />
    </button>

    <button 
      type="button" 
      aria-label="Compare" 
      className="flex items-center justify-center p-2 bg-white rounded-full text-gray-600 shadow-md hover:text-green-600 hover:scale-110 transition-all duration-200"
    >
      <LuRefreshCcw className="w-5 h-5" />
    </button>

    <Link 
      href={`/products/${product.id}`}
      aria-label="View product details"
      className="flex items-center justify-center p-2 bg-white rounded-full text-gray-600 shadow-md hover:text-green-600 hover:scale-110 transition-all duration-200"
    >
      <LuEye className="w-5 h-5" />
    </Link>
  </div>
</div>








            <h4 className=" text-[#6A7282] font-medium text-xs ">
              {" "}
              {product.category.name}{" "}
            </h4>
            <h2 className="text-[#364153] font-medium text-base">
              {" "}
              {product.title.split(" ", 3).join(" ")}{" "}
            </h2>

            {/* number of stars depending on rating */}
            <div className="ratings  flex  gap-1 ">
              <div className="flex">
                <FaStar className="text-amber-300" />
                <FaStar className="text-amber-300" />
                <FaStar className="text-amber-300" />
                <FaStar className="text-amber-300" />
           
              </div>

              {/* ratings */}
              <h2 className="font-medium text-xs text-[#6A7282] flex items-center justify-center gap-3">
                <span>{product.ratingsAverage}</span>
                <span> ({product.quantity})</span>{" "}
              </h2>
            </div>

            {/* PRICES */}
            <div className="  ">
              <div className="flex  justify-between items-center gap-2 ">
                <div>
                  <span>
                    {product.priceAfterDiscount ? (
                      <div>
                        <span className="mx-3 text-lg text-[#16A34A] font-bold">
                          {product.priceAfterDiscount} EGP
                        </span>

                        <span className="line-through font-bold text-sm text-[#6A7282]">
                          {product.price} EGP
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#1E2939] font-bold text-lg">
                        {product.price} EGP
                      </span>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
      
      </section>
    </>
  );
}
