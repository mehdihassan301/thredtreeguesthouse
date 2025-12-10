
import React, { useState, useEffect } from 'react';

const values = [
  {
    icon: 'fas fa-concierge-bell text-rose-400',
    title: 'Hospitality First',
    description: 'Creating a warm, welcoming environment for every guest is the cornerstone of our service.'
  },
  {
    icon: 'fas fa-gem text-emerald-400',
    title: 'Premium Cleanliness',
    description: 'We adhere to the strictest hygiene protocols and daily maintenance to ensure a pristine environment.'
  },
  {
    icon: 'fas fa-shield-alt text-blue-400',
    title: 'Safety & Security',
    description: 'Our properties are equipped with 24/7 monitoring, providing a secure, family-friendly atmosphere.'
  },
  {
    icon: 'fas fa-map-marked-alt text-teal-400',
    title: 'Central Connectivity',
    description: 'Strategically located branches ensure you have convenient access to all of Karachi’s key destinations.'
  }
];

const ValueCard: React.FC<{ value: typeof values[0], isVisible: boolean, index: number }> = ({ value, isVisible, index }) => (
    <div 
        className={`bg-white/80 dark:bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl group transition-all duration-300 ease-out shadow-lg hover-scale hover-glow flex flex-col items-center justify-center text-center border border-gray-200 dark:border-brand-gold/20 hover-sheen ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
    >
        <div className="flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-brand-black/50 rounded-full mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
             <i className={`${value.icon} text-3xl md:text-4xl animate-float-slow`}></i>
        </div>
        <h3 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white mb-4">{value.title}</h3>
        <p className="text-lg text-gray-600 dark:text-slate-gray leading-relaxed">{value.description}</p>
    </div>
);

const BrandValuesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
                Our Foundational Values
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} isVisible={isVisible} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValuesSection;