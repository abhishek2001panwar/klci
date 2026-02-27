import React from 'react'


function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Responsive Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        muted
        autoPlay
        loop
        playsInline
        src="https://video.wixstatic.com/video/013b16_431d151367c048d7939eb784b1f92721/1080p/mp4/file.mp4"
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
      <div className="absolute left-1/2 -translate-x-1/2 bottom-20 md:bottom-28 z-20 w-full flex flex-col items-center px-4">
        <h1 className="text-white text-center text-2xl md:text-4xl lg:text-5xl font-meno font-semibold drop-shadow-lg tracking-wide">
          KARNATAKA LIMPO CEMENT INDUSTRY
        </h1>
        <p className="text-white text-center text-base md:text-lg lg:text-xl mt-2 font-light drop-shadow-md font-meno">
          An ISO 14001:2015, 9001:2015 &amp; 45001:2015 Certified Unit
        </p>
      </div>
    </section>
  );
}

export default Hero