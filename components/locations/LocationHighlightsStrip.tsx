
import React from 'react';

const icons = [
  { icon: 'fas fa-bus-alt', name: 'Transport' },
  { icon: 'fas fa-shopping-bag', name: 'Shopping' },
  { icon: 'fas fa-utensils', name: 'Dining' },
];

const LocationHighlightsStrip: React.FC = () => {
  return (
    <div className="bg-white dark:bg-brand-black border-y border-gray-200 dark:border-brand-gold/20 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 text-center md:text-left">
                <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white leading-tight mb-4">
                    Unmatched Accessibility & Connectivity
                </h3>
                <p className="text-lg md:text-xl text-gray-600 dark:text-slate-gray leading-relaxed">
                    All our branches are strategically positioned near major roads, offering seamless access to Karachi's top malls, restaurants, and tourist attractions for a truly convenient stay.
                </p>
            </div>
            <div className="flex justify-center md:justify-end space-x-8">
                 {icons.map(item => (
                    <div key={item.name} className="flex flex-col items-center text-center">
                        <i className={`${item.icon} text-3xl md:text-4xl text-brand-gold mb-2`}></i>
                        <span className="text-gray-600 dark:text-slate-gray text-lg font-semibold uppercase tracking-wider">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocationHighlightsStrip;