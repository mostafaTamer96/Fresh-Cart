import React from 'react'
import { FaHeadphones, FaShieldAlt, FaTruck, FaUndo } from 'react-icons/fa'


export default function Services() {
const prps = [
  { title: "Free Shipping", description: "On orders over 500 EGP", icon: FaTruck, key: "shipping", bg: "bg-[#EFF6FF]", iconColor: "text-[#2B7FFF]" },
  { title: "Secure Payment", description: "100% secure transactions", icon: FaShieldAlt, key: "shield", bg: "bg-[#ECFDF5]", iconColor: "text-[#00BC7D]" },
  { title: "Easy Returns", description: "14-day return policy", icon: FaUndo, key: "arrow", bg: "bg-[#F3F4F6]", iconColor: "text-[#FF6900]" },
  { title: "24/7 Support", description: "Dedicated support team", icon: FaHeadphones, key: "headset", bg: "bg-[#F9FAFB]", iconColor: "text-[#AD46FF]" },
]
    
    return (

        <section>
            <div className="  bg-[#F9FAFB] ">
                <div className="mx-auto  w-10/12   py-8 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

                        {/* Card 1 */}


                        {prps.map((item) => <div key={item.key}>


                            <div className="p-5 rounded-xl bg-white shadow flex items-center gap-4 hover:shadow-md transition-shadow duration-150">
                                <div className={`icon ${item.bg} w-12 h-12 rounded-full flex items-center justify-center  -shrink-0`}>
                                    {<item.icon className={`${item.iconColor} text-xl`}/> }
                                 
                                    
                                </div>

                                <div className="services">
                                    <h5 className="font-semibold text-sm text-[#1E2939] ">{item.title}</h5>
                                    <p className="text-xs text-gray-500 ">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        </div>

                        )}




                    </div>
                </div>
            </div>
        </section>

    )
}
