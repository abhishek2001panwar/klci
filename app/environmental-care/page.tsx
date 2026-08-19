"use client";
import React, { useRef, useEffect, useState } from "react";

const initiatives = [
  {
    text: "Dust Suppression with water sprinklers in all roads within the mines",
    image: "/env/env1.avif",
  },
  {
    text: "Constant Air Quality monitoring within the mines",
    image: "/env/env2.avif",
  },
  {
    text: "DGM Safety Training and Staff Safety Drills performed routinely",
    image: "/env/env3.avif",
  },
  {
    text: "Water trenching in Safety Zone to rechange ground-water levels and prevent water run-off",
    image: "/env/env4.avif",
  },
  {
    text: "Solar panels used as renewable energy source",
    image: "/env/env5.avif",
  },
  {
    text: "Calibrated Green energy-efficient generator",
    image: "/env/env6.avif",
  },
  {
    text: "Green cover at Mine-head to minimise soil erosion and improve air quality",
    image: "/env/env7.avif",
  },
  {
    text: "Plantating of trees in the Buffer-Zone & on Inactive Dumps",
    image: "/env/env8.avif",
  },
  {
    text: "In-house plant nursery to promote indigenous flora.",
    image: "/env/env9.avif",
  },
  {
    text: "In-house Chemical Analysis Unit",
    image: "/env/env10.avif",
  },
  {
    text: "Toe-walls constructed in the perimeter of inactive dumps to help with stability & safety. Garland drain constructed to re-direct water run-off from the dumps to a Silt Settling Tank (SST). Porous R&R structure of SST created to help recharge ground-water.",
    image: "/env/env11.avif",
  },
  {
    text: "Haul-Road Plantation",
    image: "/env/env12.avif",
  },
  {
    text: "Fully Equipped First-aid Station",
    image: "/env/env13.avif",
  },
  {
    text: "World Environmental Day Celebrations",
    image: "/env/env14.avif",
  },
];

function Page() {
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [imageInView, setImageInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);

  useEffect(() => {
    const imageObserver = new IntersectionObserver(
      ([entry]) => setImageInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const cardsObserver = new IntersectionObserver(
      ([entry]) => setCardsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (imageRef.current) imageObserver.observe(imageRef.current);
    if (cardsRef.current) cardsObserver.observe(cardsRef.current);

    return () => {
      imageObserver.disconnect();
      cardsObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          muted
          autoPlay
          loop
          playsInline
          src="https://video.wixstatic.com/video/013b16_1a6010c75af44fb1b360501552bdaa80/1080p/mp4/file.mp4"
        />
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="absolute left-0 bottom-20 md:bottom-28 z-20 w-full flex flex-col items-center px-4">
          <h1 className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-meno font-semibold drop-shadow-lg tracking-wide">
            Environmental Care & Sustainability
          </h1>
          <p className="text-white text-center text-base md:text-lg lg:text-xl mt-2 font-light drop-shadow-md font-meno max-w-3xl">
            Responsible mining practices committed to environmental protection and long-term ecological balance
          </p>
        </div>
      </section>

      {/* Environmental Commitment Section */}
      <section className="w-full bg-[#f9f7f3] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-2">
              <div className="border-b border-[#e5e1da] w-16 md:w-20" />
            </div>
            <h2 className="font-meno text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight">
              OUR ENVIRONMENTAL<br />
              <span className="text-[#d1cabd]">COMMITMENT</span>
            </h2>
            <div className="font-regular text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
              <p>
                At KLCI, we recognise the immense importance of safeguarding and nurturing the natural resources with which we are blessed. Environmental care is deeply integrated into our operational processes to ensure positive and sustainable impacts on both the environment and society.
              </p>
              <p>
                Ambient air quality, water quality, and noise levels are monitored periodically by an external ISO 14001, ISO 22000, and ISO 9001 certified laboratory, ensuring strict compliance with environmental regulations and safety standards.
              </p>
              <p>
                KLCI has established a dedicated Sustainability Development Unit to champion the principles outlined in the Sustainable Development Framework for Mines in India. In alignment with this framework, KLCI operates with a strong commitment to social and environmental responsibility.
              </p>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div
              className="absolute inset-0 border-2 border-[#e5e1da] rounded-md z-10 pointer-events-none"
              style={{
                opacity: imageInView ? 1 : 0,
                transform: imageInView ? "scale(1)" : "scale(0.9)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            />

            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-md">
              <img
                src="/env/envheader.jpeg"
                alt="Environmental commitment"
                className="w-full h-full object-cover"
                style={{
                  opacity: imageInView ? 1 : 0,
                  transform: imageInView ? "scale(1)" : "scale(0)",
                  transition:
                    "opacity 0.9s ease 0.3s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Initiatives Section */}
      <section ref={cardsRef} className="w-full bg-[#f9f7f3] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Grid of Initiatives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="flex flex-col gap-4"
                style={{
                  opacity: cardsInView ? 1 : 0,
                  transform: cardsInView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${0.1 + index * 0.05}s, transform 0.6s ease ${0.1 + index * 0.05}s`,
                }}
              >
                {/* Image Container with rounded-md and Number Badge */}
                <div className="relative w-full h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden rounded-md shadow-sm">
                  <img
                    src={initiative.image}
                    alt={`Initiative ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                    <span className="font-semibold text-sm text-gray-900">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Permanent Text Below Image */}
                <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium px-1">
                  {initiative.text}
                </p>
              </div>
            ))}
          </div>

          {/* Last Single Card / SDU */}
          <div
            className="mt-12 flex flex-col gap-4 max-w-3xl mx-auto"
            style={{
              opacity: cardsInView ? 1 : 0,
              transform: cardsInView ? "translateY(0)" : "translateY(30px)",
              transition: `opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s`,
            }}
          >
            <div className="relative w-full h-[320px] md:h-[450px] overflow-hidden rounded-md shadow-sm bg-white/50">
              <img
                src="/env/env15.jpg"
                alt="Sustainable Development Unit"
                className="w-full h-full object-contain"
              />
              <div className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                <span className="font-semibold text-sm text-gray-900">
                  {String(15).padStart(2, "0")}
                </span>
              </div>
            </div>

            <p className="text-gray-800 text-lg md:text-xl font-semibold px-1 text-center md:text-left">
              Sustainable Development Unit
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;