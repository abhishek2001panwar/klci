"use client";
import React, { useRef, useEffect, useState } from "react";

const galleryImages = [
  // Unsplash images, mix of big and small
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    size: "big",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f1a3b?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80",
    size: "big",
  },
  {
    src: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1465101178521-c1b5b6e2c7b2?auto=format&fit=crop&w=800&q=80",
    size: "small",
  },
];

const Gallery: React.FC = () => {

  return (
    <section className="w-full bg-[#f9f7f3] py-16 md:py-24 px-2 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="font-meno font-serif  text-2xl md:text-4xl text-gray-900 tracking-widest uppercase text-left">Gallery</h2>
          <div className="border-b-2 border-[#e5e1da] w-24 mt-2"></div>
        </div>
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`relative ${img.size === "big" ? "md:col-span-2 h-[420px] md:h-[520px]" : "md:col-span-1 h-[220px] md:h-[320px]"} flex items-center justify-center bg-[#f9f7f3] border-2 border-[#e5e1da] shadow-xl p-[1px] transition-all duration-700`}
              style={{ overflow: "hidden", borderRadius: 0 }}
            >
              <img
                src={img.src}
                alt="Gallery"
                className="w-full h-full object-cover"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.08)", border: "2px solid #e5e1da", borderRadius: 0 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;