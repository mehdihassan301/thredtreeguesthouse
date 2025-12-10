
import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-rich-onyx">
      <div
        className={`container mx-auto px-6 text-center max-w-3xl transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-brand-gold font-bold mb-6">
          Welcome to The Red Tree Guest House
        </h2>
        <p className="text-gray-700 dark:text-slate-gray leading-relaxed md:text-lg">
          Discover a boutique seaside stay where modern luxury meets coastal
          charm. The Red Tree II offers an exclusive experience with impeccable
          amenities, including private parking, sea-view comfort, and a fully
          equipped shared kitchen. Our commitment to cleanliness and warm,
          professional service ensures a memorable and peaceful retreat in the
          heart of Karachi.
        </p>
      </div>
    </section>
  );
};

export default About;
