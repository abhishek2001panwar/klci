"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const navLinks = [
  {
    label: "Find your home",
    href: "/find-your-home",
  },
  {
    label: "Your buying journey",
    dropdown: [
      { label: "Making it easier", href: "/buying-journey/making-it-easier" },
      { label: "Communities we’ve built", href: "/buying-journey/communities" },
      { label: "Inside our homes", href: "/buying-journey/inside-our-homes" },
      { label: "Homeowner stories", href: "/buying-journey/homeowner-stories" },
    ],
  },
  {
    label: "Our Purpose",
    dropdown: [
      { label: "Awards & Recognition", href: "/purpose/awards" },
      { label: "Our family", href: "/purpose/our-family" },
    ],
  },
];


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
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
      <div className="max-w-7xl mx-auto flex items-center px-2" style={{ minHeight: '80px' }}>
        {/* Logo left */}
        <Link href="/" className="font-quentin text-xl tracking-tight text-gray-900 flex-shrink-0">
        <Image src="/favicon.ico" alt="Verity & Co. Homes Logo" width={82} height={82} className="mr-2" />
        
        </Link>

        {/* Center links (desktop) */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden lg:flex gap-8 items-center relative">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li
                  key={link.label}
                  className="relative group uppercase"
                  onMouseEnter={() => setDropdownOpen(link.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button
                    className="flex items-center gap-1 font-medium  text-gray-900 hover:text-blue-700 transition-colors relative z-20"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen === link.label}
                  >
                    {link.label}
                    <FiChevronDown className="ml-1 text-base" />
                  </button>
                  {/* Dropdown and background effect */}
                  <div className={`absolute left-1/2 -translate-x-1/2 top-full w-[260px] flex flex-col items-stretch z-10`}>
                    <div className={`transition-all duration-200 ${dropdownOpen === link.label ? 'h-20 bg-white border-b border-gray-200 shadow-lg rounded-t-lg' : 'h-0 bg-transparent border-0 shadow-none'} w-full absolute top-0 left-0 z-0`}></div>
                    <ul
                      className={`relative mt-2 min-w-[220px] bg-white shadow-lg rounded-b-lg py-2 transition-all duration-150 ${dropdownOpen === link.label ? "block" : "hidden"}`}
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            className="block px-5 py-2 text-gray-800 hover:bg-gray-100 font-regular whitespace-nowrap"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-medium text-gray-900 hover:text-blue-700 transition-colors "
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Hamburger right (mobile) */}
        <div className="flex-shrink-0 flex items-center ml-2">
          <button
            className="text-3xl text-gray-900 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-200 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      {/* Menu Drawer (right, half width, always available) */}
      <ul
        className={`fixed top-0 right-0 h-full w-1/2 min-w-[240px] max-w-[400px] bg-white z-50 shadow-2xl pt-8 px-4 flex flex-col gap-2 transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ fontFamily: 'var(--font-euclid-regular)' }}
      >
        <li className="mb-8 flex items-center justify-between">
          <a href="/" className="font-semibold text-lg font-euclid-semibold">Verity &amp; Co. Homes</a>
          <button onClick={() => setMenuOpen(false)} className="text-2xl"><FiX /></button>
        </li>
        {navLinks.map((link) =>
          link.dropdown ? (
            <li key={link.label}>
              <button
                className="flex w-full items-center justify-between cursor-pointer py-2 px-1 font-medium font-euclid-medium text-gray-900 hover:text-blue-700"
                onClick={() => setDropdownOpen(dropdownOpen === link.label ? null : link.label)}
                aria-expanded={dropdownOpen === link.label}
              >
                {link.label}
                <FiChevronDown className={`ml-2 transition-transform ${dropdownOpen === link.label ? "rotate-180" : "rotate-0"}`} />
              </button>
              <ul className={`pl-4 mt-1 flex flex-col gap-1 ${dropdownOpen === link.label ? "block" : "hidden"}`}>
                {link.dropdown.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block py-2 text-gray-800 hover:bg-gray-100 font-euclid-regular rounded"
                      onClick={() => {
                        setMenuOpen(false);
                        setDropdownOpen(null);
                      }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={link.label}>
              <a
                href={link.href}
                className="block py-2 px-1 font-medium font-euclid-medium text-gray-900 hover:text-blue-700 rounded"
                onClick={() => {
                  setMenuOpen(false);
                  setDropdownOpen(null);
                }}
              >
                {link.label}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}

export default Navbar;