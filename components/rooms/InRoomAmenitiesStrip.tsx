
import React from 'react';

const amenities = [
  { icon: 'fas fa-wifi', name: 'High-Speed WiFi' },
  { icon: 'fas fa-bed', name: 'Comfortable Bedding' },
  { icon: 'fas fa-headset', name: '24/7 Support' },
  { icon: 'fas fa-bath', name: 'Complimentary Toiletries' },
  { icon: 'fas fa-tv', name: 'Smart LED TVs' },
  { icon: 'fas fa-snowflake', name: 'Air Conditioning' },
  { icon: 'fas fa-broom', name: 'Daily Cleaning' },
  { icon: 'fas fa-shield-alt', name: 'Secure Environment' },
];

const InRoomAmenitiesStrip: React.FC = () => {
  const duplicatedAmenities = [...amenities, ...amenities];

  return (
    <div className="bg-white dark:bg-brand-black border-y border-gray-200 dark:border-brand-gold/20 py-8 group overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedAmenities.map((amenity, index) => (
            <div key={`${amenity.name}-${index}`} className="flex-shrink-0 flex flex-col items-center justify-center text-center w-40 px-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-brand-black/50 border-2 border-gray-200 dark:border-brand-gold/20 rounded-full mb-3 transition-colors duration-300 group-hover:bg-brand-gold/10">
                <i className={`${amenity.icon} text-2xl text-brand-gold`}></i>
              </div>
              <p className="text-gray-600 dark:text-slate-gray font-medium text-lg uppercase tracking-wider">{amenity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InRoomAmenitiesStrip;