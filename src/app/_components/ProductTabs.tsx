import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaBolt, FaHome, FaShoppingCart, FaStar, FaShieldAlt, FaTruck, FaCheck, FaBoxOpen, FaRegStar } from 'react-icons/fa'
import { IoIosRefresh } from 'react-icons/io'
export default function ProductTabs({product}:any) {
    console.log("product from prps",product)




const tabClass = "flex items-center justify-center gap-2 p-6 text-sm font-medium text-gray-600 border-b-2 border-transparent transition-colors cursor-pointer outline-none hover:bg-gray-50 hover:text-green-600 focus:outline-none focus-visible:bg-gray-100 focus-visible:text-green-700 aria-selected:border-green-600 aria-selected:text-green-600 aria-selected:bg-green-50/40";

  return (
    <>
    <Tabs defaultValue="details" className="w-full rounded-2xl border border-gray-100 bg-white shadow-sm mt-8">
  {/* Tab Navigation Header */}
  <div className="border-b border-gray-200 p-5">
    <TabsList className="flex h-auto w-full items-center justify-start sm:justify-between bg-transparent p-0">
      <TabsTrigger value="details" className={tabClass}>
        <FaBoxOpen className="text-base" />
        Product Details
      </TabsTrigger>

      <TabsTrigger value="reviews" className={tabClass}>
        <FaStar className="text-base" />
        Reviews ({product?.reviews?.length ?? 0})
      </TabsTrigger>

      <TabsTrigger value="shipping" className={tabClass}>
        <FaTruck className="text-base" />
        Shipping & Returns
      </TabsTrigger>
    </TabsList>
  </div>

  {/* 1. Details Content */}
  <TabsContent value="details" className="p-4 sm:p-6">
    <h3 className="my-2 text-lg font-bold text-gray-900">About this Product</h3>
    <p className="my-2 text-sm text-gray-500">
      {product?.description}
    </p>

    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="min-w-0 rounded-xl bg-gray-50 p-5">
        <h4 className="font-semibold text-gray-900">Product Information</h4>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex items-center justify-between gap-4">
            <dt className="text-gray-500">Category</dt>
            <dd className="truncate font-medium text-gray-900">{product?.category?.name}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-gray-500">Subcategory</dt>
            <dd className="truncate font-medium text-gray-900">{product?.subcategory?.[0]?.name ?? 'N/A'}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-gray-500">Brand</dt>
            <dd className="truncate font-medium text-gray-900">{product?.brand?.name ?? 'N/A'}</dd>
          </div>
          <div className="flex items-center justify-between gap-4">
            <dt className="text-gray-500">Items Sold</dt>
            <dd className="truncate font-medium text-gray-900">{product?.sold ?? 0} sold</dd>
          </div>
        </dl>
      </div>

      <div className="min-w-0 rounded-xl bg-gray-50 p-5">
        <h4 className="font-semibold text-gray-900">Key Features</h4>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheck className="text-green-600" />
            <span className="wrap-break-word">Premium Quality Product</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheck className="text-green-600" />
            <span className="wrap-break-word">100% Authentic Guarantee</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheck className="text-green-600" />
            <span className="wrap-break-word">Fast & Secure Packaging</span>
          </li>
          <li className="flex items-center gap-2 text-gray-700">
            <FaCheck className="text-green-600" />
            <span className="wrap-break-word">Quality Tested</span>
          </li>
        </ul>
      </div>
    </div>
  </TabsContent>

  {/* 2. Reviews Content */}
  <TabsContent value="reviews" className="p-4 sm:p-6">
    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
      <div className="flex shrink-0 flex-col items-center text-center sm:px-4">
        <p className="text-5xl font-extrabold text-gray-900">{product?.ratingsAverage}</p>
        <div className="mt-2 flex items-center gap-1 text-lg text-yellow-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStar />
          <FaRegStar />
        </div>
        <p className="mt-2 text-sm text-gray-600">Based on {product?.reviews?.length ?? 0} reviews</p>
      </div>

      <div className="min-w-0 flex-1 space-y-3">
        <div className="flex items-center gap-3">
          <span className="w-12 shrink-0 text-sm text-gray-600">5 star</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[25%] rounded-full bg-yellow-400" />
          </div>
          <span className="w-10 shrink-0 text-right text-sm text-gray-600">25%</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-12 shrink-0 text-sm text-gray-600">4 star</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[60%] rounded-full bg-yellow-400" />
          </div>
          <span className="w-10 shrink-0 text-right text-sm text-gray-600">60%</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-12 shrink-0 text-sm text-gray-600">3 star</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[25%] rounded-full bg-yellow-400" />
          </div>
          <span className="w-10 shrink-0 text-right text-sm text-gray-600">25%</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-12 shrink-0 text-sm text-gray-600">2 star</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[5%] rounded-full bg-yellow-400" />
          </div>
          <span className="w-10 shrink-0 text-right text-sm text-gray-600">5%</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="w-12 shrink-0 text-sm text-gray-600">1 star</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[5%] rounded-full bg-yellow-400" />
          </div>
          <span className="w-10 shrink-0 text-right text-sm text-gray-600">5%</span>
        </div>
      </div>
    </div>

    <hr className="my-8 border-gray-100" />

    <div className="flex flex-col items-center py-8 text-center">
      <FaStar className="text-5xl text-gray-300" />
      <p className="mt-4 text-gray-600">Customer reviews will be displayed here.</p>
      <button
        type="button"
        className="mt-5 cursor-pointer font-medium text-green-600 transition-colors hover:text-green-700 hover:underline focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Write a Review
      </button>
    </div>
  </TabsContent>

  {/* 3. Shipping Content */}
  <TabsContent value="shipping" className="p-4 sm:p-6">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="min-w-0 rounded-xl bg-gradient-to-br from-green-50 to-green-100/60 p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-white sm:h-14 sm:w-14">
            <FaTruck className="text-lg sm:text-xl" />
          </div>
          <h4 className="text-base font-semibold text-gray-900 sm:text-lg">
            Shipping Information
          </h4>
        </div>

        <ul className="mt-5 space-y-3 text-sm text-gray-700 sm:text-base">
          <li className="flex items-start gap-3">
            <FaCheck className="mt-1 shrink-0 text-green-600" />
            <span className="break-words">Free shipping on orders over $50</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="mt-1 shrink-0 text-green-600" />
            <span className="break-words">Standard delivery: 3-5 business days</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="mt-1 shrink-0 text-green-600" />
            <span className="break-words">Express delivery available (1-2 business days)</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="mt-1 shrink-0 text-green-600" />
            <span className="break-words">Track your order in real-time</span>
          </li>
        </ul>
      </div>

      <div className="min-w-0 rounded-xl bg-gradient-to-br from-green-50 to-green-100/60 p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-white sm:h-14 sm:w-14">
            <IoIosRefresh className="text-xl sm:text-2xl" />
          </div>
          <h4 className="text-base font-semibold text-gray-900 sm:text-lg">
            Returns & Refunds
          </h4>
        </div>

        <ul className="mt-5 space-y-3 text-sm text-gray-700 sm:text-base">
          <li className="flex items-start gap-3">
            <FaCheck className="mt-1 shrink-0 text-green-600" />
            <span className="break-words">30-day hassle-free returns</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="mt-1 shrink-0 text-green-600" />
            <span className="break-words">Full refund or exchange available</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="mt-1 shrink-0 text-green-600" />
            <span className="break-words">Free return shipping on defective items</span>
          </li>
          <li className="flex items-start gap-3">
            <FaCheck className="mt-1 shrink-0 text-green-600" />
            <span className="break-words">Easy online return process</span>
          </li>
        </ul>
      </div>
    </div>

    <div className="mt-4 flex items-start gap-4 rounded-xl bg-gray-50 p-4 sm:items-center sm:p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600 sm:h-14 sm:w-14">
        <FaShieldAlt className="text-lg sm:text-xl" />
      </div>
      <div className="min-w-0">
        <h4 className="text-base font-semibold text-gray-900">
          Buyer Protection Guarantee
        </h4>
        <p className="mt-1 text-sm text-gray-500 sm:text-base">
          Get a full refund if your order doesn't arrive or isn't as described.
          We ensure your shopping experience is safe and secure.
        </p>
      </div>
    </div>
  </TabsContent>
</Tabs>
    </>
  )
}
