
import Categoriesnav from '@/app/_components/Categoriesnav';
import { getAllSubCategories, getCategoryById } from '@/Services/Products';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaArrowRight, FaTags } from 'react-icons/fa';
import { FaFolder } from 'react-icons/fa6';   // Better icon than Fa42Group

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function page({ params }: PageProps) {
    const { id } = await params;
    console.log("myParams[id]", { id });

    const allSubcategories = await getAllSubCategories();
    const CategoryById = await getCategoryById(id);
    console.log("CategoryById ,", CategoryById);
    console.log("getAllSubCategories ,", allSubcategories);

    return (
        <>
            <Categoriesnav 
                field={CategoryById?.name || "category"} 
                bgLinear="bg-gradient-to-br from-[#16A34A] via-[#22C55E] to-[#4ADE80]"
                title={CategoryById?.name||"cat name"} 
                disc="Choose a subcategory to browse products"
                icon={<FaTags className="text-white text-3xl" />}
            />

            <div className="mx-auto w-10/12 py-10">

               
                <Link 
                    href="/categories" 
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#16A34A] transition-colors mb-8"
                >
                    <FaArrowLeft />
                    <span>Back to Categories</span>
                </Link>

                <h3 className="text-3xl font-bold text-gray-900 mb-10">
                    {allSubcategories?.length || 0} Subcategories in {CategoryById?.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allSubcategories?.map((item) => (
                        <Link 
                            key={item._id} 
                            href={`/subcategory/${item._id}`}   
                           
                        >
                            <div className="group bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center">
                                
                            
                                <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                                    <FaFolder className="text-green-600 text-3xl" />
                                </div>

                              
                                <h4 className="font-semibold text-xl text-gray-900">
                                    {item.name}
                                </h4>
<div className="flex items-center justify-center gap-2 text-sm text-[#16A34A] opacity-0 group-hover:opacity-100 transition-all duration-200">
    <span>Browse Products</span>
    <FaArrowRight className="text-xs" />
</div>
</div>
                          
                           
                        </Link>
                    ))}
                </div>

            </div>
        </>
    );
}