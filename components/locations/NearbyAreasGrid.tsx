import React, { useState, useEffect } from 'react';

const areas = [
  { name: 'Tariq Road / Jheel Park', description: 'Vibrant shopping and recreational hub', image: '/images/location-tariq-road.jpg' },
  { name: 'PECHS / Shahrah-e-Faisal', description: 'Karachi\'s central business artery', image: '/images/location-pechs.jpg' },
  { name: 'Clifton Seaview', description: 'Scenic coastline and leisure spots', image: '/images/location-clifton.jpg' },
  { name: 'Dolmen Mall', description: 'Premier destination for shopping & dining', image: '/images/location-dolmen-mall.jpg' },
  { name: 'Hyperstar Market', description: 'Large-scale retail for all your needs', image: '/images/location-hyperstar.jpg' },
  { name: 'Airport / Transport Hub', description: 'Effortless connectivity for travelers', image: '/images/location-airport.jpg' },
];

const NearbyAreasGrid: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
                In the Heart of the Action
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={area.name}
              className={`group relative h-80 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 ease-out border border-gray-200 dark:border-brand-gold/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img src={area.image} alt={area.name} className="card-image group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-semibold text-2xl text-white">{area.name}</h3>
                <p className="text-lg text-gray-300 mt-1">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyAreasGrid;