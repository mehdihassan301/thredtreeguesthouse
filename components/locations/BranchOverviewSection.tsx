

import React from 'react';
import Button from '../Button';

const branches = [
  {
    name: 'The Red Tree Guest House',
    address: '154-S Block-2, PECHS, Karachi',
    description: 'Our flagship branch offers a family-friendly atmosphere with a central location, perfect for tourists and shoppers seeking a clean and quiet stay.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.9901985554816!2d67.04087517442746!3d24.795789147844037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d00198ec0bd%3A0xee9fcfdfb3231d80!2sThe%20Red%20Tree%20Family%20Guest%20House!5e0!3m2!1sen!2s!4v1765303500881!5m2!1sen!2s',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Red+Tree+Family+Guest+House'
  },
  {
    name: 'The Red Tree II Executive Guest House',
    address: '154-S, Block 2 PECHS, Karachi',
    description: 'Designed for the discerning business traveler, this branch provides dedicated workspaces and a productive, serene environment close to commercial hubs.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.907657537811!2d67.0385525744275!3d24.798615347731268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d004f775f39%3A0x73bdf341890f744c!2sThe%20Red%20Tree%20II%20Executive%20Guest%20House%20Karachi!5e0!3m2!1sen!2s!4v1765303580343!5m2!1sen!2s',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Red+Tree+II+Executive+Guest+House+Karachi'
  },
  {
    name: 'The Red Tree III Premium',
    address: 'Q2WV+GH8 Defence Housing Authority, Karachi, Pakistan',
    description: 'Experience enhanced comfort with spacious rooms and premium interiors. Ideal for long stays with easy access to the airport and major business centers.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.758362483864!2d67.0493720759313!3d24.80373804675404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da44ffffff%3A0x6a6557dda36850d5!2sThe%20Red%20Tree%20House!5e0!3m2!1sen!2s!4v1676495394200!5m2!1sen!2s',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Q2WV%2BGH8%2CDHA%2CKarachi%2CPakistan'
  },
  {
    name: 'The Red Sea Guest House',
    address: 'D-10, Block 4 Clifton, Karachi',
    description: 'A tranquil seaside escape offering a relaxing ambiance. The perfect choice for tourists and couples looking to unwind near the scenic coast.',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.8994356637813!2d67.03872207442758!3d24.79889684772003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d0039b4b82b%3A0x8ddb6110a7e554a5!2sRed%20Sea%20Guest%20House%20Karachi!5e0!3m2!1sen!2s!4v1765303453595!5m2!1sen!2s',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Red+Sea+Guest+House+Karachi'
  },
];

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\(main branch\)/g, '') // remove specific text
    .replace(/guest house/g, '') // remove specific text
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');


const BranchCard: React.FC<{ branch: typeof branches[0] }> = ({ branch }) => (
  <div className="bg-amber-50/20 dark:bg-black/40 backdrop-blur-sm border border-gray-200 dark:border-brand-gold/20 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ease-out hover:shadow-xl dark:hover:shadow-brand-gold/20 grid grid-cols-1 md:grid-cols-5 hover-sheen">
    <div className="p-6 md:p-8 flex flex-col order-1 md:col-span-3">
      <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white mb-2">{branch.name}</h3>
      <p className="text-lg text-gray-700 dark:text-slate-gray mb-4 flex-grow">{branch.description}</p>
      <div className="flex items-start text-lg text-gray-600 dark:text-slate-gray mb-6">
        <i className="fas fa-map-marker-alt text-brand-gold mr-3 mt-1 flex-shrink-0"></i>
        <span>{branch.address}</span>
      </div>
      <Button as="a" href={branch.googleMapsUrl} target="_blank" variant="gold" className="w-full sm:w-auto mt-auto">
        Get Directions
      </Button>
    </div>
    <div className="h-64 md:h-full w-full order-2 md:col-span-2">
      <iframe
        src={branch.mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
);


const BranchOverviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
                Our Network of Comfort
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray leading-relaxed max-w-2xl mx-auto">
                Four unique locations, one promise of quality. Find the perfect Red Tree Guest House for your stay in Karachi.
            </p>
        </div>
        <div className="space-y-12 md:space-y-16">
          {branches.map((branch, index) => (
            <div key={index} id={slugify(branch.name)}>
              <BranchCard branch={branch} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchOverviewSection;