
import React from 'react';
import Button from './Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50 dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-gold font-bold mb-4">
            Contact Us & Book Your Stay
          </h2>
          <p className="text-gray-600 dark:text-slate-gray">
            We're here to help you plan your perfect trip. Reach out with any questions or book your room today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white dark:bg-black border border-gray-200 dark:border-brand-gold/20 p-8 rounded-sm">
            <form>
              <div className="grid sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors w-full" />
                <input type="tel" placeholder="Phone Number" className="bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors w-full" />
                <input type="date" placeholder="Arrival Date" className="bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors w-full" />
                <input type="number" placeholder="Guests" min="1" className="bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors w-full" />
              </div>
              <textarea placeholder="Your Message" rows={4} className="bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors w-full mt-6"></textarea>
              <Button type="submit" variant="gold" className="w-full mt-6">Send Inquiry</Button>
            </form>
          </div>
          
          {/* Info & Map */}
          <div>
            <div className="mb-8">
                <h3 className="text-xl font-bold font-serif text-gray-900 dark:text-brand-light mb-2">Contact Information</h3>
                <p className="mb-1 text-gray-700 dark:text-slate-gray"><a href="tel:+923120005886" className="hover:text-brand-gold">+92 312 0005886</a></p>
                <p className="text-gray-700 dark:text-slate-gray"><a href="mailto:info@theredtreeguesthouse.com" className="hover:text-brand-gold">info@theredtreeguesthouse.com</a></p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.758362483864!2d67.0493720759313!3d24.80373804675404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da44ffffff%3A0x6a6557dda36850d5!2sThe%20Red%20Tree%20House!5e0!3m2!1sen!2s!4v1676495394200!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-sm"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;