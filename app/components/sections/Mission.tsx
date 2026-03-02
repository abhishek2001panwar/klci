"use client";
import React from "react";
import { FaRegFlag, FaRegEye } from "react-icons/fa";

const Mission: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f7f3] py-8 md:py-12 px-4 md:px-8 relative overflow-hidden">
      {/* Subtle background texture lines */}
      <div className="absolute inset-0 opacity-[0.03] " style={{
        backgroundImage: `repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 60px)`,
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <div className="h-px w-8 bg-[#8a7d6b]" />
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#8a7d6b] font-medium">Who We Are</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#ddd8cf]">
          {/* Mission Block */}
          <div className="bg-[#f5f2ec] p-6 md:p-10 lg:p-12 group relative overflow-hidden">
            {/* Large ghost number */}
            <span className="absolute right-4 top-2 text-[80px] md:text-[120px] font-bold text-[#e8e3da] leading-none select-none pointer-events-none">01</span>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5 md:mb-7">
                <div className="w-8 h-8 md:w-9 md:h-9 border border-[#8a7d6b] flex items-center justify-center">
                  <FaRegFlag className="text-sm md:text-base text-[#8a7d6b]" />
                </div>
                <div className="h-px flex-1 bg-[#ddd8cf]" />
              </div>

              <h2 className="text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-[#1a1a1a] tracking-tight leading-none mb-1 uppercase">
                Our
              </h2>
              <h2 className="font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-[#8a7d6b] tracking-tight leading-none mb-5 md:mb-7 uppercase ">
                Mission
              </h2>

              <p className="text-[13px] sm:text-sm md:text-[15px] text-[#4a4540] leading-relaxed max-w-md">
                We aspire to be a benchmark in the mining industry, recognised for operational excellence, ethical practices, and sustainable growth. KLCI envisions a future where industrial progress goes hand in hand with environmental stewardship and social development.
              </p>

              {/* Bottom accent */}
              <div className="mt-6 md:mt-8 flex items-center gap-2">
                <div className="h-[2px] w-6 bg-[#8a7d6b]" />
                <div className="h-[2px] w-2 bg-[#ddd8cf]" />
              </div>
            </div>
          </div>

          {/* Vision Block */}
          <div className="bg-[#191918] p-6 md:p-10 lg:p-12 group relative overflow-hidden">
            {/* Large ghost number */}
            <span className="absolute right-4 top-2 text-[80px] md:text-[120px] font-bold text-[#2a2520] leading-none select-none pointer-events-none">02</span>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5 md:mb-7">
                <div className="w-8 h-8 md:w-9 md:h-9 border border-[#8a7d6b] flex items-center justify-center">
                  <FaRegEye className="text-sm md:text-base text-[#8a7d6b]" />
                </div>
                <div className="h-px flex-1 bg-[#3a332b]" />
              </div>

              <h2 className="font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-[#f5f2ec] tracking-tight leading-none mb-1 uppercase">
                Our
              </h2>
              <h2 className="font-serif text-[22px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-[#c4a96e] tracking-tight leading-none mb-5 md:mb-7 uppercase ">
                Vision
              </h2>

              <p className="text-[13px] sm:text-sm md:text-[15px] text-[#b5aea5] leading-relaxed mb-4">
                At KLCI, our mission is to responsibly extract and deliver mineral resources with a focus on:
              </p>

              <ul className="space-y-2">
                {[
                  "Scientific and efficient mining",
                  "Worker safety and well-being",
                  "Sustainability and eco-conscious practices",
                  "Active community engagement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[13px] sm:text-sm md:text-[15px] text-[#b5aea5]">
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-[#c4a96e] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div className="mt-6 md:mt-8 flex items-center gap-2">
                <div className="h-[2px] w-6 bg-[#c4a96e]" />
                <div className="h-[2px] w-2 bg-[#3a332b]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;