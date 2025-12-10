
import React from 'react';

const reviews = [
  {
    rating: '7.6/10',
    comment: 'Comfortable room with AC and fast WiFi. The sea-view location is a definite plus. Great value for money.',
    author: 'Aisha K.',
  },
  {
    rating: '8.0/10',
    comment: 'Very clean facilities and extremely helpful staff. Felt very safe as a solo female traveler. Will visit again.',
    author: 'Fatima Z.',
  },
  {
    rating: '7.8/10',
    comment: 'The location is perfect for families. Private beach access was amazing. Staff was friendly and accommodating.',
    author: 'The Ahmed Family',
  },
];

const ReviewCard: React.FC<{ review: typeof reviews[0] }> = ({ review }) => (
    <div className="bg-white dark:bg-black border border-gray-200 dark:border-brand-gold/20 p-8 rounded-sm text-center h-full flex flex-col justify-between">
        <div>
            <div className="font-bold text-3xl text-brand-gold mb-4">{review.rating}</div>
            <p className="text-gray-600 dark:text-slate-gray italic">“{review.comment}”</p>
        </div>
        <footer className="mt-6 text-gray-900 dark:text-brand-light font-semibold uppercase tracking-wider text-sm">
            — {review.author}
        </footer>
    </div>
);

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 md:py-32 bg-gray-50 dark:bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-gold font-bold mb-4">
                What Our Guests Say
            </h2>
            <p className="text-gray-600 dark:text-slate-gray">
                Real stories from our valued guests, reflecting their experience at The Red Tree.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;