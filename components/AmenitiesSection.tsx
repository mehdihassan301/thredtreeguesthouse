
import React from 'react';

const amenities = [
  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0" />, name: 'Free WiFi' },
  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25" />, name: 'Private Parking' },
  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4h1.5M12 6H9m1.5-2V2m3 2l1.5-1.5m-1.5 1.5l-1.5 1.5m-1.5-1.5l1.5-1.5m-1.5 1.5L9 6.01M15 12a3 3 0 11-6 0 3 3 0 016 0z" />, name: 'Air Conditioning' },
  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />, name: '24/7 Front Desk' },
  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, name: 'Room Service' },
  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l3.75-3.75m0 0V4.5m0 7.5h7.5m-7.5 0l-3.75 3.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />, name: 'Airport Shuttle' },
  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.117 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.117 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />, name: 'Daily Housekeeping' },
  { icon: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a9 9 0 11-18 0 9 9 0 0118 0zM8.25 8.25v.01" />, name: 'CCTV Security' },
];

const AmenityCard: React.FC<{ amenity: typeof amenities[0] }> = ({ amenity }) => (
    <div className="bg-white dark:bg-transparent border border-gray-200 dark:border-brand-gold/20 p-6 text-center rounded-sm group transform transition-all duration-300 ease-in-out hover:bg-gray-50 dark:hover:bg-black hover:shadow-lg hover:shadow-brand-gold/10 hover:-translate-y-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {amenity.icon}
        </svg>
        <h3 className="font-semibold text-gray-900 dark:text-brand-light">{amenity.name}</h3>
    </div>
);

const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="py-20 md:py-32 bg-gray-100 dark:bg-brand-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-gold font-bold mb-4">
                Guest Amenities
            </h2>
            <p className="text-gray-600 dark:text-slate-gray">
                Everything you need for a comfortable and seamless stay is right here.
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

export default AmenitiesSection;