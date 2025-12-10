
import React from 'react';

const MissionVisionSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Panel */}
          <div className="border-2 border-brand-gold/30 p-8 md:p-10 rounded-2xl text-center bg-white dark:bg-black flex flex-col items-center justify-center">
            <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">Our Mission</h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-gray leading-relaxed">
              To deliver accessible, clean, and comfortable accommodation with premium hospitality across every branch in Karachi.
            </p>
          </div>
          {/* Vision Panel */}
          <div className="border-2 border-brand-gold/30 p-8 md:p-10 rounded-2xl text-center bg-white dark:bg-black flex flex-col items-center justify-center">
            <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-gray leading-relaxed">
              To become Karachi’s most trusted mid-range hospitality network by consistently maintaining excellence in quality and service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;