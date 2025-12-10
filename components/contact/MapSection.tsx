
import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="border-4 border-brand-gold rounded-2xl overflow-hidden shadow-lg shadow-brand-gold/10">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent('House #15/1/2 Sab Avenue, Phase V Ext. DHA Karachi')}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
