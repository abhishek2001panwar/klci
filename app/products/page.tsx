"use client";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";

import { PRODUCTS } from "@/lib/product";
import Button from "../components/Button";

function ProductSection({ product, index }: { product: any; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 !== 0;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-12 md:py-20 px-4 md:px-8 bg-[#f9f7f3]"
    >
      <div
        className={`max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Left: Text Content */}
        <div
          className={`flex flex-col gap-6 md:gap-8 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          <div className="flex flex-col gap-2">
            <p className="font-medium text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-600">
              {product.category}
            </p>
            <div className="border-b border-[#e5e1da] w-16 md:w-20" />
          </div>
          <h2 className="font-quentin font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight">
            {product.title}
          </h2>
          <p className="font-regular text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
            {product.description}
          </p>
          <Link href={`/products/${product.id}`}>
            <button className="font-medium text-xs md:text-sm tracking-[0.2em] uppercase px-8 py-3 border border-black text-black bg-transparent hover:bg-black hover:text-white transition-all duration-300">
              {product.cta}
            </button>
          </Link>
        </div>

        {/* Right: Image with border animation */}
        <div className={`relative ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
          {/* Animated border frame */}
          <div
            className="absolute inset-0 border-2 border-[#e5e1da] z-10 pointer-events-none"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "scale(1)" : "scale(0.9)",
              transition: "opacity 0.6s ease 0s, transform 0.6s ease 0s",
            }}
          />

          {/* Image container */}
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0)",
                transition:
                  "opacity 0.9s ease 0.3s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default function ProductsPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center bg-[#f9f7f3] pt-24 pb-12 px-4 md:px-8">
        <div className="max-w-7xl w-full text-center">
          <h1 className="font-meno text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight mb-2">
            OUR PRODUCTS
          </h1>
          <p className="font-regular text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our range of high-grade minerals, extracted with precision
            and care for industrial excellence.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {PRODUCTS.map((product, index) => (
        <ProductSection key={product.id} product={product} index={index} />
      ))}

      <div className="flex justify-center items-center ">
        <div className="relative w-full  overflow-hidden rounded-lg shadow-md">
          <img
            src={'/image.png'}
            alt="Product"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>


     
    </div>
  );
}
