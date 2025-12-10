
import React, { useState, useEffect } from 'react';

const amenities = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5s0-1.5 2.25-1.5 2.25 1.5 2.25 1.5m-4.5 0s0-1.5 2.25-1.5 2.25 1.5 2.25 1.5m8.25-1.5s0-1.5-2.25-1.5-2.25 1.5-2.25 1.5M12 18s0-1.5 2.25-1.5 2.25 1.5 2.25 1.5m-4.5 0s0-1.5 2.25-1.5 2.25 1.5 2.25 1.5M20.625 19.5h-3.375m3.375 0a1.125 1.125 0 001.125-1.125m-18.375 0a1.125 1.125 0 001.125 1.125m16.125 0a1.125 1.125 0 01-1.125 1.125m-16.125 0a1.125 1.125 0 01-1.125-1.125M12 3.75a3.75 3.75 0 00-3.75 3.75v.75h7.5v-.75A3.75 3.75 0 0012 3.75z" /></svg>
    ),
    title: 'Near Seaview Beach',
    description: 'Just 2.2 km away, enjoy easy access to the coast.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h14.25" /></svg>
    ),
    title: 'Free Private Parking',
    description: 'Secure and complimentary parking for all our guests.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5v15m0 0l-3.75-3.75M13.5 19.5l3.75-3.75M6 20.25h12A2.25 2.25 0 0020.25 18V5.75A2.25 2.25 0 0018 3.5H6A2.25 2.25 0 003.75 5.75v12.25A2.25 2.25 0 006 20.25z" /></svg>
    ),
    title: 'Fully Air-Conditioned',
    description: 'Stay cool and comfortable in our modern rooms.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.75 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
    ),
    title: 'High-Speed Wi-Fi',
    description: 'Free, reliable internet access throughout the property.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Shared Kitchen',
    description: 'A clean, modern kitchen and dining area for your use.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
    ),
    title: '24/7 Reception',
    description: 'Our friendly staff is always available to assist you.',
  },
];

const Amenities: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

  return (
    <section id="amenities" className="py-20 md:py-32 bg-gray-50 dark:bg-charcoal-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-brand-gold font-bold mb-4">
                Your Comfort, Our Priority
            </h2>
            <p className="text-gray-700 dark:text-slate-gray">
                We provide a host of modern amenities to ensure your stay is relaxing and seamless.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.title}
              className={`text-center p-6 rounded-xl transition-all duration-300 ease-in-out hover:bg-white dark:hover:bg-rich-onyx hover:shadow-lg hover:-translate-y-2 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center items-center mb-4">{amenity.icon}</div>
              <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg mb-2">{amenity.title}</h3>
              <p className="text-gray-600 dark:text-slate-gray text-sm md:text-base">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
