


import React, { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Ahmed R.',
    location: 'Islamabad, Pakistan',
    testimonial: 'An exceptional experience. The room was spotlessly clean, the staff incredibly professional, and the location was perfect. My go-to choice in Karachi.',
    rating: 5,
    avatar: '/images/avatar-1.jpg'
  },
  {
    name: 'The Khan Family',
    location: 'Peshawar, Pakistan',
    testimonial: 'Perfect for our family. The rooms were spacious, and the staff went above and beyond. It’s rare to find a place that is both luxurious and genuinely family-friendly.',
    rating: 5,
    avatar: '/images/avatar-2.jpg'
  },
  {
    name: 'Fatima S.',
    location: 'Karachi, Pakistan',
    testimonial: 'As a solo traveler, I felt completely safe. The environment is secure, the staff is respectful, and the attention to hygiene is remarkable. I could finally relax.',
    rating: 4,
    avatar: '/images/avatar-3.jpg'
  },
  {
    name: 'David Chen',
    location: 'Quetta, Pakistan',
    testimonial: 'The seaside ambiance was incredibly calming. The service was world-class, and the room was comfortable with all modern amenities. A truly premium and peaceful stay.',
    rating: 5,
    avatar: '/images/avatar-4.jpg'
  },
  {
    name: 'Sana & Bilal',
    location: 'Lahore, Pakistan',
    testimonial: 'We booked the Premium Suite for our anniversary and it was absolutely wonderful. The atmosphere is very romantic and private, and the staff made our occasion special.',
    rating: 5,
    avatar: '/images/avatar-5.jpg'
  }
];

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
    <i className={`fas fa-star text-lg ${filled ? 'text-brand-gold' : 'text-gray-400 dark:text-brand-grey/50'}`}></i>
);

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex justify-center gap-1 mb-4">
        {Array(5).fill(0).map((_, i) => (
            <StarIcon key={i} filled={i < rating} />
        ))}
    </div>
);

const GuestReviewsCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === reviews.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 5000);
        return () => clearInterval(slideInterval);
    }, [currentIndex]);


    return (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-charcoal-black">
            <div className="container mx-auto px-6 max-w-[1200px]">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="font-semibold text-xl md:text-3xl lg:text-4xl tracking-tight text-gray-900 dark:text-white mb-4">
                        Voices of Our Valued Guests
                    </h2>
                     <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray leading-relaxed max-w-2xl mx-auto">
                       Our commitment to creating memorable experiences is reflected in the stories of our guests.
                    </p>
                </div>
                <div className="relative max-w-3xl mx-auto">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform ease-out duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {reviews.map((review, index) => (
                                <div key={index} className="flex-shrink-0 w-full px-4">
                                    <div className="bg-white dark:bg-rich-onyx/40 backdrop-blur-md border border-brand-gold/20 p-6 md:p-8 rounded-2xl text-center shadow-lg hover:shadow-glow flex flex-col items-center justify-center hover-sheen">
                                        <div className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-gold/50 bg-brand-gold/10 flex items-center justify-center">
                                            <span className="text-4xl font-serif text-brand-gold">{review.name.charAt(0)}</span>
                                        </div>
                                        <h3 className="font-semibold text-xl md:text-2xl text-gray-900 dark:text-white">{review.name}</h3>
                                        <p className="text-lg text-gray-500 dark:text-slate-gray mb-4">{review.location}</p>
                                        <StarRating rating={review.rating} />
                                        <p className="text-lg md:text-xl text-gray-700 dark:text-slate-gray italic leading-relaxed">“{review.testimonial}”</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Left Arrow */}
                    <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-[-3rem] text-brand-gold p-2 rounded-full hover:bg-gray-200 dark:hover:bg-brand-gold/10 transition-colors hidden md:block" aria-label="Previous review">
                        <i className="fas fa-chevron-left text-2xl"></i>
                    </button>
                    {/* Right Arrow */}
                    <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-[-3rem] text-brand-gold p-2 rounded-full hover:bg-gray-200 dark:hover:bg-brand-gold/10 transition-colors hidden md:block" aria-label="Next review">
                        <i className="fas fa-chevron-right text-2xl"></i>
                    </button>
                </div>
                <div className="flex justify-center mt-8 space-x-2">
                    {reviews.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-brand-gold scale-125' : 'bg-gray-300 dark:bg-brand-grey/50'}`}
                            aria-label={`Go to review ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GuestReviewsCarousel;