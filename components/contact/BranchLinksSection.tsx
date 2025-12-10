
import React from 'react';
import Button from '../Button';

const branches = [
  { name: 'Red Tree II Executive', mapLink: 'https://www.google.com/maps/search/?query=The+Red+Tree+II+Executive+Guest+House' },
  { name: 'Red Tree III Premium', mapLink: 'https://www.google.com/maps/search/?query=The+Red+Tree+III+Premium' },
  { name: 'Red Sea Guest House', mapLink: 'https://www.google.com/maps/search/?query=The+Red+Sea+Guest+House+Clifton' }
];

const BranchLinksSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
                Visit Our Other Branches
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div key={branch.name} className="bg-white dark:bg-brand-dark-gray border border-brand-gold/20 p-6 md:p-8 rounded-2xl group transform transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-brand-gold/10 hover:-translate-y-2 hover:scale-105 flex flex-col items-center justify-center text-center">
              <h3 className="font-semibold text-xl md:text-2xl text-brand-gold mb-4">{branch.name}</h3>
              <Button as="a" href={branch.mapLink} target="_blank" variant="outline" className="w-full mt-auto">
                View on Map
            </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchLinksSection;
