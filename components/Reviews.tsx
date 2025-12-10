
import React, { useState, useEffect } from 'react';

const Reviews: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

  return (
    <section id="reviews" className="py-20 md:py-32 bg-gray-50 dark:bg-charcoal-black">
      <div className={`container mx-auto px-6 text-center max-w-3xl transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-brand-gold font-bold mb-12">
          What Our Guests Say
        </h2>
        <div className="space-y-12 relative">
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 h-16 w-16 text-brand-gold/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.333 8h-4.667v13.333h9.333v-9.333h-4.667v-4zM27.333 8h-4.667v13.333h9.333v-9.333h-4.667v-4z"></path>
            </svg>
          <blockquote className="relative">
            <p className="text-xl md:text-2xl font-serif italic text-gray-700 dark:text-slate-gray">
              “Clean, comfortable, and peaceful stay. The staff was incredibly welcoming. Highly recommended for anyone visiting Karachi.”
            </p>
            <footer className="mt-4 text-gray-600 dark:text-slate-gray">— A. Khan, Guest Review</footer>
          </blockquote>
          <blockquote className="relative">
            <p className="text-xl md:text-2xl font-serif italic text-gray-700 dark:text-slate-gray">
              “Absolutely beautiful guest house. It felt like a 5-star hotel with the warmth of a home. The sea view was a bonus!”
            </p>
            <footer className="mt-4 text-gray-600 dark:text-slate-gray">— S. Ahmed, Guest Review</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
