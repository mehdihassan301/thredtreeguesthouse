

import React from 'react';

const amenities = [
  { icon: 'fa-wifi', name: 'Free High-Speed WiFi' },
  { icon: 'fa-snowflake', name: 'Air-Conditioned Rooms' },
  { icon: 'fa-tv', name: 'Smart LED TVs' },
  { icon: 'fa-bath', name: 'Complimentary Toiletries' },
  { icon: 'fa-broom', name: 'Daily Housekeeping' },
  { icon: 'fa-concierge-bell', name: '24/7 Reception' },
  { icon: 'fa-shield-alt', name: 'Secure Environment' },
  { icon: 'fa-plane-departure', name: 'Airport Pickup (Optional)' },
];

const AmenityCard: React.FC<{ amenity: typeof amenities[0] }> = ({ amenity }) => (
    <div className="bg-white dark:bg-rich-onyx/40 backdrop-blur-md border border-brand-gold/20 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center group transition-all duration-300 ease-in-out shadow-lg hover:shadow-glow hover:-translate-y-2 hover-sheen">
        <i className={`fas ${amenity.icon} text-4xl text-brand-gold mb-4 animate-float-slow`}></i>
        <h3 className="font-semibold text-xl text-gray-800 dark:text-white">{amenity.name}</h3>
    </div>
);

const AmenitiesFacilitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="py-16 md:py-24 bg-gray-50 dark:bg-charcoal-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
                Amenities & Facilities
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray leading-relaxed max-w-2xl mx-auto">
                Every detail is curated to enhance your comfort. We blend modern hospitality with impeccable service to ensure a relaxing and seamless experience.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {amenities.map((amenity) => (
            <AmenityCard key={amenity.name} amenity={amenity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesFacilitiesSection;