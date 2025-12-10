
import React, { useState, useEffect } from 'react';
import Button from './Button';

const rooms = [
  {
    name: 'The Ocean View Suite',
    description: 'Spacious suite with a private balcony overlooking the sea.',
    imageUrl: 'https://picsum.photos/seed/ocean-suite/800/600',
  },
  {
    name: 'Deluxe King Room',
    description: 'A comfortable and modern room with a plush king-sized bed.',
    imageUrl: 'https://picsum.photos/seed/deluxe-king/800/600',
  },
  {
    name: 'Executive Twin Room',
    description: 'Perfect for business travelers, featuring two single beds.',
    imageUrl: 'https://picsum.photos/seed/executive-twin/800/600',
  },
];

const FeaturedRooms: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        setIsVisible(true);
    }, []);

  return (
    <section id="rooms" className="py-20 md:py-32 bg-white dark:bg-rich-onyx">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 dark:text-brand-gold font-bold mb-4">
                Our Finest Rooms
            </h2>
            <p className="text-gray-700 dark:text-slate-gray">
                Each room is designed with your comfort in mind, blending modern aesthetics with cozy details.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={room.name}
              className={`bg-white dark:bg-rich-onyx/40 rounded-lg shadow-lg overflow-hidden group transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="overflow-hidden">
                  <img
                    src={room.imageUrl}
                    alt={room.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-white mb-2">{room.name}</h3>
                <p className="text-gray-700 dark:text-slate-gray mb-4">{room.description}</p>
                <p className="text-sm text-gray-600 dark:text-slate-gray mb-6">Price starting from [PKR]/night</p>
                <Button variant="outline" className="w-full">View Room Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
