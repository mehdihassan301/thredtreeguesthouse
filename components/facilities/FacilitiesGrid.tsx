

import React, { useState, useEffect } from 'react';

const facilitySections = {
  'Top In-Room Comforts': [
    { icon: 'fas fa-snowflake text-cyan-400', title: 'Air Conditioning' },
    { icon: 'fas fa-tv text-indigo-400', title: 'Flat-Screen TV' },
    { icon: 'fas fa-bath text-rose-400', title: 'Private Bathroom' },
    { icon: 'fas fa-bed text-purple-400', title: 'Comfortable Bedding' },
    { icon: 'fas fa-door-closed text-slate-400', title: 'Wardrobe / Closet' },
    { icon: 'fas fa-couch text-amber-500', title: 'Sitting Area' },
    { icon: 'fas fa-volume-mute text-gray-400', title: 'Soundproofing' },
    { icon: 'fas fa-tshirt text-blue-400', title: 'Ironing Facilities' },
  ],
  'Kitchen & Dining (where applicable)': [
    { icon: 'fas fa-utensils text-orange-400', title: 'Equipped Kitchen' },
    { icon: 'fas fa-refrigerator text-sky-400', title: 'Refrigerator' },
    { icon: 'fas fa-wave-square text-blue-300', title: 'Microwave' },
    { icon: 'fas fa-fire-burner text-red-400', title: 'Stovetop & Oven' },
    { icon: 'fas fa-jug-detergent text-green-400', title: 'Washing Machine' },
    { icon: 'fas fa-utensil-spoon text-yellow-400', title: 'Dining Area' },
    { icon: 'fas fa-mug-hot text-pink-400', title: 'Electric Kettle' },
    { icon: 'fas fa-blender text-lime-400', title: 'Kitchenware' },
  ],
  'Property Features & Services': [
    { icon: 'fas fa-wifi text-blue-400', title: 'Free High-Speed WiFi' },
    { icon: 'fas fa-car-alt text-teal-400', title: 'Free Private Parking' },
    { icon: 'fas fa-water text-cyan-500', title: 'Beachfront Access' },
    { icon: 'fas fa-umbrella-beach text-yellow-500', title: 'Private Beach Area' },
    { icon: 'fas fa-leaf text-green-500', title: 'Garden & Terrace' },
    { icon: 'fas fa-broom text-amber-600', title: 'Daily Housekeeping' },
    { icon: 'fas fa-concierge-bell text-slate-500', title: '24/7 Front Desk' },
    { icon: 'fas fa-shirt text-indigo-500', title: 'Laundry Services' },
  ],
  'Safety & Accessibility': [
    { icon: 'fas fa-shield-alt text-green-400', title: '24-Hour Security' },
    { icon: 'fas fa-video text-red-500', title: 'CCTV Surveillance' },
    { icon: 'fas fa-users text-blue-500', title: 'Spacious Family Rooms' },
    { icon: 'fas fa-smoking-ban text-gray-500', title: 'Non-Smoking Rooms' },
    { icon: 'fas fa-key text-yellow-600', title: 'Private Entrance' },
    { icon: 'fas fa-store text-purple-500', title: 'On-Site Convenience Store' },
    { icon: 'fas fa-file-invoice text-sky-500', title: 'Invoice Provided' },
    { icon: 'fas fa-language text-pink-500', title: 'Multi-lingual Staff' },
  ],
};

const FacilityCard: React.FC<{ facility: { icon: string; title: string }, isVisible: boolean, index: number }> = ({ facility, isVisible, index }) => (
  <div
    className={`bg-white/80 dark:bg-black/40 backdrop-blur-sm p-6 rounded-2xl group transition-all duration-300 ease-out shadow-lg hover-scale hover-glow flex flex-col items-center justify-center text-center border border-gray-200 dark:border-brand-gold/20 h-full hover-sheen ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: `${index * 50}ms` }}
  >
    <div className="flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-brand-black/50 rounded-full mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
        <i className={`${facility.icon} text-3xl md:text-4xl animate-float-slow`}></i>
    </div>
    <h3 className="font-semibold text-xl text-gray-800 dark:text-white flex-grow flex items-center">{facility.title}</h3>
  </div>
);

const FacilitiesGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {Object.entries(facilitySections).map(([sectionTitle, facilities]) => (
          <div key={sectionTitle} className="mb-16 last:mb-0">
            <h3 className="font-semibold text-xl md:text-2xl lg:text-3xl tracking-tight text-gray-900 dark:text-gray-200 mb-8 text-center">
              {sectionTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {facilities.map((facility, index) => (
                <FacilityCard key={facility.title} facility={facility} isVisible={isVisible} index={index} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FacilitiesGrid;