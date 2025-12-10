
import React, { useState, useEffect } from 'react';
import Button from '../Button';

interface BranchNetworkSectionProps {
    navigateTo: (page: string) => void;
}

const branches = [
  {
    name: 'The Red Tree Guest House',
    location: 'PECHS, Block 2, Karachi',
    description: 'Family-friendly, exceptionally clean, and centrally located. The ideal choice for tourists and shoppers.',
  },
  {
    name: 'The Red Tree II Executive',
    location: 'PECHS, Block 2, Karachi',
    description: 'Tailored for business travelers with a quiet, work-friendly environment and corporate amenities.',
  },
  {
    name: 'The Red Tree III Premium',
    location: 'DHA Phase V, Karachi',
    description: 'Offers enhanced comfort with modern rooms and premium interiors, perfect for long-stay guests.',
  },
  {
    name: 'The Red Sea Guest House',
    location: 'Clifton, Block 4, Karachi',
    description: 'A peaceful seaside retreat favored by tourists for its calm surroundings and coastal charm.',
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

const BranchCard: React.FC<{ branch: typeof branches[0], isVisible: boolean, index: number, navigateTo: (page: string) => void; }> = ({ branch, isVisible, index, navigateTo }) => {
    const branchId = slugify(branch.name);
    return (
        <div 
          className={`bg-white dark:bg-black dark:border border-gray-200 dark:border-brand-gold/20 rounded-2xl p-6 md:p-8 text-center h-full flex flex-col items-center justify-center group transform transition-all duration-500 ease-in-out shadow-lg hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-brand-gold/10 hover:-translate-y-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <h3 className="font-semibold text-xl md:text-2xl text-gray-900 dark:text-white mb-2">{branch.name}</h3>
            <p className="text-lg text-gray-600 dark:text-slate-gray leading-relaxed flex-grow mb-6">{branch.description}</p>
            <Button onClick={() => navigateTo(`locations#${branchId}`)} variant="outline" className="w-full text-base mt-auto">Learn More</Button>
        </div>
    );
};

const BranchNetworkSection: React.FC<BranchNetworkSectionProps> = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
                Our Branch Network
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-gray leading-relaxed max-w-2xl mx-auto">
                Four unique locations, one promise of quality. Find the perfect Red Tree Guest House for your stay in Karachi.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {branches.map((branch, index) => (
            <BranchCard key={branch.name} branch={branch} isVisible={isVisible} index={index} navigateTo={navigateTo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchNetworkSection;