
import React from 'react';
import Button from './Button';

const branches = [
  {
    location: 'Karachi, Sea-View',
    description: 'Our flagship branch near the beach, with free parking and close proximity to Dolmen Mall Clifton.',
    amenities: ['Private Beach', 'Garden', 'WiFi', 'AC'],
  },
  {
    location: 'Lahore, Gulberg',
    description: 'A modern oasis in the heart of Lahore’s business district, perfect for corporate travelers.',
    amenities: ['Conference Hall', 'Rooftop Cafe', 'Gym', 'AC'],
  },
  {
    location: 'Islamabad, F-7',
    description: 'Nestled near the Margalla Hills, offering serene views and exceptional service for a peaceful retreat.',
    amenities: ['Hill Views', 'Terrace', 'WiFi', 'Fireplace'],
  }
];

const BranchCard: React.FC<{ branch: typeof branches[0] }> = ({ branch }) => (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-brand-gold/20 p-8 rounded-sm group transform transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-brand-gold/10 hover:-translate-y-2">
        <div className="flex items-start gap-4 mb-4">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div>
                 <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-brand-light mb-1">{branch.location}</h3>
                 <p className="text-gray-600 dark:text-slate-gray text-sm">{branch.description}</p>
            </div>
        </div>
       
        <div className="border-t border-brand-gold/10 my-4"></div>
        
        <div className="flex flex-wrap gap-2 mb-6">
            {branch.amenities.map(amenity => (
                <span key={amenity} className="text-xs bg-brand-gold/10 text-brand-gold py-1 px-3 rounded-full">{amenity}</span>
            ))}
        </div>
        <Button variant="outline" className="w-full text-xs">View Branch</Button>
    </div>
);


const BranchesSection: React.FC = () => {
  return (
    <section id="branches" className="py-20 md:py-32 bg-gray-100 dark:bg-brand-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-gold font-bold mb-4">
                Our Locations
            </h2>
            <p className="text-gray-600 dark:text-slate-gray">
                Premium comfort and exceptional service, wherever you stay.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <BranchCard key={branch.location} branch={branch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;