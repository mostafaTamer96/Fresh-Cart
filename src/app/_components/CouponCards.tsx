import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export default function CouponCards() {

    const cards = [
        {
            disc: 'Get up to 40% off on selected organic fruits', percentage: "40% OFF", promoCode: "ORGANIC40",
            mainTitle: "🔥 Deal of the Day", secondTitle: "Fresh Organic Fruits", key: "left",
            bg: "bg-linear-to-r from-[#00BC7D] to-[#007A55]",
            spanBg: "bg-[#34BD8F]",
            btnText: "text-[#009966]",


        },
        {
            disc: 'Discover our latest collection of premium vegetables', percentage: "25% OFF", promoCode: "FRESH25",
            mainTitle: " ✨ New Arrivals", secondTitle: "Exotic Vegetables",
            key: "right",
            bg: " bg-linear-to-r from-[#FF8904] to-[#FF2056]",
            spanBg: "bg-[#FF9754]",
            btnText: "text-[#FF6900]",

        }

    ]


    return (
        <section className=' mx-auto  gap-6 py-10 container  sm:grid-cols-1 grid md:grid-cols-2 '>







            {cards.map((card) => <div key={card.key}>

                <div className={` CARD1  relative rounded-lg   p-8 ${card.bg} `}>

                    {/* circle1     */}
                    <div className=" absolute w-32 h-32 bg-white opacity-10 rounded-full bottom-0 left-0   translate-y-1/2 -translate-x-1/2"></div>
                    {/* circle2     */}
                    <div className=" absolute w-32 h-32 bg-white opacity-10 rounded-full top-0 right-0   -translate-y-1/2 translate-x-1/2 "></div>


                    <span className={`my-3 pb-1 px-3 rounded-full font-medium tex-sm text-white ${card.spanBg} `}>{card.mainTitle} </span>

                    <h2 className='mb-2 font-bold text-3xl text-white  '>{card.secondTitle}</h2>
                    <p className=' mb-4 text-white opacity-80  font-medium text-base'>
                        {card.disc}
                    </p>

                    <div className=' items-center  flex mb-6 gap-2  '>
                        <span className=' font-bold text-3xl text-white'>{card.percentage} </span>
                        <span className='font-medium text-sm text-white opacity-70'>Use code: </span>
                        <span className='font-bold text-sm  text-white'>{card.promoCode} </span>
                    </div>

                    <button className={`p-3 flex  content-center items-center cursor-pointer   bg-white py-3 px-6 w-37.75 h-12 rounded-full ${card.btnText} text-base gap-2 font-semibold`}>Shop Now <FaArrowRight /> </button>

                </div>


            </div>)}




        </section>
    )
}
