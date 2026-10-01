import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTruck,
  FaArrowRotateLeft,
  FaShieldHalved,
  FaHeadset,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaCreditCard,
} from "react-icons/fa6";
import logoImage from "@/images/freshcart-logo.49f1b44d.svg fill.png"
import Image from "next/image";

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Categories", href: "/categories" },
      { label: "Brands", href: "/brands" },
      { label: "Electronics", href: "/categories/electronics" },
      { label: "Men's Fashion", href: "/categories/mens-fashion" },
      { label: "Women's Fashion", href: "/categories/womens-fashion" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "My Account", href: "/account" },
      { label: "Order History", href: "/orders" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Shopping Cart", href: "/cart" },
      { label: "Sign In", href: "/login" },
      { label: "Create Account", href: "/register" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Help Center", href: "/help" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="overflow-x-hidden">
      {/* Features strip */}
      <div className="border-b border-gray-200 bg-green-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FaTruck className="text-lg" />
            </span>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-gray-900">Free Shipping</h4>
              <p className="text-xs text-gray-500">On orders over 500 EGP</p>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FaArrowRotateLeft className="text-lg" />
            </span>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-gray-900">Easy Returns</h4>
              <p className="text-xs text-gray-500">14-day return policy</p>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FaShieldHalved className="text-lg" />
            </span>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-gray-900">Secure Payment</h4>
              <p className="text-xs text-gray-500">100% secure checkout</p>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <FaHeadset className="text-lg" />
            </span>
            <div className="min-w-0">
              <h4 className="text-sm font-semibold text-gray-900">24/7 Support</h4>
              <p className="text-xs text-gray-500">Contact us anytime</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-gray-900 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 pt-10 pb-8">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            {/* Brand */}
            <div className="min-w-0 sm:col-span-2 md:col-span-3 lg:col-span-1 lg:max-w-[260px]">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2.5"
              >
                <div className="relative h-12 w-32 rounded-[8px]">
                  <Image fill className="object-contain" src={logoImage} alt="FreshCart logo" />
                </div>
              </Link>

              <p className="mt-6 text-sm leading-relaxed text-gray-400 break-words">
                FreshCart is your one-stop destination for quality products. From
                fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-center gap-3 min-w-0">
                  <FaPhone className="shrink-0 text-green-500" />
                  <a href="tel:+18001234567" className="hover:text-white break-words">
                    +1 (800) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3 min-w-0">
                  <FaEnvelope className="shrink-0 text-green-500" />
                  <a href="mailto:support@freshcart.com" className="hover:text-white break-words">
                    support@freshcart.com
                  </a>
                </li>
                <li className="flex items-start gap-3 min-w-0">
                  <FaLocationDot className="mt-1 shrink-0 text-green-500" />
                  <span className="break-words">123 Commerce Street, New York, NY 10001</span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-green-600 hover:text-white"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-green-600 hover:text-white"
                >
                  <FaTwitter className="text-sm" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-green-600 hover:text-white"
                >
                  <FaInstagram className="text-sm" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-green-600 hover:text-white"
                >
                  <FaYoutube className="text-sm" />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {columns.map(({ title, links }) => (
              <div key={title} className="min-w-0">
                <h3 className="mb-5 text-lg font-semibold text-white">{title}</h3>
                <ul className="space-y-3 text-sm">
                  {links.map(({ label, href }) => (
                    <li key={label} className="min-w-0">
                      <Link href={href} className="block wrap-break transition-colors hover:text-green-400">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-500 sm:flex-row">
            <p>© 2026 FreshCart. All rights reserved.</p>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              <li className="flex items-center gap-2">
                <FaCreditCard />
                <span>Visa</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCreditCard />
                <span>Mastercard</span>
              </li>
              <li className="flex items-center gap-2">
                <FaCreditCard />
                <span>PayPal</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}