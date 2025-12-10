
import React from 'react';

const reviews = [
  {
    name: 'Ahmed R.',
    testimonial: 'An exceptional experience. The room was spotlessly clean, the staff incredibly professional, and the location was perfect. My go-to choice in Karachi.'
  },
  {
    name: 'The Khan Family',
    testimonial: 'Perfect for our family. The rooms were spacious, and the staff went above and beyond. It’s rare to find a place that is both luxurious and genuinely family-friendly.'
  },
  {
    name: 'Fatima S.',
    testimonial: 'As a solo traveler, I felt completely safe. The environment is secure, the staff is respectful, and the attention to hygiene is remarkable. I could finally relax.'
  },
  {
    name: 'David Chen',
    testimonial: 'The seaside ambiance was incredibly calming. The service was world-class, and the room was comfortable with all modern amenities. A truly premium and peaceful stay.'
  },
  {
    name: 'Sana & Bilal',
    testimonial: 'We booked the Premium Suite for our anniversary and it was absolutely wonderful. The atmosphere is very romantic and private, and the staff made our occasion special.'
  }
];

const StarRating: React.FC = () => (
    <div className="flex justify-center text-brand-gold mb-4">
        {Array(5).fill(0).map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
        ))}
    </div>
);

const ReviewCard: React.FC<{ review: typeof reviews[0] }> = ({ review }) => (
    <div className="bg-black border border-brand-gold/10 p-8 rounded-2xl text-center h-full flex flex-col justify-center items-center">
        <StarRating />
        <p className="text-brand-light text-base italic mb-6 leading-relaxed">“{review.testimonial}”</p>
        <footer className="font-bold text-brand-light uppercase tracking-wider text-sm">
            — {review.name}
        </footer>
    </div>
);

const GuestReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-brand-black/95">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <h2 className="font-sans text-4xl md:text-5xl text-brand-light font-bold mb-6">
                Voices of Our Valued Guests
            </h2>
            <p className="text-brand-light text-xl leading-relaxed">
               Our commitment to creating memorable experiences is reflected in the stories of our guests. Their feedback is a testament to our dedication to excellence.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(0,3).map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:w-2/3 lg:mx-auto">
          {reviews.slice(3,5).map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestReviewsSection;