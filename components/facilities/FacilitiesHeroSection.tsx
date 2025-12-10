
import React, { useState, useEffect } from 'react';

const FacilitiesHeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const imageUrl = "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="relative h-[60vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms] ease-out"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: isMounted ? 'scale(1)' : 'scale(1.1)',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 dark:bg-black/75 backdrop-blur-sm"></div>

      <div className="relative z-10 p-6 md:p-8 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h1 className="font-bold text-4xl md:text-6xl tracking-tight text-white leading-tight" style={{ textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
            Discover Our Premium Guest House Facilities
          </h1>
        </div>
        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Explore the facilities that make your stay unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesHeroSection;
