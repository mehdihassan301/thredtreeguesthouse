
import React from 'react';

const standards = [
  { name: '24/7 Guest Support', icon: 'fas fa-headset' },
  { name: 'Daily Housekeeping', icon: 'fas fa-broom' },
  { name: 'Fast & Free WiFi', icon: 'fas fa-wifi' },
  { name: 'CCTV Safety Monitoring', icon: 'fas fa-video' },
  { name: 'Family-Friendly Policies', icon: 'fas fa-users' },
  { name: 'Comfortable Bedding', icon: 'fas fa-bed' },
  { name: 'Smart Room Facilities', icon: 'fas fa-cogs' },
  { name: 'Professional Staff', icon: 'fas fa-user-tie' }
];

const HospitalityStandardsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
            Our Hospitality Standards
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-gray leading-relaxed max-w-2xl mx-auto">
            We pledge a consistent standard of excellence across all our properties.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {standards.map((standard) => (
            <div key={standard.name} className="text-center group flex flex-col items-center justify-center">
               <div className="flex items-center justify-center w-24 h-24 bg-white dark:bg-black/40 backdrop-blur-sm border-2 border-gray-200 dark:border-brand-gold/20 rounded-full mb-4 mx-auto transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-brand-gold/50">
                 <i className={`${standard.icon} text-3xl md:text-4xl text-brand-gold`}></i>
               </div>
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">{standard.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HospitalityStandardsSection;