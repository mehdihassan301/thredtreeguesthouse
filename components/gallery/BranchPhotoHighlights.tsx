import React from 'react';

const branches = [
  { name: 'The Red Tree (Main)', description: 'Family-friendly comfort in a central location.', image: '/images/branch-main.jpg' },
  { name: 'Red Tree II Executive', description: 'Designed for the modern business traveler.', image: '/images/branch-executive.jpg' },
  { name: 'Red Tree III Premium', description: 'Spacious rooms for elevated long stays.', image: '/images/branch-premium.jpg' },
  { name: 'Red Sea Guest House', description: 'A serene escape near the scenic coastline.', image: '/images/branch-red-sea.jpg' }
];

const BranchPhotoHighlights: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
                Explore Our Branches
            </h2>
        </div>
        <div className="flex overflow-x-auto space-x-8 pb-8 -mb-8">
          {branches.map((branch) => (
            <div key={branch.name} className="flex-shrink-0 w-80 group">
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 group-hover:shadow-brand-gold/20 group-hover:-translate-y-2 border border-gray-200 dark:border-brand-gold/20">
                <img src={branch.image} alt={branch.name} className="w-full h-56 object-cover" />
                <div className="p-6 bg-white dark:bg-black border-t-2 border-brand-gold/50 text-center flex flex-col items-center justify-center">
                  <h3 className="font-semibold text-xl text-brand-gold mb-2">{branch.name}</h3>
                  <p className="text-lg text-gray-600 dark:text-slate-gray leading-relaxed">{branch.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchPhotoHighlights;