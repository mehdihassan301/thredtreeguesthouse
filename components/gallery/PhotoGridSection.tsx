import React, { useState, useEffect } from 'react';

const images = [
  { src: '/images/gallery-preview-1.jpg', caption: 'Lobby & Reception' },
  { src: '/images/gallery-preview-2.jpg', caption: 'Standard Room' },
  { src: '/images/gallery-preview-3.jpg', caption: 'Deluxe Room' },
  { src: '/images/gallery-preview-4.jpg', caption: 'Executive Room' },
  { src: '/images/gallery-preview-5.jpg', caption: 'Premium Family Suite' },
  { src: '/images/gallery-preview-6.jpg', caption: 'Dining & Lounge Area' },
  { src: '/images/gallery-preview-7.jpg', caption: 'Outdoor Views / Seaview' },
  { src: '/images/gallery-preview-8.jpg', caption: 'Facilities Highlights' },
  { src: '/images/gallery-preview-9.jpg', caption: 'The Red Tree (Main)' },
  { src: '/images/gallery-preview-10.jpg', caption: 'Red Tree II Executive' },
  { src: '/images/gallery-preview-11.jpg', caption: 'Red Tree III Premium' },
  { src: '/images/gallery-preview-12.jpg', caption: 'Red Sea Guest House' },
];

interface LightboxProps {
  image: { src: string; caption: string };
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
        <img src={image.src} alt={image.caption} className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl" />
        <p className="text-center text-white mt-4 font-semibold text-lg md:text-xl tracking-wide">{image.caption}</p>
      </div>
    </div>
  );
};

const PhotoGridSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex(prev => (prev === null || prev === images.length - 1) ? 0 : prev + 1);
  const prevImage = () => setLightboxIndex(prev => (prev === null || prev === 0) ? images.length - 1 : prev - 1);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative rounded-lg overflow-hidden cursor-pointer shadow-lg transform transition-all duration-500 ease-out hover:shadow-xl dark:hover:shadow-lg dark:hover:shadow-brand-gold/20 border border-gray-200 dark:border-brand-gold/10 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onClick={() => openLightbox(index)}
            >
              <img src={image.src} alt={image.caption} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-gold transition-all duration-300 rounded-lg"></div>
              <p className="absolute bottom-4 left-4 text-white font-bold text-lg tracking-wide transition-opacity duration-300 opacity-0 group-hover:opacity-100">{image.caption}</p>
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

export default PhotoGridSection;