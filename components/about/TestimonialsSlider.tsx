
import React, { useState } from 'react';

const testimonials = [
  {
    name: 'Aisha K.',
    text: 'Impeccable service and a wonderfully clean room. It truly felt like a premium experience from start to finish.'
  },
  {
    name: 'The Baig Family',
    text: 'A fantastic, safe choice for families in Karachi. The staff was incredibly accommodating and professional.'
  },
  {
    name: 'Suleiman H.',
    text: 'The executive branch was perfect for my business trip. Quiet, comfortable, and with reliable high-speed internet.'
  },
  {
    name: 'Zainab F.',
    text: 'As a solo traveler, safety is my priority. The Red Tree provided a secure and welcoming environment.'
  },
  {
    name: 'Mr. & Mrs. Alvi',
    text: 'The Red Sea branch was a peaceful escape. Waking up near the coast was the highlight of our trip.'
  }
];

const StarRating = () => (
    <div className="flex justify-center text-brand-gold mb-4">
        {Array(5).fill(0).map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        ))}
    </div>
);

const TestimonialsSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="py-20 md:py-32 bg-brand-black">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                    <h2 className="font-sans text-4xl md:text-5xl text-brand-light font-bold">
                        Trusted by Our Guests
                    </h2>
                </div>
                <div className="relative max-w-2xl mx-auto">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.name} className="flex-shrink-0 w-full px-4">
                                    <div className="bg-black border border-brand-gold/10 p-8 rounded-2xl text-center">
                                        <StarRating />
                                        <p className="text-brand-light text-lg italic mb-6 leading-relaxed">“{testimonial.text}”</p>
                                        <footer className="font-bold text-brand-light uppercase tracking-wider text-sm">— {testimonial.name}</footer>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Left Arrow */}
                    <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-[-4rem] text-brand-gold p-2 rounded-full hover:bg-brand-gold/10 transition-colors hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    {/* Right Arrow */}
                    <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-[-4rem] text-brand-gold p-2 rounded-full hover:bg-brand-gold/10 transition-colors hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                     <div className="flex justify-center mt-8 md:hidden">
                        <button onClick={prevSlide} className="text-brand-gold p-2 rounded-full hover:bg-brand-gold/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button onClick={nextSlide} className="text-brand-gold p-2 rounded-full hover:bg-brand-gold/10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSlider;
