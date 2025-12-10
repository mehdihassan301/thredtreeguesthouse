
import React, { useState, useEffect } from 'react';
import Button from './Button';

interface HeroProps {
  navigateTo: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const imageUrl = "/images/hero-home.jpg";

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-transform duration-[2000ms] ease-out"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: isMounted ? 'scale(1)' : 'scale(1.1)',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/70 to-transparent dark:from-black/90 dark:via-black/80 dark:to-transparent backdrop-blur-sm"></div>

      <div className="relative z-10 p-6 md:p-8 max-w-5xl mx-auto">
        <div
          className={`transition-all duration-1000 ease-out ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h1 className="font-bold text-4xl md:text-7xl tracking-tight text-gray-900 dark:text-white leading-tight" style={{ textShadow: '0 0 25px rgba(212, 175, 55, 0.5)' }}>
            Welcome to The Red Tree Guest House
          </h1>
        </div>
        <div
          className={`transition-all duration-1000 ease-out delay-300 ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-slate-gray leading-relaxed">
            Unparalleled hospitality and modern elegance in the heart of Karachi.
          </p>
        </div>

        <div
          className={`mt-12 flex items-center justify-center gap-4 transition-all duration-1000 ease-out delay-500 ${
            isMounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Button onClick={() => navigateTo('contact')} variant="gold">Book Now</Button>
          <Button onClick={() => navigateTo('rooms')} variant="outline">Explore Rooms</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;