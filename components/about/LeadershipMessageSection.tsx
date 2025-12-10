
import React from 'react';

const LeadershipMessageSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-brand-gold/20 p-8 md:p-12 rounded-2xl text-center flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full bg-brand-gold/10 border-2 border-brand-gold/30 flex items-center justify-center">
              {/* Placeholder for profile image */}
              <span className="text-brand-gold text-5xl font-serif">M</span>
            </div>
          </div>
          <div className="md:text-left">
            <h3 className="font-semibold text-2xl md:text-3xl text-gray-900 dark:text-white mb-4">A Message From Our Leadership</h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-slate-gray italic leading-relaxed">
              “Your trust is our most valued asset. We are relentlessly committed to enhancing your experience by focusing on genuine service, uncompromising safety, and continuous improvement. We welcome you to experience the dedicated hospitality that defines The Red Tree.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipMessageSection;