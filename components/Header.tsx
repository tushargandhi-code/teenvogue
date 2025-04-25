"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import { Barlow_Condensed } from 'next/font/google';

const barlow = Barlow_Condensed({
  weight: '600',
  subsets: ['latin'],
});


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="text-black w-full max-w-[1440px]  mx-auto bg-white body-font  border-b border-gray-200">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-white hover:cursor-pointer ml-0 lg:ml-16 text-4xl font-bold">
          <Image src="/teen-logo.svg" alt="MensXP Logo" width={180} height={120} className="" />
        </Link>

        {/* Hamburger (visible below lg only) */}
        <div className="lg:hidden hover:cursor-pointer text-black text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Desktop Nav (unchanged, visible lg and up) */}
        <div className={`hidden   lg:flex items-center ${barlow.className} tracking-wide mr-16 ml-auto space-x-6 text-xl`}>
          <Link href="/etfs" className="hover:text-red-700">ETFS</Link>
          <Link href="/finance" className="hover:text-red-700">FINANCE</Link>
          <Link href="/stock" className="hover:text-red-700">STOCK</Link>
          <Link href="/trading" className="hover:text-red-700">TRADING</Link>
        </div>
      </div>

      {/* Mobile/Tablet Nav (only shown if menu is open) */}
      {menuOpen && (
        <div className={`lg:hidden px-5 pb-4 space-y-4 ${barlow.className} tracking-wide shadow-md`}>
          <nav>
            <ul className="flex flex-col items-center space-y-5 text-base">
              <li><Link href="/etfs" onClick={handleCloseMenu} className="text-black hover:text-red-700">ETFS</Link></li>
              <li><Link href="/finance" onClick={handleCloseMenu} className="hover:text-red-700">FINANCE</Link></li>
              <li><Link href="/stock" onClick={handleCloseMenu} className="hover:text-red-700">STOCK</Link></li>
              <li><Link href="/trading" onClick={handleCloseMenu} className="hover:text-red-700">TRADING</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
