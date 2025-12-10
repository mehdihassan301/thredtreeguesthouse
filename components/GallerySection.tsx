
import React, { useState } from 'react';

const images = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  src: `https://picsum.photos/seed/gallery${i}/800/600`,
  alt: `Gallery image ${i + 1} of The Red Tree Guest House`,
}));

const Lightbox: React.FC<{ src: string; alt: string; onClose: () => void }> = ({ src, alt, onClose }) => (
  <div 
    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
    onClick={onClose}
  >
    <style>{`.animate-fade-in { animation: fadeIn 0.3s ease-in-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
    <button className="absolute top-4 right-4 text-white text-4xl" onClick={onClose}>&times;</button>
    <img src={src} alt={alt} className="max-w-full max-h-full object-contain" onClick={e => e.stopPropagation()} />
  </div>
);

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-gray-100 dark:bg-brand-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-gold font-bold mb-4">
            Our Gallery
          </h2>
          <p className="text-gray-600 dark:text-slate-gray">
            A glimpse into the comfort and elegance that awaits you at The Red Tree.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(image => (
            <div key={image.id} className="overflow-hidden rounded-sm cursor-pointer group" onClick={() => setSelectedImage(image.src)}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      {selectedImage && <Lightbox src={selectedImage} alt="Enlarged gallery view" onClose={() => setSelectedImage(null)} />}
    </section>
  );
};

export default GallerySection;