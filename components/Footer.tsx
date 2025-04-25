import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Barlow_Condensed } from 'next/font/google'

const barlow = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
})

const Footer = () => {
  return (
    <footer className="bg-[#1f1815] text-white mt-24 py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-y-12 gap-x-10">
          
          {/* Logo + Description */}
          <div className="md:w-1/2 lg:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/">
              <Image 
                src="/logo-footer.svg" 
                alt="teenvogue" 
                width={288} 
                height={100}
                className="w-60 sm:w-72"
              />
            </Link>
            <p className={`mt-4 ${barlow.className} text-base sm:text-lg`}>
              The young person’s guide to conquering (and saving) the world. Teen Vogue covers the latest in celebrity news, politics, fashion, beauty, wellness, lifestyle, and entertainment.
            </p>
          </div>

          {/* Quick Links & Legal */}
          <div className="md:w-1/2 lg:w-2/3 flex flex-wrap justify-center md:justify-end gap-10">
            <div className="w-40">
              <h2 className="text-lg font-bold mb-3 hover:text-red-500 cursor-pointer">QUICK LINKS</h2>
              <nav className="space-y-2">
                <Link href="/privacy" className="block hover:text-red-500 hover:underline">Privacy Policy</Link>
                <Link href="/contact" className="block hover:text-red-500 hover:underline">Contact Us</Link>
                <Link href="/about" className="block hover:text-red-500 hover:underline">About Us</Link>
              </nav>
            </div>

            <div className="w-40">
              <h2 className="text-lg font-bold mb-3 hover:text-red-500 cursor-pointer">LEGAL</h2>
              <nav className="space-y-2">
                <Link href="/terms" className="block hover:text-red-500 hover:underline">Terms And Conditions</Link>
                <Link href="/dmca" className="block hover:text-red-500 hover:underline">DMCA</Link>
                <Link href="/cookies" className="block hover:text-red-500 hover:underline">Cookies Policy</Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Red line */}
        <div className="border-t border-red-600 my-10" />

        {/* Category Row */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm font-semibold mb-8">
          <Link href="/etfs" className="hover:text-red-400 hover:underline">ETF</Link>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <Link href="/finance" className="hover:text-red-400 hover:underline">FINANCE</Link>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <Link href="/trading" className="hover:text-red-400 hover:underline">TRADING</Link>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <Link href="/stock" className="hover:text-red-400 hover:underline">STOCK</Link>
        </div>

        {/* Bottom text */}
        <div className={`text-left ${barlow.className} text-sm sm:text-md leading-relaxed`}>
          © 2025 Condé Nast. All rights reserved. Teen Vogue may earn a portion of sales from products that are purchased through our site as part of our Affiliate Partnerships with retailers. The material
          on this site may not be reproduced, distributed, transmitted, cached or otherwise used, except with the prior written permission of Condé Nast.
        </div>
      </div>
    </footer>
  )
}

export default Footer
