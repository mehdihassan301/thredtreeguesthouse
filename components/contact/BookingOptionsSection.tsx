

import React, { useState } from 'react';

// Branch data including booking links and pre-filled message details
// Updated and reordered based on user request.
const branches = [
  {
    name: 'The Red Sea Guest House Karachi',
    highlight: 'A tranquil escape near the scenic coast',
    bookingLink: 'https://www.booking.com/hotel/pk/red-sea-guest-house-karachi.html?aid=356980&label=gog235jc-10CAsotQFCG3JlZC1zZWEtZ3Vlc3QtaG91c2Uta2FyYWNoaUgzWANotQGIAQGYATO4ARnIAQzYAQPoAQH4AQGIAgGoAgG4AoPe4ckGwAIB0gIkNTkzYjIxMTUtZWMwNS00Yjc5LWFiNjctM2E2MWViZjhhNGI02AIB4AIB&sid=3301cfe8d75dc302067562249b559250&dest_id=-2764584&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1765306123&srpvid=893e8442db6903f6&type=total&ucfs=1&',
    phone: '923278044401', // Red Sea: 03278044401
  },
  {
    name: 'The Red Tree III Premium Guest House',
    highlight: 'Enhanced comfort for extended stays',
    bookingLink: 'https://www.booking.com/searchresults.en-gb.html?aid=318615&label=New_English_EN_PK_27027143185-gcX_3IAaLhci9HWi5tas8AS217289579479%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atidsa-199489123465%3Alp9075174%3Ali%3Adec%3Adm&gclid=Cj0KCQiArt_JBhCTARIsADQZaylYSXsjAxEV3UITqfFTm4j5Gxe7YN54JetVdI2FjhbiV_QRIWIfa1kaArgIEALw_wcB&highlighted_hotels=15121815&redirected=1&city=-2764584&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=3301cfe8d75dc302067562249b559250',
    phone: '923258044401', // Red tree premium: 03258044401
  },
  {
    name: 'The Red Tree Family Guest House',
    highlight: 'Ideal for family stays and central location',
    bookingLink: 'https://www.booking.com/hotel/pk/the-red-tree-guest-house.html?aid=356980&label=gog235jc-10CAsotQFCGHRoZS1yZWQtdHJlZS1ndWVzdC1ob3VzZUgzWANotQGIAQGYATO4ARnIAQzYAQPoAQH4AQGIAgGoAgG4AtHa4ckGwAIB0gIkNjUwMDQ5MjUtYzk1YS00MmNiLThlMDItM2EwMjRlZDQyNTc22AIB4AIB&sid=3301cfe8d75dc302067562249b559250&dest_id=-2764584&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1765305689&srpvid=38a483693a5b0283&type=total&ucfs=1&',
    phone: '923288044401', // Red tree (main): 03288044401
  },
  {
    name: 'The Red Tree II Executive Guest House',
    highlight: 'For the discerning business traveler',
    bookingLink: 'https://www.booking.com/hotel/pk/the-red-tree-ii-executive-guest-house.html?aid=356980&label=gog235jc-10CAsotQFCGHRoZS1yZWQtdHJlZS1ndWVzdC1ob3VzZUgzWANotQGIAQGYATO4ARnIAQzYAQPoAQH4AQGIAgGoAgG4AtKn4ckGwAIB0gIkZjQ3ZDdkZjEtMTE0Yy00ZjhiLWE0YWEtYTRkNGVmNGQ4N2Iz2AIB4AIB&sid=3301cfe8d75dc302067562249b559250&dest_id=-2764584&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1765305538&srpvid=72b4831aaef704b2&type=total&ucfs=1&',
    phone: '923258044401', // Red tree executive: 03258044401
  },
  {
    name: 'Furnished Apartments',
    highlight: 'For extended stays and families',
    bookingLink: '',
    phone: '923278044401', // Apartment: 03278044401
  }
];

// Helper functions to generate dynamic links
const generateWhatsAppLink = (branchName: string, phone: string) => {
  const message = `Hello! I want to book a room at ${branchName}. Please share availability and rates.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

const generateEmailLink = (branchName: string) => {
  const subject = `Room Booking Inquiry for ${branchName}`;
  const body = `Hello, I would like to know about room availability and prices for the ${branchName} branch.`;
  return `mailto:theredtreeguesthouse@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// Reusable Button Component for Booking Methods
const BookingMethodButton: React.FC<{href: string; icon: string; text: string; className: string;}> = ({ href, icon, text, className }) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
        className={`flex-1 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 font-semibold tracking-wider uppercase rounded-lg text-sm md:text-base transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-brand-black hover:-translate-y-1 ${className}`}>
        <i className={`${icon} mr-3`}></i>
        <span>{text}</span>
    </a>
);


// Accordion Item Component
const BookingAccordionItem: React.FC<{
  branch: typeof branches[0];
  isOpen: boolean;
  onClick: () => void;
}> = ({ branch, isOpen, onClick }) => {
  return (
    <div className="bg-white/50 dark:bg-black/40 backdrop-blur-lg border border-gray-200 dark:border-brand-gold/20 rounded-2xl shadow-lg transition-all duration-300 ease-out overflow-hidden hover-sheen">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-6"
        aria-expanded={isOpen}
      >
        <div>
          <h3 className="font-semibold text-xl md:text-2xl text-gray-900 dark:text-white">{branch.name}</h3>
          <p className="text-gray-600 dark:text-slate-gray mt-1">{branch.highlight}</p>
        </div>
        <i className={`fas fa-chevron-down text-brand-gold text-xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="p-6 border-t border-gray-200 dark:border-brand-gold/20 flex flex-col sm:flex-row items-center justify-center gap-4">
            {branch.bookingLink && (
              <BookingMethodButton 
                  href={branch.bookingLink} 
                  icon="fas fa-calendar-check" 
                  text="Booking.com" 
                  className="bg-brand-gold text-brand-black hover:shadow-xl hover:shadow-brand-gold/20 hover:brightness-110 focus:ring-brand-gold"
              />
            )}
            <BookingMethodButton 
                href={generateWhatsAppLink(branch.name, branch.phone)} 
                icon="fab fa-whatsapp" 
                text="WhatsApp" 
                className="bg-green-500 text-white hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 focus:ring-green-500"
            />
            <BookingMethodButton 
                href={generateEmailLink(branch.name)} 
                icon="fas fa-envelope" 
                text="Email" 
                className="bg-sky-600 text-white hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-600/30 focus:ring-sky-600"
            />
        </div>
      </div>
    </div>
  );
};


const BookingOptionsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default first item open

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="booking-options" className="py-16 md:py-24 bg-white dark:bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
            Choose Your Booking Method
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray leading-relaxed max-w-2xl mx-auto">
            Select your preferred branch and booking option below. We look forward to welcoming you.
          </p>
        </div>
        <div className="space-y-6">
          {branches.map((branch, index) => (
            <BookingAccordionItem
              key={index}
              branch={branch}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingOptionsSection;