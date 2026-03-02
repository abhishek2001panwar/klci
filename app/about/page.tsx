
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] px-4 md:px-16 pt-24 pb-12 flex flex-col">
      {/* Top Centered Subtitle and Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <div className="text-xs tracking-[0.3em] text-gray-500 mb-2 uppercase font-bold font-regular">MINING WITH RESPONSIBILITY.</div>
        <div className=" text-xl md:text-2xl  font-light text-gray-800 mb-2">
         Karnataka Limpo Cement Industry (KLCI) is a responsible mining enterprise with a legacy rooted in integrity, sustainability, and operational excellence. For decades, we have worked towards balancing industrial growth with environmental and social responsibility.
        </div>
      </div>

      {/* Main Content: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* Left: Image with border */}
        <div className="flex-[1.3] flex justify-center">
          <div className="border-4 border-[#ede7df] rounded-xl overflow-hidden shadow-lg bg-white">
            <img
              src="/about1.avif"
              alt="KLCI Family Group"
              className="object-cover w-[420px] h-[420px] md:w-[620px] md:h-[540px]"
              style={{ display: 'block' }}
            />
          </div>
        </div>
        {/* Right: Content */}
        <div className="flex flex-col justify-center md:pt-16 flex-1">
          <h2 className="text-3xl md:text-5xl font-meno mb-6 leading-tight">
           
            Responsible mining is at the <span className="relative inline-block"><span className="font-quentin text-4xl md:text-5xl text-[#c4a882] absolute -top-3 left-0">heart</span><span className="invisible">heart</span></span> of everything we do.
          </h2>
          
          <p className="text-base md:text-lg text-gray-700 mb-6 font-regular">
            At KLCI, our operations are driven by a strong commitment to ethical mining, worker safety, and environmental stewardship. Operating in the Tumkur district of Karnataka, we specialise in iron ore, manganese ore, and red ochre mining while maintaining the highest industry standards.
          </p>
          <p className="text-base md:text-lg text-gray-700 font-regular">
            Established in the late 1980s, KLCI has consistently evolved with a focus on quality, safety, and sustainability. We are certified under ISO 14001:2015, ISO 9001:2015, and ISO 45001:2015, reflecting our dedication to environmental management, quality systems, and occupational health & safety.
          </p>
        </div>
      </div>
    </div>
  );
}