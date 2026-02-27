"use client";
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button";

const mainImage = "/intro1.avif"; // Replace with your image path
const secondaryImage = "/intro2.avif"; // Replace with your image path

export default function Intro() {
  const mainImgRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainImgRef.current) return;
      const rect = mainImgRef.current.getBoundingClientRect();
      setInView(rect.top < window.innerHeight && rect.bottom > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#f9f7f3] py-12 md:py-20 px-2 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Main Image with border and animation */}
        <div
          ref={mainImgRef}
          className="relative flex justify-center items-center"
        >
          <div className="border border-[#e5e1da] rounded-lg w-[85vw] max-w-[420px] h-[400px] md:h-[600px] absolute z-10 pointer-events-none " />
          <img
            src={mainImage}
            alt="KLCI Team"
            className={`w-[85vw] max-w-[420px] h-[400px] md:h-[600px] object-cover rounded-lg mx-auto transition-transform duration-[1600ms] ease-out ${inView ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            style={{ background: "#e5e1da", position: "relative", zIndex: 0 }}
          />
          {/* Optional: Small overlay image in corner */}
          <img
            src={secondaryImage}
            alt="KLCI Small"
            className="absolute bottom-4 left-4 w-24 h-24 object-cover rounded-md border border-white shadow-md hidden md:block"
            style={{ zIndex: 20 }}
          />
        </div>
        {/* Right: Quote and secondary image */}
        <div className="flex flex-col gap-8">
          <div>
            <div className="text-xs font-medium tracking-widest uppercase mb-4 text-gray-700 ">
              FAMILY BUILT, WITH HEART.
            </div>
            <blockquote className="font-meno text-xl md:text-3xl text-gray-800 italic leading-snug">
              “KLCI Karnataka Limpo Cement Industry (KLCI) is an iron-ore,
              manganese-ore and red-ochre mining entity, operating in Tumkur
              district of Karnataka, India. We have been in the field of mining
              since circa 1987 and have consistently maintained high operational
              and environmental care standards”
            </blockquote>
          </div>
          <img
            src={secondaryImage}
            alt="KLCI Walk"
            className="w-full h-48 object-cover rounded-lg border-2 border-[#e5e1da] shadow-md"
          />
          <div className="md:mt-6">
            <Button variant="outline">Get in Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
