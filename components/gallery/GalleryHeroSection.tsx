
import React, { useState, useEffect } from 'react';

const GalleryHeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const imageUrl = "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop";

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
            Step Inside The Red Tree Guest House
          </h1>
        </div>
        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Explore our luxurious rooms, elegant interiors, and scenic locations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryHeroSection;