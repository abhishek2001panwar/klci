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
    text: "DGM Safety Training and Staff Safety Drills performed routinely ",
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
    text: "Toe-walls constructed in the perimeter of inactive dumps to help with stability & safety.Garland drain constructed to re-direct water run-off from the dumps to a Silt Settling Tank (SST).Porous R&R structure of SST created to help recharge ground-water.",
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

function page() {
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
      <section className="relative w-full h-screen  flex items-center justify-center overflow-hidden">
      {/* Responsive Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        muted
        autoPlay
        loop
        playsInline
        src="https://video.wixstatic.com/video/013b16_1a6010c75af44fb1b360501552bdaa80/1080p/mp4/file.mp4"
      />
      {/* Overlay for darkening video if needed */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Top black gradient overlay */}
       
        {/* Bottom black gradient overlay */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        {/* Subtle full overlay for extra depth */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      {/* Bottom Centered Text Overlay */}
      <div className="absolute left-0  bottom-20 md:bottom-28 z-20 w-full flex flex-col items-center px-4">
       <h1 className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-meno font-semibold drop-shadow-lg tracking-wide">
  Environmental Care & Sustainability
</h1>
<p className="text-white text-center text-base md:text-lg lg:text-xl mt-2 font-light drop-shadow-md font-meno">
  Responsible mining practices committed to environmental protection and long-term ecological balance
</p>
      </div>
    </section>

      {/* Environmental Commitment Section */}
      <section className="w-full bg-[#f9f7f3] py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Content */}
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

          {/* Right: Image with scale animation */}
          <div ref={imageRef} className="relative">
            {/* Animated border frame */}
            <div
              className="absolute inset-0 border-2 border-[#e5e1da] z-10 pointer-events-none"
              style={{
                opacity: imageInView ? 1 : 0,
                transform: imageInView ? "scale(1)" : "scale(0.9)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
              }}
            />

            {/* Image container */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
              <img
                src="/env/envheader.avif"
                alt="Environmental commitment"
                className="w-full h-full object-cover"
                style={{
                  opacity: imageInView ? 1 : 0,
                  transform: imageInView ? "scale(1)" : "scale(0)",
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

      {/* Environmental Initiatives Section */}
      <section ref={cardsRef} className="w-full bg-[#f9f7f3]  py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
         

          {/* Grid of Initiatives */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="group relative h-[400px] md:h-[450px] overflow-hidden cursor-pointer"
                style={{
                  opacity: cardsInView ? 1 : 0,
                  transform: cardsInView ? "translateY(0)" : "translateY(30px)",
                  transition: `opacity 0.6s ease ${0.1 + index * 0.05}s, transform 0.6s ease ${0.1 + index * 0.05}s`,
                }}
              >
                {/* Background Image */}
                <img
                  src={initiative.image}
                  alt={`Initiative ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Number badge - always visible */}
                <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <span className="font-medium text-base text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Dark overlay - appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Text content - appears on hover */}
                <div className="absolute inset-0 flex items-end p-6 md:p-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="font-quentin text-lg md:text-xl lg:text-2xl text-white leading-snug transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {initiative.text}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[3px] bg-[#d1cabd] transition-all duration-700 z-30" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;