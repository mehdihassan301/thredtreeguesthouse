

import React, { useState, useEffect } from 'react';
import Button from './Button';

interface WhyChooseUsSectionProps {
  navigateTo: (page: string) => void;
}

// Features based on user prompt
const features = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Prime Location',
    description: 'Walking distance to Sea View and major attractions.'
  },
  {
    icon: 'fas fa-compass',
    title: 'Nearby Attractions',
    description: 'Near Coffee Beans, KFC, McDonald\'s, Dolmen Mall Clifton, and kids\' entertainment.'
  },
  {
    icon: 'fas fa-wind',
    title: 'Fresh Sea Breeze',
    description: 'Perfect for morning and evening seaside walks.'
  },
  {
    icon: 'fas fa-car',
    title: 'Free Car Parking',
    description: 'Secure parking is available for all guests.'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Safe & Secure',
    description: '24/7 security, CCTV, and trained staff for your peace of mind.'
  },
  {
    icon: 'fas fa-bed',
    title: 'Comfortable Rooms',
    description: 'AC, LED TV, WiFi, attached bathrooms, and a clean environment.'
  },
  {
    icon: 'fas fa-building',
    title: 'Furnished Apartments',
    description: 'Family apartments available on monthly rent for extended stays.'
  },
  {
    icon: 'fas fa-ring',
    title: 'Wedding & Event Stays',
    description: 'Ideal for accommodating out-of-city families & large groups for your special occasions.'
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Corporate Friendly',
    description: 'Perfect for company guests and professional long-term stays.'
  }
];

const FeatureCard: React.FC<{ feature: typeof features[0], isVisible: boolean, index: number }> = ({ feature, isVisible, index }) => (
    <div
      className={`bg-white dark:bg-rich-onyx/40 backdrop-blur-md border border-brand-gold/20 p-6 md:p-8 rounded-2xl group transition-all duration-300 ease-out shadow-lg hover:shadow-glow h-full flex flex-col items-center justify-start text-center hover-sheen ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
        <div className="relative mb-6">
            <i className={`${feature.icon} text-4xl md:text-5xl text-brand-gold animate-float-slow`}></i>
        </div>
        <h3 className="font-semibold text-lg md:text-xl text-gray-900 dark:text-white mb-2">{feature.title}</h3>
        <p className="text-base text-gray-700 dark:text-slate-gray mt-1 flex-grow">{feature.description}</p>
    </div>
);

const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-gray-50 dark:bg-charcoal-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-base uppercase tracking-widest text-brand-gold text-center mb-6 font-semibold">
                The Red Tree Guest Houses
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Why Choose Our Executive Stay?
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} isVisible={isVisible} index={index} />
          ))}
        </div>
        <div className="text-center mt-16">
          <Button variant="gold" onClick={() => navigateTo('contact')}>
            <i className="fas fa-calendar-check mr-3"></i>
            Book Your Stay Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;