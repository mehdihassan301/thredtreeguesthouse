
import React from 'react';
import Button from './Button';

interface GalleryPreviewSectionProps {
  navigateTo: (page: string) => void;
}

const images = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  src: `/images/gallery-preview-${i + 1}.jpg`,
  alt: `Gallery image ${i + 1}`,
}));

const duplicatedImages = [...images, ...images];

const GalleryPreviewSection: React.FC<GalleryPreviewSectionProps> = ({ navigateTo }) => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-white dark:bg-rich-onyx">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
            A Glimpse of Our World
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray leading-relaxed max-w-2xl mx-auto">
            Our gallery offers a preview of the serene ambiance, meticulous design, and welcoming comfort that awaits you.
          </p>
        </div>
      </div>
      <div className="w-full overflow-hidden group">
        <div className="flex animate-scroll group-hover:[animation-play-state:paused]">
          {duplicatedImages.slice(0, 10).map((image, index) => (
            <div key={index} className="flex-shrink-0 w-80 h-96 mx-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg group border border-gray-200 dark:border-brand-gold/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="card-image transform transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold transition-all duration-300 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-16">
        <Button variant="gold" onClick={() => navigateTo('gallery')}>View Full Gallery</Button>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;