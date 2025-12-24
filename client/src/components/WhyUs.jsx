import { useInView } from 'react-intersection-observer';
import { Leaf, Ban, Flame, Recycle, ShieldCheck } from 'lucide-react';

const WhyUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Leaf,
      title: 'Made from Desi Cow Dung',
      description: 'Pure gobar from indigenous Indian cows, revered in Vedic tradition',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Ban,
      title: 'No Charcoal, No Chemicals',
      description: 'Completely free from harmful chemicals, charcoal, and artificial additives',
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: Flame,
      title: 'Long Burning & Natural Aroma',
      description: 'Burns steadily for 30+ minutes with authentic loban fragrance',
      color: 'from-orange-500 to-amber-600',
    },
    {
      icon: Recycle,
      title: 'Compostable & Eco-Friendly',
      description: '100% biodegradable, returns to earth naturally without pollution',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      icon: ShieldCheck,
      title: 'Safe for Daily Puja',
      description: 'Non-toxic and safe for indoor use, perfect for home temples',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      icon: Leaf,
      title: 'Handcrafted in India',
      description: 'Made by rural artisans using traditional methods, supporting local communities',
      color: 'from-purple-500 to-violet-600',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#FFF7EF] to-[#FDEADA]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-[#3A2F2F] mb-4">
            Why Choose Our Havan Cups?
          </h2>
          <p className="text-lg text-[#A3542D] max-w-2xl mx-auto">
            Experience the perfect blend of tradition, purity, and sustainability
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animation: inView ? `slide-up 0.8s ease-out ${index * 0.1}s forwards` : 'none'
                }}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#3A2F2F] mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#A3542D] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => document.getElementById('buy-now')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#E07A1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c96a1a] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Experience the Difference
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
