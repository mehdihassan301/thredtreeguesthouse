
import React from 'react';

const highlights = [
  { icon: 'fas fa-headset', name: '24/7 Support' },
  { icon: 'fas fa-wifi', name: 'Fast WiFi' },
  { icon: 'fas fa-shield-alt', name: 'Safe & Secure' },
  { icon: 'fas fa-gem', name: 'Premium Comfort' }
];

const FeatureHighlightsStrip: React.FC = () => {
  return (
    <div className="bg-white dark:bg-brand-black border-y border-gray-200 dark:border-brand-gold/20 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((highlight) => (
            <div key={highlight.name} className="flex flex-col items-center text-center group">
              <div className="flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-black/40 backdrop-blur-sm border-2 border-gray-200 dark:border-brand-gold/20 rounded-full transition-all duration-300 group-hover:bg-brand-gold/10 group-hover:scale-110">
                 <i className={`${highlight.icon} text-3xl md:text-4xl text-brand-gold`}></i>
              </div>
              <h3 className="font-semibold text-lg uppercase tracking-wider mt-4 text-gray-800 dark:text-white">{highlight.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlightsStrip;