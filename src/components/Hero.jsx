import React from "react";
import heroImage from "../assets/Ward-Heads.png"; // YOUR IMAGE HERE

const Hero = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Full hero image - Responsive */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[85vh] xl:h-screen">
        <img
          src={heroImage}
          alt="TVK Campaign - Ward Heads"
          className="w-full h-full object-cover object-center"
          loading="eager"
          draggable="false"
        />
        
        {/* Responsive Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 sm:from-black/25 md:from-black/20 via-transparent to-transparent" />
        
        {/* Responsive Decorative Elements */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20">
          
        </div>
        
        {/* Responsive Bottom Badge */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center z-20 px-4 sm:px-6">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
