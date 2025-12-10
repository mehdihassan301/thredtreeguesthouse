

import React from 'react';
import Button from './Button';

interface BranchesOverviewSectionProps {
  navigateTo: (page: string) => void;
}

const branches = [
  {
    name: 'The Red Tree Guest House (Main Branch)',
    location: 'PECHS, Block 2, Karachi',
    image: '/images/branch-main.jpg',
    mapLink: 'https://goo.gl/maps/example1'
  },
  {
    name: 'The Red Tree II Executive',
    location: 'PECHS, Block 2, Karachi',
    image: '/images/branch-executive.jpg',
    mapLink: 'https://goo.gl/maps/example2'
  },
  {
    name: 'The Red Tree III Premium',
    location: 'DHA Phase V, Karachi',
    image: '/images/branch-premium.jpg',
    mapLink: 'https://goo.gl/maps/example3'
  },
  {
    name: 'The Red Sea Guest House',
    location: 'Clifton, Block 4, Karachi',
    image: '/images/branch-red-sea.jpg',
    mapLink: 'https://goo.gl/maps/example4'
  }
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\(main branch\)/g, '') // remove specific text
    .replace(/guest house/g, '') // remove specific text
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');


const BranchCard: React.FC<{ branch: typeof branches[0]; navigateTo: (page: string) => void; }> = ({ branch, navigateTo }) => {
  const branchId = slugify(branch.name);
  return (
    <div className="bg-white dark:bg-rich-onyx/40 backdrop-blur-md border border-brand-gold/20 rounded-2xl group transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-glow hover:-translate-y-2 text-center flex flex-col hover-sheen">
        <div className="overflow-hidden h-48">
            <img
                src={branch.image}
                alt={branch.name}
                className="card-image group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
            />
        </div>
        <div className="p-6 md:p-8 flex flex-col items-center justify-center flex-grow">
            <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-4">{branch.name}</h3>
            <Button onClick={() => navigateTo(`locations#${branchId}`)} variant="outline" className="w-full text-sm mt-auto">
                <i className="fas fa-map-marker-alt mr-2"></i> View on Map
            </Button>
        </div>
    </div>
  );
};


const BranchesOverviewSection: React.FC<BranchesOverviewSectionProps> = ({ navigateTo }) => {
  return (
    <section id="branches" className="py-16 md:py-24 bg-gray-50 dark:bg-charcoal-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
                Our Branches
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray leading-relaxed max-w-2xl mx-auto">
                Four distinct locations, one standard of excellence. Discover the perfect Red Tree experience tailored to your travel needs.
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {branches.map((branch) => (
            <BranchCard key={branch.name} branch={branch} navigateTo={navigateTo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesOverviewSection;