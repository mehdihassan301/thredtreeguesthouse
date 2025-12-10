
import React from 'react';
import Button from '../Button';

const ContactFormSection: React.FC = () => {
  return (
    <section id="contact-form" className="py-16 md:py-24 bg-gray-50 dark:bg-brand-black">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray leading-relaxed max-w-2xl mx-auto">
            Fill out the form below and our team will get back to you shortly.
          </p>
        </div>

        <div className="bg-white dark:bg-brand-dark-gray border border-gray-200 dark:border-brand-gold/20 p-8 md:p-12 rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-brand-gold/5 transform transition-all duration-500 hover:shadow-2xl dark:hover:shadow-brand-gold/10">
          <form>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-slate-gray text-lg font-bold mb-2">Full Name</label>
                <input type="text" id="name" name="name" className="w-full bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-slate-gray text-lg font-bold mb-2">Email Address</label>
                <input type="email" id="email" name="email" className="w-full bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors" required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 dark:text-slate-gray text-lg font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" className="w-full bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors" />
              </div>
               <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-slate-gray text-lg font-bold mb-2">Subject</label>
                <input type="text" id="subject" name="subject" className="w-full bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors" required />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-700 dark:text-slate-gray text-lg font-bold mb-2">Message</label>
              <textarea id="message" name="message" rows={5} className="w-full bg-gray-100 dark:bg-brand-black border-b-2 border-gray-300 dark:border-brand-grey focus:border-brand-gold text-gray-900 dark:text-brand-light p-3 outline-none transition-colors" required></textarea>
            </div>
            <div className="text-center mt-8">
              <Button type="submit" variant="gold" className="w-full md:w-auto">Send Inquiry</Button>
              <p className="text-gray-600 dark:text-slate-gray text-lg mt-4">We’ll respond within 24 hours.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
