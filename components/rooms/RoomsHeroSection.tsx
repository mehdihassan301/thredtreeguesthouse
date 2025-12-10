
import React, { useState, useEffect } from 'react';

const RoomsHeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const imageUrl = "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1974&auto=format&fit=crop";

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
            Choose Comfort That Fits Your Stay
          </h1>
        </div>
        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Discover curated rooms designed for a peaceful and comfortable stay.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoomsHeroSection;
