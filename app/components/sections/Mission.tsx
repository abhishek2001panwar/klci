"use client";
import React, { useRef, useEffect, useState } from "react";
import { FaRegFlag, FaRegEye } from "react-icons/fa";

const missionImg = "/mission.jpg";
const visionImg = "/brown-our-vision-stamp-white-background-brown-our-vision-stamp-white-background-illustrati.jpg";

const Mission: React.FC = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f9f7f3] py-8 px-2 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Mission Block */}
        <div
          className="flex flex-col gap-6 md:gap-8 p-6 md:p-12 bg-white/90 shadow-xl border border-[#e5e1da] rounded-2xl transition-transform duration-[1200ms] ease-out"
          style={{
            transform: inView
              ? "translateX(0)"
              : windowWidth < 640
                ? "translateX(-30px)"
                : windowWidth < 1024
                  ? "translateX(-50px)"
                  : "translateX(-80px)",
            opacity: inView ? 1 : 0,
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="bg-[#d1cabd] w-12 h-12 flex items-center justify-center rounded-full shadow-md mb-2">
              <FaRegFlag className="text-2xl text-black" />
            </div>
            <div className="font-meno text-3xl md:text-5xl text-gray-900 tracking-widest uppercase">Our Mission</div>
          </div>
          <div className="font-regular text-lg md:text-xl text-gray-700 mt-2">
            We aspire to be a benchmark in the mining industry, recognised for operational excellence, ethical practices, and sustainable growth. KLCI envisions a future where industrial progress goes hand in hand with environmental stewardship and social development.
          </div>
        </div>
        {/* Vision Block */}
        <div
          className="flex flex-col gap-6 md:gap-8 p-6 md:p-12 bg-white/90 shadow-xl border border-[#e5e1da] rounded-2xl transition-transform duration-[1200ms] ease-out"
          style={{
            transform: inView
              ? "translateX(0)"
              : windowWidth < 640
                ? "translateX(30px)"
                : windowWidth < 1024
                  ? "translateX(50px)"
                  : "translateX(80px)",
            opacity: inView ? 1 : 0,
          }}
        >
          <div className="flex flex-col gap-3">
            <div className="bg-[#d1cabd] w-12 h-12 flex items-center justify-center rounded-full shadow-md mb-2">
              <FaRegEye className="text-2xl text-black" />
            </div>
            <div className="font-meno text-3xl md:text-5xl text-gray-900 tracking-widest uppercase">Our Vision</div>
          </div>
          <div className="font-regular text-lg md:text-xl text-gray-700 mt-2">
            At KLCI, our mission is to responsibly extract and deliver mineral resources with a focus on:
            <ul className="list-disc pl-6 mt-2 text-base md:text-lg">
              <li>Scientific and efficient mining</li>
              <li>Worker safety and well-being</li>
              <li>Sustainability and eco-conscious practices</li>
              <li>Active community engagement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;