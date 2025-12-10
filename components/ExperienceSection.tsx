import React from 'react';

const highlights = [
  { icon: 'fa-shopping-bag', name: 'Shopping' },
  { icon: 'fa-briefcase', name: 'Business Hubs' },
  { icon: 'fa-utensils', name: 'Fine Dining' },
];

const ExperienceSection: React.FC = () => {
  return (
    <section 
      className="py-20 md:py-40 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url('/images/misc-urban-experience.jpg')` }}
    >
      <div className="absolute inset-0 bg-white/70 dark:bg-black/70"></div>
      <div className="relative container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)' }}>
          Experience Karachi With Comfort & Class
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray max-w-2xl mx-auto leading-relaxed mb-12">
          Our prime locations place you at the epicenter of Karachi's vibrant life, ensuring you're never far from where you need to be.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
          {highlights.map(item => (
            <div key={item.name} className="flex flex-col items-center">
              <i className={`fas ${item.icon} text-4xl text-brand-gold mb-3`}></i>
              <span className="text-xl font-semibold uppercase tracking-wider text-gray-800 dark:text-white">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;