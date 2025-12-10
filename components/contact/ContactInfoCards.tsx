

import React from 'react';

const infoItems = [
  {
    icon: 'fas fa-phone-alt',
    title: 'Contact Numbers',
    content: '0325-8044401 • 0327-8044401 • 0328-8044401',
    href: 'tel:03258044401'
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email Address',
    content: 'Theredtreeguesthouse@gmail.com',
    href: 'mailto:Theredtreeguesthouse@gmail.com'
  },
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Office Address',
    content: 'House #15/1/2 Sab Avenue, Phase V Ext. DHA Karachi',
    href: 'https://www.google.com/maps/search/?query=House+%2315%2F1%2F2+Sab+Avenue%2C+Phase+V+Ext.+DHA+Karachi'
  },
  {
    icon: 'fas fa-clock',
    title: 'Operating Hours',
    content: '24/7 Guest Support',
    href: '#'
  }
];

const InfoCard: React.FC<{ item: typeof infoItems[0] }> = ({ item }) => (
  <a href={item.href} className="block bg-white/80 dark:bg-black/40 backdrop-blur-sm p-6 md:p-8 rounded-2xl group transition-all duration-300 ease-in-out shadow-lg hover-scale hover-glow flex flex-col items-center justify-center text-center border border-gray-200 dark:border-brand-gold/20 hover-sheen">
    <div className="flex items-center justify-center w-20 h-20 bg-gray-100 dark:bg-brand-black/50 rounded-full mb-6 mx-auto group-hover:scale-110 transition-all duration-300">
      <i className={`${item.icon} text-3xl md:text-4xl text-brand-gold animate-pulse-soft`}></i>
    </div>
    <h3 className="font-semibold text-xl md:text-2xl text-gray-800 dark:text-white mb-4">{item.title}</h3>
    <p className="text-lg text-gray-600 dark:text-slate-gray">{item.content}</p>
  </a>
);

const ContactInfoCards: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <InfoCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// FIX: Add default export to make the component available for import.
export default ContactInfoCards;