
import React, { useState, useEffect } from 'react';
import Button from './Button';

const CTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

  return (
    <section id="book" className="py-20 md:py-32 bg-white dark:bg-rich-onyx">
      <div className={`container mx-auto px-6 text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-brand-gold font-bold mb-4">
          Your Coastal Escape Awaits
        </h2>
        <p className="text-gray-700 dark:text-slate-gray max-w-xl mx-auto mb-8">
          Book your stay today and experience the serene luxury of The Red Tree
          II. We look forward to welcoming you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* FIX: Changed variant from "primary" to "gold" to match the Button component's allowed props. */}
          <Button variant="gold">Book Now</Button>
          <Button variant="outline">View All Rooms</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
