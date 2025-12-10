import React from 'react';

interface BranchImageGalleryProps {
  branchName: string;
  branchDescription: string;
  images: { src: string; alt: string }[];
}

const BranchImageGallery: React.FC<BranchImageGalleryProps> = ({ branchName, branchDescription, images }) => {
  // Ensure we have exactly 5 images for the layout
  const displayImages = [...images];
  while (displayImages.length < 5) {
    displayImages.push({ src: `https://picsum.photos/seed/placeholder${displayImages.length}/800/600`, alt: 'Placeholder image' });
  }

  const mainImage = displayImages[0];
  const thumbnailImages = displayImages.slice(1, 5);

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-black/95 border-b border-gray-200 dark:border-brand-gold/10 last:border-b-0">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
            {branchName}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-slate-gray leading-relaxed">
            {branchDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden shadow-lg group cursor-pointer h-96">
                <img src={mainImage.src} alt={mainImage.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {thumbnailImages.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg group cursor-pointer h-48">
                        <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default BranchImageGallery;
