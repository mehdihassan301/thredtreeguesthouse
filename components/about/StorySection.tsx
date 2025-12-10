import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <img 
              src="/images/about-story.jpg" 
              alt="Founding vision of The Red Tree Guest House"
              className="rounded-2xl shadow-lg w-full h-auto border border-gray-200 dark:border-brand-gold/20"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
              Our Story
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-gray leading-relaxed">
              Born from a vision to redefine hospitality in Karachi, The Red Tree started as a single guest house committed to unparalleled comfort and cleanliness. Our dedication to providing a safe, welcoming space for all travelers fueled our expansion, leading to a network of four unique branches, each upholding our core promise of service excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;