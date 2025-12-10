

import React from 'react';
import Button from './Button';

interface RoomsSectionProps {
  navigateTo: (page: string) => void;
}

const rooms = [
  {
    name: 'Deluxe Room',
    features: ['King Bed', 'City View', 'Work Desk'],
    price: 59,
    imageUrl: '/images/room-deluxe.jpg',
  },
  {
    name: 'Executive Suite',
    features: ['King Bed', 'Lounge Area', 'High-Speed WiFi'],
    price: 79,
    imageUrl: '/images/room-executive.jpg',
  },
];

const amenityIcons = {
    'King Bed': 'fas fa-bed',
    'City View': 'fas fa-city',
    'Work Desk': 'fas fa-briefcase',
    'Lounge Area': 'fas fa-couch',
    'High-Speed WiFi': 'fas fa-wifi',
};

const RoomCard: React.FC<{ room: typeof rooms[0]; onCheckAvailability: () => void }> = ({ room, onCheckAvailability }) => (
    <div className="bg-white dark:bg-black/40 backdrop-blur-md border border-brand-gold/20 rounded-2xl overflow-hidden group transform transition-all duration-300 ease-in-out hover:shadow-glow hover:-translate-y-2 hover-sheen">
        <div className="overflow-hidden relative h-80">
            <img
                src={room.imageUrl}
                alt={room.name}
                className="card-image group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
            />
        </div>
        <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{room.name}</h3>
            <div className="flex justify-center gap-6 mb-6 text-gray-700 dark:text-slate-gray">
              {room.features.map(feature => (
                  <div key={feature} className="flex flex-col items-center">
                      <i className={`${amenityIcons[feature as keyof typeof amenityIcons]} text-brand-gold text-2xl mb-2`}></i>
                      <span className="text-base">{feature}</span>
                  </div>
              ))}
            </div>
            <Button onClick={onCheckAvailability} variant="gold" className="w-full text-base">Check Availability</Button>
        </div>
    </div>
);

const RoomsSection: React.FC<RoomsSectionProps> = ({ navigateTo }) => {
    return (
        <section id="rooms" className="py-20 md:py-32 bg-gray-50 dark:bg-charcoal-black">
          <div className="container mx-auto px-6 max-w-[1200px]">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Our Finest Rooms & Suites
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray">
                    Each space is a blend of modern aesthetics and cozy comfort, designed for an unforgettable stay.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {rooms.map((room) => (
                <RoomCard key={room.name} room={room} onCheckAvailability={() => navigateTo('rooms')} />
              ))}
            </div>
          </div>
        </section>
      );
};

export default RoomsSection;