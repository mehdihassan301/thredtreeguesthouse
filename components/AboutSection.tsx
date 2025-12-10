import React from 'react';

const AboutSection: React.FC = () => {
  const highlights = [
    { icon: 'fa-shield-alt', text: 'Uncompromising Security' },
    { icon: 'fa-gem', text: 'Premium Amenities' },
    { icon: 'fa-concierge-bell', text: 'Personalized Service' },
  ];

  return (
    <section id="about-preview" className="py-20 md:py-32 bg-white dark:bg-rich-onyx">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Modern Luxury in the Heart of the City
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray leading-relaxed mb-8">
            The Red Tree offers an unparalleled urban retreat, blending executive comfort with boutique charm. Our commitment is to provide a sophisticated, secure, and serene environment for discerning travelers.
          </p>
          <ul className="space-y-4 inline-block text-left">
            {highlights.map(item => (
              <li key={item.text} className="flex items-center">
                <i className={`fas ${item.icon} text-brand-gold w-6 text-center mr-4`}></i>
                <span className="text-lg font-medium text-gray-800 dark:text-slate-gray">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;