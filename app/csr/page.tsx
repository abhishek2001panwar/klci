"use client";
import React, { useRef, useEffect, useState } from "react";

const csrSections = [
  {
    id: 1,
    category: "OUR COMMITMENT",
    title: "Social Responsibility",
    subtitle: "Building Stronger Communities",
    description:
      "At KLCI, community welfare is a core responsibility. We actively engage with and support the communities around us through meaningful social initiatives aimed at education, health, hygiene, and environmental awareness.",
    initiatives: [
      "Sponsoring educational excursions for local schools in collaboration with the Karnataka State Forest Department",
      "CSR activities conducted in alliance with the District Mining authorities",
      "Active participation and sponsorship of local temple festivals (Jatres)",
    ],
    image: "/gallery/gal1.png",
  },
  {
    id: 2,
    category: "EDUCATION",
    title: "Empowering Through Knowledge",
    subtitle: "Supporting Educational Growth",
    description:
      "Education is the foundation of community development. KLCI is committed to fostering learning opportunities and creating a brighter future for the next generation.",
    initiatives: [
      "Support to local educational institutions through distribution of books and learning materials",
      "Sponsorship of children's sports events at local schools",
      "Educational excursions in partnership with state forest departments",
    ],
    image: "/gallery/gal2.png",
  },
  {
    id: 3,
    category: "HEALTH & HYGIENE",
    title: "Promoting Community Wellness",
    subtitle: "Health and Sanitation Initiatives",
    description:
      "A healthy community is a thriving community. We focus on improving sanitation, hygiene, and health awareness through targeted programs and support initiatives.",
    initiatives: [
      "Supporting sanitation and hygiene efforts in nearby villages, including initiatives during the COVID-19 pandemic",
      "Distribution of COVID-19 safety kits to surrounding communities",
      "Door-to-door distribution of waste bins and promotion of hygienic living under Swachh Bharat Abhiyan",
    ],
    image: "/gallery/gal3.png",
  },
  {
    id: 4,
    category: "ENVIRONMENT & COMMUNITY",
    title: "Green Initiatives",
    subtitle: "Environmental Stewardship",
    description:
      "Environmental care extends beyond our operations. We actively promote green practices and awareness in surrounding communities for a sustainable future.",
    initiatives: [
      "Development of herbal gardens and distribution of saplings to local villages",
      "Conducting cleanliness and awareness programs in surrounding areas",
      "Community engagement in environmental sustainability efforts",
    ],
    image: "/gallery/gal4.png",
  },
];

function CSRSection({ section, index }: { section: any; index: number }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const isReversed = index % 2 !== 0;

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-12 md:py-10 px-4 md:px-8 bg-[#f9f7f3]"
    >
      <div
        className={`max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${
          isReversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text Content */}
        <div
          className={`flex flex-col gap-6 md:gap-8 ${isReversed ? "lg:order-2" : "lg:order-1"}`}
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
          }}
        >
          {/* Category */}
          <div className="flex flex-col gap-2">
            <p className="font-medium text-[10px] md:text-xs tracking-[0.25em] uppercase text-gray-600">
              {section.category}
            </p>
            <div className="border-b border-[#e5e1da] w-16 md:w-20" />
          </div>

          {/* Title & Subtitle */}
          <div>
            <h2 className="font-quentin text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-2">
              {section.title}
            </h2>
            <p className="font-meno text-lg md:text-xl text-[#d1cabd]">
              {section.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="font-regular text-base md:text-lg text-gray-700 leading-relaxed">
            {section.description}
          </p>

          {/* Initiatives List */}
          <div className="flex flex-col gap-4">
            <h3 className="font-medium text-sm md:text-base tracking-wide uppercase text-gray-900">
              Key Initiatives
            </h3>
            <ul className="space-y-3">
              {section.initiatives.map((initiative: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#d1cabd] mt-2.5" />
                  <span className="font-regular text-sm md:text-base text-gray-700 leading-relaxed">
                    {initiative}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image with border animation */}
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
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "scale(1)" : "scale(0)",
                transition:
                  "opacity 0.9s ease 0.3s, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
              }}
            />

            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CSRPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="md:min-h-[40vh] flex items-center justify-center bg-[#f9f7f3] pt-16 md:pt-20 pb-4 px-4 md:px-8">
        <div className="max-w-7xl w-full text-center">
         
          <h1 className="font-meno text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight ">
            Our Social<br />
            <span className="text-[#d1cabd]">Commitment</span>
          </h1>
          
        </div>
      </section>

      {/* CSR Sections */}
      {csrSections.map((section, index) => (
        <CSRSection key={section.id} section={section} index={index} />
      ))}
    </div>
  );
}