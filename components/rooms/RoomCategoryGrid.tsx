

import React, { useState, useEffect } from 'react';
import Button from '../Button';

interface RoomCategoryGridProps {
  navigateTo: (page: string) => void;
}

const rooms = [
  {
    title: 'Standard Room',
    image: '/images/room-standard.jpg',
    description: 'Cozy, clean, well-lit room with comfortable bedding, essential furniture, and quiet ambience — perfect for short stays and solo guests.',
    features: [
      { icon: 'fas fa-bed', text: '1 Queen Bed' },
      { icon: 'fas fa-wifi', text: 'Fast WiFi' },
      { icon: 'fas fa-snowflake', text: 'Air Conditioning' },
      { icon: 'fas fa-tv', text: 'Smart LED TV' },
    ]
  },
  {
    title: 'Deluxe Room',
    image: '/images/room-deluxe.jpg',
    description: 'More spacious and refined, offering enhanced comfort with premium bedding, modern décor, and soft lighting — ideal for couples and travelers.',
    features: [
      { icon: 'fas fa-bed', text: 'King or Twin Beds' },
      { icon: 'fas fa-desktop', text: 'Work Desk' },
      { icon: 'fas fa-wifi', text: 'Fast WiFi' },
      { icon: 'fas fa-tv', text: 'Large LED TV' },
    ]
  },
  {
    title: 'Executive Room',
    image: '/images/room-executive.jpg',
    description: 'Designed for business travelers, featuring a dedicated workspace, executive-style interior, sound insulation, and superior comfort.',
    features: [
      { icon: 'fas fa-desktop', text: 'Executive Work Desk' },
      { icon: 'fas fa-wifi', text: 'High-Speed WiFi' },
      { icon: 'fas fa-bed', text: 'King Bed' },
      { icon: 'fas fa-broom', text: 'Daily Housekeeping' },
    ]
  },
  {
    title: 'Premium Family Suite',
    image: '/images/room-family-suite.jpg',
    description: 'A large, multi-person suite with upgraded décor, seating area, and enhanced amenities — perfect for long stays and family comfort.',
    features: [
      { icon: 'fas fa-bed', text: '2 Queen Beds' },
      { icon: 'fas fa-couch', text: 'Seating Area' },
      { icon: 'fas fa-tv', text: 'Smart LED TV' },
      { icon: 'fas fa-snowflake', text: 'Air Conditioning' },
    ]
  }
];

const RoomCard: React.FC<{ room: typeof rooms[0], isVisible: boolean, index: number, navigateTo: (page: string) => void; }> = ({ room, isVisible, index, navigateTo }) => (
    <div 
      className={`bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-brand-gold/20 rounded-2xl overflow-hidden group transition-all duration-500 ease-out shadow-lg hover-glow hover-scale hover-sheen ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
        <div className="overflow-hidden">
            <img src={room.image} alt={room.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/>
        </div>
        <div className="p-6 md:p-8 text-center flex flex-col items-center justify-center">
            <h3 className="font-semibold text-xl md:text-2xl text-gray-900 dark:text-white mb-4">{room.title}</h3>
            <p className="text-lg text-gray-600 dark:text-slate-gray mb-6 leading-relaxed flex-grow">{room.description}</p>
            <ul className="space-y-3 mb-8 text-left inline-block">
              {room.features.map(feature => (
                <li key={feature.text} className="flex items-center text-lg text-gray-600 dark:text-slate-gray">
                  <i className={`${feature.icon} text-brand-gold mr-4 w-5 text-center`}></i>
                  {feature.text}
                </li>
              ))}
            </ul>
            <Button onClick={() => navigateTo('contact')} variant="gold" className="w-full mt-auto">View Details</Button>
        </div>
    </div>
);

const RoomCategoryGrid: React.FC<RoomCategoryGridProps> = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {rooms.map((room, index) => (
            <RoomCard key={room.title} room={room} isVisible={isVisible} index={index} navigateTo={navigateTo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCategoryGrid;