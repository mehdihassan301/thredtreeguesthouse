
import React, { useState } from 'react';
import GalleryHeroSection from '../components/gallery/GalleryHeroSection';
import BranchGalleryGrid from '../components/gallery/BranchGalleryGrid';
import FinalCtaSection from '../components/FinalCtaSection';

interface GalleryPageProps {
  navigateTo: (page: string) => void;
}

const branchGalleries = [
  {
    branchName: 'The Red Tree Guest House (Main)',
    description: 'Real photos from our rooms, lobby, bathrooms, and exterior.',
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `/images/gallery-main-${i + 1}.jpg`,
      alt: `The Red Tree (Main) - Image ${i + 1}`
    }))
  },
  {
    branchName: 'The Red Tree II Executive',
    description: 'Real photos from our rooms, lobby, bathrooms, and exterior.',
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `/images/gallery-executive-${i + 1}.jpg`,
      alt: `Red Tree II Executive - Image ${i + 1}`
    }))
  },
  {
    branchName: 'The Red Tree III Premium',
    description: 'Real photos from our rooms, lobby, bathrooms, and exterior.',
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `/images/gallery-premium-${i + 1}.jpg`,
      alt: `Red Tree III Premium - Image ${i + 1}`
    }))
  },
  {
    branchName: 'The Red Sea Guest House (Clifton)',
    description: 'Real photos from our rooms, lobby, bathrooms, and exterior.',
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `/images/gallery-clifton-${i + 1}.jpg`,
      alt: `Red Sea Guest House - Image ${i + 1}`
    }))
  },
  {
    branchName: 'Apartment',
    description: 'Real photos from our furnished apartments, including living areas, kitchens, and bedrooms.',
    images: Array.from({ length: 6 }, (_, i) => ({
      src: `/images/gallery-apartment-${i + 1}.jpg`,
      alt: `Apartment - Image ${i + 1}`
    }))
  }
];

const GalleryPage: React.FC<GalleryPageProps> = ({ navigateTo }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', ...branchGalleries.map(g => g.branchName)];

  const filteredGalleries = activeFilter === 'All'
    ? branchGalleries
    : branchGalleries.filter(g => g.branchName === activeFilter);

  const getShortName = (name: string) => {
    if (name === 'The Red Tree Guest House (Main)') return 'Red Tree (Main)';
    if (name === 'The Red Sea Guest House (Clifton)') return 'Red Sea (Clifton)';
    return name;
  };

  return (
    <>
      <GalleryHeroSection />

      <div className="bg-gray-50 dark:bg-brand-black/95 py-8">
        <div className="container mx-auto px-6 max-w-[1200px] flex flex-wrap justify-center gap-2 md:gap-4">
          {filterOptions.map(option => (
            <button
              key={option}
              onClick={() => setActiveFilter(option)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-brand-black focus:ring-brand-gold ${
                activeFilter === option
                  ? 'bg-brand-gold text-brand-black shadow-md'
                  : 'bg-white dark:bg-rich-onyx text-gray-700 dark:text-slate-gray hover:bg-gray-200 dark:hover:bg-rich-onyx/60 hover:-translate-y-1'
              }`}
              aria-pressed={activeFilter === option}
            >
              {getShortName(option)}
            </button>
          ))}
        </div>
      </div>
      
      {filteredGalleries.map((gallery) => (
        <BranchGalleryGrid
          key={gallery.branchName}
          branchName={gallery.branchName}
          description={gallery.description}
          images={gallery.images}
        />
      ))}

      {filteredGalleries.length === 0 && activeFilter !== 'All' && (
        <div className="py-24 text-center bg-gray-50 dark:bg-brand-black/95">
          <p className="text-xl text-gray-600 dark:text-slate-gray">No gallery found for "{getShortName(activeFilter)}".</p>
        </div>
      )}

      <FinalCtaSection
        headline="See Luxury, Feel Comfort"
        text="Discover the elegance, comfort, and premium ambiance at The Red Tree Guest House."
        button1Text="Explore Rooms"
        button1OnClick={() => navigateTo('rooms')}
        button2Text="Book Now"
        button2OnClick={() => navigateTo('contact')}
      />
    </>
  );
};

export default GalleryPage;