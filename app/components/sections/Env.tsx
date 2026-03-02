'use client';
import React, { useEffect, useRef, useState } from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";

const images = [
  {
    src: "/env.avif",
    alt: "Forest landscape",
    label: "Biodiversity",
    desc: "KLCI has a Sustainability Development Unit in place, to champion the ethos prescribed by the Sustainable Development Framework for mines in India. In keeping with the framework, KLCI operates with cognizance of social and environmental responsibility.",
    isMain: true,
  },
  {
    src: "/env1.avif",
    alt: "Solar energy",
    label: "Clean Energy",
    desc: "Transitioning to renewable energy sources to reduce our carbon footprint.",
    isMain: false,
  },
  {
    src: "/env2.avif",
    alt: "Water conservation",
    label: "Water Stewardship",
    desc: "Responsible water management and conservation in all operations.",
    isMain: false,
  },
];

function Env() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

const router = useRouter();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex flex-col px-4 sm:px-8 lg:px-12 pb-16 transition-all duration-700 ${
        inView ? "bg-[#191918] text-white" : "bg-white text-black"
      }`}
    >
      {/* Top label + View All */}
      <div
        className={`flex items-center justify-between pt-8 sm:pt-12 pb-5 border-b transition-colors duration-700 flex-wrap gap-3 ${
          inView ? "border-[#2e2e2e]" : "border-[#e0e0e0]"
        }`}
      >
        <p
          className={`m-0 text-[9px] sm:text-[11px] tracking-[0.22em] uppercase font-regular transition-colors duration-700 ${
            inView ? "text-[#9a9189]" : "text-[#888]"
          }`}
        >
          Our Environmental Commitment
        </p>
        <Button 
          variant="outline" 
          onClick={() => router.push("/environmental-care")}
          className={inView ? "border-white text-white " : ""}
        >
          View All
        </Button>
      </div>

      {/* Big heading */}
      <div
        className={`py-6 sm:py-9 transition-all duration-700 delay-150 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="font-meno m-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight">
          OUR ENVIRONMENTAL
          <br />
          <span className="text-[#d1cabd]">COMMITMENT</span>
        </h2>
      </div>

      {/* Image grid - responsive with Tailwind */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-6 sm:gap-8">
        {images.map((img, i) => (
          <div
            key={i}
            className={`flex flex-col gap-3 sm:gap-4 transition-all duration-700 ${
              img.isMain ? "md:col-span-2 lg:col-span-1" : ""
            } ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-9"
            }`}
            style={{
              transitionDelay: `${250 + i * 150}ms`,
            }}
          >
            {/* Image wrapper */}
            <div className="relative overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover block transition-transform duration-500 group-hover:scale-105 ${
                  img.isMain
                    ? "h-[260px] sm:h-[340px] lg:h-[460px]"
                    : "h-[200px] sm:h-[220px] lg:h-[210px]"
                }`}
              />
              {/* Accent line */}
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-[#d1cabd] transition-all duration-1000"
                style={{
                  width: inView ? "100%" : "0%",
                  transitionDelay: `${500 + i * 150}ms`,
                }}
              />
            </div>

            {/* Category label */}
            <p className="font-light m-0 text-[10px] tracking-[0.24em] uppercase text-[#d1cabd]">
              {img.label}
            </p>

            {/* Description */}
            <p
              className={`font-regular m-0 leading-relaxed transition-colors duration-700 ${
                img.isMain
                  ? "text-sm sm:text-base md:text-[17px]"
                  : "text-xs sm:text-sm"
              } ${
                inView
                  ? img.isMain
                    ? "text-[#d4cec7]"
                    : "text-[#a09890]"
                  : "text-[#555]"
              } ${img.isMain ? "max-w-[600px]" : ""}`}
            >
              {img.desc}
            </p>

            {/* Learn More only on first card */}
           
          </div>
        ))}
      </div>
    </section>
  );
}

export default Env;