

import React from 'react';
import Button from './Button';

interface FinalCtaSectionProps {
  headline?: string;
  text?: string;
  button1Text?: string;
  button1Href?: string;
  button2Text?: string;
  button2Href?: string;
  button1OnClick?: React.MouseEventHandler;
  button2OnClick?: React.MouseEventHandler;
  button1Target?: string;
  button2Target?: string;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  headline = "Ready to Experience Comfort & Luxury?",
  text = "Your journey towards a remarkable stay begins here. Book with confidence, knowing our commitment to safety, quality, and hospitality is guaranteed. We look forward to making your visit to Karachi truly exceptional.",
  button1Text = "Book Your Stay",
  button1Href,
  button2Text = "Contact Us",
  button2Href,
  button1OnClick,
  button2OnClick,
  button1Target,
  button2Target,
}) => {
  return (
    <section id="contact-cta" className="py-16 md:py-24 bg-gray-100 dark:bg-gradient-to-br dark:from-rich-onyx dark:to-charcoal-black">
      <div className="container mx-auto px-6 max-w-[1200px] text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-6">
            {headline}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray leading-relaxed mb-12 max-w-2xl mx-auto">
            {text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as="a" href={button1Href} onClick={button1OnClick} variant="gold" className="w-full sm:w-auto" target={button1Target}>{button1Text}</Button>
            <Button as="a" href={button2Href} onClick={button2OnClick} variant="outline" className="w-full sm:w-auto" target={button2Target}>{button2Text}</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;