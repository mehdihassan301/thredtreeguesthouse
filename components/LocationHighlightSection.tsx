
import React from 'react';

const LocationHighlightSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-brand-black py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-[1200px] text-center">
        <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 dark:text-gray-300 leading-tight mb-4">
          Perfectly Positioned for Your Convenience
        </h3>
        <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Our branches are strategically situated in Karachi’s most accessible neighborhoods, placing you moments away from major business districts, shopping, and dining. This makes The Red Tree the preferred choice for both convenience and comfort.
        </p>
      </div>
    </section>
  );
};

export default LocationHighlightSection;