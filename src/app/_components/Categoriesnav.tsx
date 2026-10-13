import Link from "next/link";
import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Props {
  bgLinear: string;
  field: string;
  title: string;
  disc: string;
  icon: React.ReactNode;
  category?: string;
  categoryHref?: string;
}

export default function Categoriesnav({
  bgLinear,
  field,
  title,
  disc,
  icon,

}: Props) {
  return (
    <section className={`${bgLinear} relative overflow-hidden`}>
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto mb-8 w-11/12 p-4 sm:p-8 md:w-10/12">
        {/* Breadcrumb navigation */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList className="text-sm font-medium">
            <BreadcrumbItem>
              <BreadcrumbLink
              
                className="text-white/70 transition-colors hover:text-white"
              >
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
        

            <BreadcrumbSeparator className="text-white/40" />

            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-40 truncate text-white text-sm font-medium">
                {field}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Title & icon section */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white shadow-xl backdrop-blur-md sm:size-16 [&>svg]:size-7 sm:[&>svg]:size-8">
            {icon}
          </div>

          <div className="min-w-0">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h1>

            <p className="mt-1 max-w-2xl text-sm text-indigo-100 sm:text-base">
              {disc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}