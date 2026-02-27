"use client";
import React, { useRef, useEffect, useState } from "react";
import Button from "../Button";

const aboutImage = "/about1.avif"; // Place your about image in public/about.jpg

const About: React.FC = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      setInView(rect.top < window.innerHeight && rect.bottom > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full bg-[#f9f7f3] py-16 md:py-24 px-2 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Image with border, overlay, and animation */}
        <div
          ref={imgRef}
          className="relative flex justify-center items-center"
        >
          <div className="border border-[#e5e1da] rounded-lg w-[85vw] max-w-[520px] h-[400px] md:h-[600px] absolute z-10 pointer-events-none" />
          <img
            src={aboutImage}
            alt="About KLCI"
            className={`w-[85vw] max-w-[520px] h-[400px] md:h-[600px] object-cover rounded-lg mx-auto transition-transform duration-[1600ms] ease-out ${inView ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
            style={{ background: "#e5e1da", position: "relative", zIndex: 0 }}
          />
          {/* Bottom overlay gradient */}
          
        </div>
        {/* Right: Content */}
        <div className="flex flex-col gap-8">
          <h2 className="font-meno text-3xl md:text-4xl text-gray-900 mb-4">About KLCI</h2>
          <p className="font-light text-base md:text-lg text-gray-700 leading-relaxed">
            Karnataka Limpo Cement Industry (KLCI) is a leader in iron-ore, manganese-ore, and red-ochre mining, operating in Tumkur district, Karnataka, India. Since 1987, we have set benchmarks in operational excellence and environmental care, ensuring sustainable growth and community impact.
          </p>
          <Button variant="outline" className="mt-2 w-max">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default About;