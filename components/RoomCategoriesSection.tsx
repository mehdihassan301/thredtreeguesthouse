
import React from 'react';

const rooms = [
  {
    name: 'Standard Room',
    image: '/images/room-standard.jpg',
    description: "The epitome of comfort and efficiency, meticulously designed for the modern traveler.",
    features: ['Plush Queen Bed', 'Functional Workspace', 'Rain Shower', 'Smart LED TV']
  },
  {
    name: 'Deluxe Room',
    image: '/images/room-deluxe.jpg',
    description: "An elevated experience with additional space, elegant decor, and enhanced amenities.",
    features: ['Luxurious King Bed', 'Comfortable Seating Area', 'Upgraded Toiletries', 'High-Speed Wi-Fi']
  },
  {
    name: 'Executive Room',
    image: '/images/room-executive.jpg',
    description: "Combining luxury with functionality in a serene and productive environment for the discerning traveler.",
    features: ['Premium King Bed', 'Executive Work Desk', 'Deluxe Amenities', 'HD Smart TV']
  },
  {
    name: 'Premium Family Suite',
    image: '/images/room-family-suite.jpg',
    description: "The ultimate choice for families, offering generous space, interconnected rooms, and a dedicated lounge area.",
    features: ['Master & Twin Bedrooms', 'Private Lounge Area', 'Multiple Washrooms', 'Entertainment Options']
  }
];

const RoomCategory: React.FC<{ room: typeof rooms[0], index: number }> = ({ room, index }) => (
    <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
            <img src={room.image} alt={room.name} className="rounded-2xl shadow-lg w-full h-auto" />
        </div>
        <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'} text-center flex flex-col items-center justify-center`}>
            <h3 className="font-semibold text-2xl md:text-3xl text-gray-800 dark:text-gray-300 mb-4">{room.name}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-md">{room.description}</p>
            <ul className="space-y-2 text-lg text-gray-600 dark:text-gray-300">
              {room.features.map(feature => (
                <li key={feature} className="flex items-center justify-center">
                  <i className="fas fa-check w-4 h-4 text-brand-gold mr-3 flex-shrink-0"></i>
                  {feature}
                </li>
              ))}
            </ul>
        </div>
    </div>
);

const RoomCategoriesSection: React.FC = () => {
  return (
    <section id="rooms" className="py-16 md:py-24 bg-white dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px] space-y-24">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-gray-200 mb-4">
                Our Room Categories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Each room is a blend of modern aesthetics and cozy comfort, designed for an unforgettable stay.
            </p>
        </div>
        {rooms.map((room, index) => (
          <RoomCategory key={room.name} room={room} index={index} />
        ))}
      </div>
    </section>
  );
};

export default RoomCategoriesSection;