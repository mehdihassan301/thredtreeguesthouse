

import React, { useState, useEffect } from 'react';

interface Image {
  src: string;
  alt: string;
}

interface LightboxProps {
  image: Image;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ image, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <style>{`.animate-fade-in { animation: fadeIn 0.3s ease-out; } @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
      <button className="absolute top-4 right-4 text-white text-4xl hover:text-brand-gold transition-colors" onClick={onClose}>&times;</button>
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); onPrev(); }}>&#8249;</button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl p-2 rounded-full hover:bg-white/10 transition-colors" onClick={(e) => { e.stopPropagation(); onNext(); }}>&#8250;</button>
      <div className="relative" onClick={e => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl" />
        <p className="text-center text-white mt-4 font-semibold text-lg md:text-xl tracking-wide">{image.alt}</p>
      </div>
    </div>
  );
};


interface BranchGalleryGridProps {
  branchName: string;
  description: string;
  images: Image[];
}

const BranchGalleryGrid: React.FC<BranchGalleryGridProps> = ({ branchName, description, images }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    // A simple way to trigger animation on component mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex(prev => (prev === null || prev === images.length - 1) ? 0 : prev + 1);
  const prevImage = () => setLightboxIndex(prev => (prev === null || prev === 0) ? images.length - 1 : prev - 1);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95 border-b border-gray-100 dark:border-brand-gold/5 last:border-b-0">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
            {branchName} — Gallery
          </h2>
          <h3 className="text-lg md:text-xl text-gray-600 dark:text-slate-gray leading-relaxed">
            {description}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-lg transform transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-2xl hover:ring-2 hover:ring-brand-gold/50 dark:hover:shadow-lg dark:hover:shadow-brand-gold/20 hover-sheen ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.alt} className="card-image" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          image={images[lightboxIndex]}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  );
};

export default BranchGalleryGrid;