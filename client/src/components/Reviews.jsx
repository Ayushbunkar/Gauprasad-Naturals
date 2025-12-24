import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reviews = [
    {
      name: 'Rajesh Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      review: 'हमारे मंदिर में अब केवल यही हवन कप इस्तेमाल होते हैं। शुद्ध सुगंध और लंबे समय तक जलते हैं। बहुत ही शानदार प्रोडक्ट!',
      role: 'Temple Priest',
    },
    {
      name: 'Priya Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      review: 'Perfect for daily puja! No chemicals, pure cow dung with natural fragrance. My family loves it. Supporting rural artisans is a bonus!',
      role: 'Homemaker',
    },
    {
      name: 'Swami Vidyananda',
      location: 'Rishikesh, Uttarakhand',
      rating: 5,
      review: 'Authentic and eco-friendly. We use these for our ashram\'s daily havan. The quality is exceptional and the aroma creates perfect meditation ambiance.',
      role: 'Yoga Teacher',
    },
    {
      name: 'Meera Iyer',
      location: 'Chennai, Tamil Nadu',
      rating: 5,
      review: 'Ordered bulk for our family wedding. Everyone appreciated the natural fragrance. Chemical-free is exactly what we need for our sacred ceremonies.',
      role: 'Event Organizer',
    },
    {
      name: 'Amit Gupta',
      location: 'Delhi NCR',
      rating: 5,
      review: 'Finally found pure gobar loban! Burns longer than expected. Great for festivals. Ordered 60-pack for Diwali and it was perfect.',
      role: 'Business Owner',
    },
    {
      name: 'Radha Krishna Mandir',
      location: 'Vrindavan, UP',
      rating: 5,
      review: 'Our temple has switched completely to GauPrasad cups. Devotees appreciate the authenticity. Highly recommended for all mandirs!',
      role: 'Temple Trust',
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#FFF7EF] to-[#FDEADA]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-[#3A2F2F] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#A3542D] max-w-2xl mx-auto mb-6">
            Join the growing family of devotees who trust GauPrasad
          </p>
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <Star className="w-5 h-5 text-[#E07A1F] fill-[#E07A1F]" />
            <span className="font-semibold text-[#3A2F2F]">4.9/5</span>
            <span className="text-[#A3542D]">• Trusted by 500+ families & temples</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animation: inView ? `fade-in 0.6s ease-out ${index * 0.1}s forwards` : 'none'
              }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#E07A1F] opacity-20 mb-4" />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-[#E07A1F] fill-[#E07A1F]"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-[#3A2F2F] leading-relaxed mb-6 italic">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="border-t border-[#FDEADA] pt-4">
                <p className="font-semibold text-[#3A2F2F] mb-1">{review.name}</p>
                <p className="text-sm text-[#A3542D]">{review.role}</p>
                <p className="text-sm text-[#A3542D]">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#A3542D] mb-6">
            Be part of this divine journey 🙏
          </p>
          <button
            onClick={() => document.getElementById('buy-now')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#E07A1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c96a1a] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Order Your Pack Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
