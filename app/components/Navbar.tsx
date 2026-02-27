"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaInstagram, FaTiktok, FaYoutube, FaFacebookF } from "react-icons/fa";

const mainLinks = [
  { label: "Products", href: "/products" },
  { label: "Environmental Care", href: "/environmental-care" },
  { label: "CSR", href: "/csr" },
];

const mainMenuLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Awards", href: "/awards" },
  { label: "Contact", href: "/contact" },
];

const secondaryLinks = [
  [
    { label: "ABOUT US", href: "/about" },
    { label: "MANUFACTURING PROCESS", href: "/manufacturing" },
    { label: "QUALITY & CERTIFICATIONS", href: "/quality" },
  ],
  [
    { label: "SUSTAINABILITY", href: "/sustainability" },
    { label: "CAREERS", href: "/careers" },
    { label: "MEDIA & NEWS", href: "/media" },
  ],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm"
          : "bg-transparent border-none"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto md:mx-10 flex items-center px-2" style={{ minHeight: '80px' }}>
        {/* Logo left */}
        <Link href="/" className="font-quentin text-xl tracking-tight text-gray-900 flex-shrink-0">
          <Image src="/favicon.ico" alt="KLCI Logo" width={82} height={82} className="mr-2" />
        </Link>

        {/* Center links (desktop) */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden lg:flex gap-10 items-center">
            {mainLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-base  uppercase tracking-wide font-light transition-colors ${scrolled ? 'text-gray-900 hover:text-blue-700' : 'text-white hover:opacity-70'}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Hamburger for all screens */}
        <div className="flex-shrink-0 flex items-center ml-2">
          <button
            className="relative w-14 h-14 flex flex-col items-center justify-center group focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {/* Hamburger icon (2 bars, one shorter) */}
              {!menuOpen && (
                <span className="block">
                  <span className={`block h-0.5 w-10 rounded transition-all duration-200 mb-2 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                  <span className={`block h-0.5 w-10 rounded transition-all duration-200 ml-0 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                </span>
              )}
            {/* Cross icon */}
            {menuOpen && (
              <span className="block">
                  <span className={`absolute left-1/2 top-1/2 w-10 h-0.5 rounded rotate-45 -translate-x-1/2 -translate-y-1/2 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                  <span className={`absolute left-1/2 top-1/2 w-10 h-0.5 rounded -rotate-45 -translate-x-1/2 -translate-y-1/2 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></span>
                </span>
              )}
          </button>
        </div>
      </div>

      {/* Overlay for menu drawer */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-200 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      {/* Menu Drawer (right, half width, always available) */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white/70 backdrop-blur-xl z-50 shadow-2xl pt-8 px-4 flex flex-col transition-transform duration-300 border-l border-gray-200 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ fontFamily: 'var(--font-euclid-regular)' }}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="font-semibold text-2xl font-euclid-semibold tracking-wide"></Link>
          <button onClick={() => setMenuOpen(false)} className="w-10 h-10 flex items-center justify-center relative group focus:outline-none">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8L28 28" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#rough1)' }} />
              <path d="M28 8L8 28" stroke="#222" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#rough2)' }} />
              <filter id="rough1">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="turb"/>
                <feDisplacementMap in2="turb" in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
              <filter id="rough2">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="turb"/>
                <feDisplacementMap in2="turb" in="SourceGraphic" scale="1.5" xChannelSelector="R" yChannelSelector="G"/>
              </filter>
            </svg>
          </button>
        </div>
        {/* Main big links */}
        <div className="flex flex-col gap-3 mb-12">
          {mainMenuLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="block text-4xl font-serif text-gray-900 py-1 px-1 transition-all duration-200 group"
              style={{ fontFamily: 'var(--font-meno, serif)' }}
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative inline-block">
                {link.label}
                <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-gray-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </span>
            </a>
          ))}
        </div>
        <hr className="my-4 border-gray-300" />
        {/* Secondary links in two columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
          {secondaryLinks.map((col, i) => (
            <div key={i} className="flex flex-col gap-2">
              {col.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-xs font-medium tracking-widest uppercase text-gray-900 py-1 px-1 hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        {/* Social icons */}
        <div className="flex gap-6 mt-auto mb-4">
          <a href="#" aria-label="Facebook" className="text-2xl text-gray-900 hover:text-gray-600"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram" className="text-2xl text-gray-900 hover:text-gray-600"><FaInstagram /></a>
          <a href="#" aria-label="TikTok" className="text-2xl text-gray-900 hover:text-gray-600"><FaTiktok /></a>
          <a href="#" aria-label="YouTube" className="text-2xl text-gray-900 hover:text-gray-600"><FaYoutube /></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;