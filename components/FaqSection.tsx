
import React, { useState } from 'react';

const faqData = [
  { question: 'What are the check-in and check-out times?', answer: 'Check-in is from 2:00 PM onwards, and check-out is until 12:00 PM. Late check-out may be available upon request and is subject to availability.' },
  { question: 'Is breakfast included with the stay?', answer: 'We offer rooms with and without breakfast packages. You can select your preference during the booking process. Our continental breakfast is served daily from 7:00 AM to 10:00 AM.' },
  { question: 'Is parking available at the guest house?', answer: 'Yes, we provide complimentary and secure private parking for all our guests during their stay.' },
  { question: 'Are pets allowed?', answer: 'Unfortunately, to ensure the comfort of all our guests, we do not allow pets at our guest house.' },
  { question: 'Do you offer corporate discounts?', answer: 'Yes, we offer special rates for corporate clients and long-term stays. Please contact our reservations team for more details.' },
];

const FaqItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-gray-200 dark:border-brand-gold/20">
    <button className="w-full flex justify-between items-center text-left py-6" onClick={onClick}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-brand-light">{item.question}</h3>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <p className="pb-6 pr-8 text-gray-600 dark:text-slate-gray">{item.answer}</p>
    </div>
  </div>
);

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-100 dark:bg-brand-black/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-gold font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div>
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;