"use client"

import * as React from "react"
import Image from "next/image"
import { FiMenu, FiX } from "react-icons/fi"
import { FaHeadset, FaShoppingCart, FaWallet } from "react-icons/fa"
import { CiHeart } from "react-icons/ci"
import Link from "next/link";
import { FaTruck, FaGift, FaPhoneAlt, FaRegUser, FaUserPlus } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import logoPic from "@/images/freshcart-logo.49f1b44d.svg fill.png"

const Categories: { title: string; href: string }[] = [
  { title: "All categories", href: "/categories" },
  { title: "Electronics", href: "/docs/primitives/scroll-area" },
  { title: "Women's Fashion", href: "/docs/primitives/tabs" },
  { title: "Men's Fashion", href: "/docs/primitives/tooltip" },
]
const SignIn = "/login";
const SignUp = "/signup";
 
const hover = "transition-colors duration-200 hover:text-green-600";

const linkStyle = "bg-transparent hover:bg-transparent hover:text-[#16a34a]"
const desktopLink = cn(navigationMenuTriggerStyle(), linkStyle)
const mobileLink =
  "block px-2 py-3 font-medium text-[#364153] hover:text-[#16a34a] hover:bg-transparent"

export default function Navbar() {
  
  return (
    <>

      <div className=" border-b border-gray-200 bg-white text-sm text-gray-600">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2.5 sm:px-6">
        {/* Left: promos */}
        <ul className="flex items-center gap-6">
          <li className={`flex cursor-pointer items-center gap-2 ${hover}`}>
            <FaTruck className="text-green-600" aria-hidden="true" />
            <span>Free Shipping on Orders 500 EGP</span>
          </li>
          <li className={`hidden cursor-pointer items-center gap-2 md:flex ${hover}`}>
            <FaGift className="text-green-600" aria-hidden="true" />
            <span>New Arrivals Daily</span>
          </li>
        </ul>
 
        {/* Right: contact + auth */}
        <ul className="flex items-center gap-5">
          <li className="hidden lg:block">
            <a href="tel:+18001234567" className={`flex items-center gap-2 ${hover}`}>
              <FaPhoneAlt className="text-xs" aria-hidden="true" />
              <span>+1 (800) 123-4567</span>
            </a>
          </li>
          <li className="hidden lg:block">
            <a href="mailto:support@freshcart.com" className={`flex items-center gap-2 ${hover}`}>
              <FiMail aria-hidden="true" />
              <span>support@freshcart.com</span>
            </a>
          </li>
 
          <li className="hidden h-4 w-px bg-gray-300 lg:block" aria-hidden="true" />
 
          <li>
            <Link href={SignIn} className={`flex items-center gap-2 ${hover}`}>
              <FaRegUser aria-hidden="true" />
              <span>Sign In</span>
            </Link>
          </li>
          <li>
            <Link href={SignUp} className={`flex items-center gap-2 ${hover}`}>
              <FaUserPlus aria-hidden="true" />
              <span>Sign Up</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <NavigationMenu className="z-40! sticky shadow-xs top-0 bg-white max-w-none w-full p-3 md:p-4">
    
      <div className="group/nav w-11/12 mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        {/* CSS-only toggle for the mobile menu */}
        <input id="nav-toggle" type="checkbox" className="peer sr-only" />

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src={logoPic} alt="Fresh cart Logo" className="w-28 md:w-36 h-auto" />
        </Link>

        {/* Search */}
        <input
          className="hidden xl:block w-full lg:w-auto lg:flex-1 lg:max-w-md py-2.5 md:py-3 px-5 bg-[#F9FAFB80] rounded-full border-2 border-[#F9FAFB80]"
          placeholder="Search for products, brands and more..."
          type="text"
        />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link className={desktopLink} href="/">Home</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link className={desktopLink} href="/product">Shop</Link>
            </NavigationMenuItem>

            <NavigationMenuItem className="bg-transparent hover:bg-transparent">
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="z-30! bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-[200px]">
                  {Categories.map((Category) => (
                    <ListItem
                      key={Category.title}
                      title={Category.title}
                      href={Category.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link className={desktopLink} href="/brands">Brands</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link className={desktopLink} href="/login">Login</Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link className={desktopLink} href="/signup">Signup</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>

        {/* Right side: support + icons + hamburger */}
        <div className="flex items-center gap-3 md:gap-4">
          <Link href="/support" className="hidden xl:block">
            <div className="group flex items-center gap-2 pr-3 border-r border-gray-200 hover:opacity-80 transition-opacity">
              <div className="flex justify-center items-center bg-[#F0FDF4] w-10 h-10 rounded-full">
                <FaHeadset className="text-[#16A34A]" />
              </div>
              <div>
                <p className="text-[#99A1AF] font-medium text-xs group-hover:text-[#636871]">Support</p>
                <p className="text-[#4d5a6f] font-semibold text-sm group-hover:text-[#232a36]">24/7 Help</p>
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="flex items-center gap-1">
              <CiHeart className="w-5 h-5" />
              <span className="text-red-400">0</span>
            </div>

            <Link href="/cart" aria-label="Cart">
              <FaShoppingCart className="w-5 h-5 text-[#6A7282]" />
            </Link>

            <Link href="/payment" aria-label="Payment">
              <FaWallet className="w-5 h-5 text-[#6A7282]" />
            </Link>
          </div>

          {/* Hamburger (below lg only) */}
          <label
            htmlFor="nav-toggle"
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-full text-white cursor-pointer hover:bg-[#15803D] transition-colors bg-[#24ac56]"
          >
            <FiMenu className="w-6 h-6 group-has-[:checked]/nav:hidden" />
            <FiX className="w-6 h-6 hidden group-has-[:checked]/nav:block" />
          </label>
        </div>

        {/* Mobile / tablet menu */}
        <div className="hidden peer-checked:max-lg:block order-last w-full border-t border-gray-100 pt-2">
          <ul className="flex flex-col">
            <li>
              <Link href="/" className={mobileLink}>Home</Link>
            </li>
            <li>
              <Link href="/product" className={mobileLink}>Shop</Link>
            </li>

            <li>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between px-2 py-3 font-medium text-[#364153] hover:text-[#16a34a]">
                  Categories
                  <span className="text-xs transition-transform group-open:rotate-180">▼</span>
                </summary>
                <ul className="pl-4 pb-2">
                  {Categories.map((Category) => (
                    <li key={Category.title}>
                      <Link
                        href={Category.href}
                        className="block px-2 py-2 text-sm text-gray-600 hover:text-[#16a34a]"
                      >
                        {Category.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            <li>
              <Link href="/brands" className={mobileLink}>Brands</Link>
            </li>
            <li>
              <Link href="/login" className={mobileLink}>Login</Link>
            </li>
            <li>
              <Link href="/signup" className={mobileLink}>Signup</Link>
            </li>

            <li className="xl:hidden">
              <Link
                href="/support"
                className="flex items-center gap-2 px-2 py-3 font-medium text-[#364153] hover:text-[#16a34a]"
              >
                <FaHeadset className="text-[#16A34A]" /> Support 24/7
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavigationMenu>
    </>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <Link
        href={href}
        className="flex flex-col gap-1 rounded-sm px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
      >
        <div className="leading-none font-medium">{title}</div>
        {children && (
          <div className="line-clamp-2 text-muted-foreground">{children}</div>
        )}
      </Link>
    </li>
  )
}