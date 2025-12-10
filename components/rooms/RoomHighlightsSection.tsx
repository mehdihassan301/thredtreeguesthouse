
import React, { useState, useEffect } from 'react';

const highlights = [
  {
    icon: 'fas fa-lightbulb text-yellow-400',
    title: 'Soft Lighting Ambience',
    description: 'Calm, adjustable lighting to create a relaxing and personalized atmosphere.'
  },
  {
    icon: 'fas fa-gem text-emerald-400',
    title: 'Premium Cleanliness',
    description: 'Our executive-level hygiene standards ensure a pristine and sanitized environment.'
  },
  {
    icon: 'fas fa-bed text-rose-400',
    title: 'Comfort-First Bedding',
    description: 'Plush mattresses and high-quality linens for a truly restful night’s sleep.'
  },
  {
    icon: 'fas fa-volume-mute text-indigo-400',
    title: 'Quiet & Peaceful',
    description: 'Enjoy a serene stay with sound-insulated rooms for minimal disturbance.'
  }
];

const RoomHighlightsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`bg-white/80 dark:bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center group transition-all duration-300 ease-out shadow-lg hover-scale hover-glow flex flex-col items-center justify-center border border-gray-200 dark:border-brand-gold/20 hover-sheen ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-brand-black/50 rounded-full mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
                  <i className={`${highlight.icon} text-3xl md:text-4xl animate-float-slow`}></i>
              </div>
              <h3 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white mb-4">{highlight.title}</h3>
              <p className="text-lg text-gray-600 dark:text-slate-gray leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomHighlightsSection;