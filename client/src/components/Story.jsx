import { useInView } from 'react-intersection-observer';
import { Heart, Leaf, Users, Sparkles } from 'lucide-react';

const Story = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: Users,
      title: 'Supporting Rural Artisans',
      description: 'Every cup you buy empowers rural families and preserves traditional craftsmanship passed through generations.',
    },
    {
      icon: Leaf,
      title: 'Reducing Chemical Pollution',
      description: 'Say no to toxic incense. Our natural cups eliminate harmful emissions and protect your family\'s health.',
    },
    {
      icon: Sparkles,
      title: 'Reviving Indian Traditions',
      description: 'Bringing back ancient Vedic wisdom and authentic rituals to modern Indian homes and temples.',
    },
    {
      icon: Heart,
      title: 'Sustainable & Dharmic',
      description: 'Aligned with nature, rooted in dharma. A choice that honors both Mother Earth and spiritual values.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#FFF7EF]">
      <div className="container mx-auto px-4">
        {/* Main Story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-[#3A2F2F] mb-6">
              Our Eco & Bharat Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E07A1F] to-[#7A1D1D] mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <p className="text-lg md:text-xl text-[#3A2F2F] leading-relaxed mb-6">
              In the heart of rural India, where tradition meets sustainability, 
              <span className="font-semibold text-[#E07A1F]"> GauPrasad </span> 
              was born from a simple yet powerful vision: to bring back the purity of 
              <span className="font-semibold"> शुद्ध गोबर </span> 
              to every home and temple.
            </p>
            <p className="text-lg md:text-xl text-[#3A2F2F] leading-relaxed mb-6">
              We witnessed how chemical-laden incense was replacing our sacred traditions. 
              Families unknowingly inhaling toxic fumes during their most spiritual moments. 
              Rural artisans losing their livelihood as mass-produced products flooded the market.
            </p>
            <p className="text-lg md:text-xl text-[#3A2F2F] leading-relaxed mb-6">
              That's when we decided to make a change. 
              <span className="font-semibold text-[#7A1D1D]"> Not just for profit, but for people, planet, and purity.</span>
            </p>
            <p className="text-lg md:text-xl text-[#3A2F2F] leading-relaxed">
              Today, every GauPrasad cup carries the blessings of our artisans, 
              the purity of desi cow dung, and the promise of a cleaner, 
              more authentic spiritual journey for your family. 🙏
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br from-[#FDEADA] to-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animation: inView ? `fade-in 0.6s ease-out ${index * 0.15}s forwards` : 'none'
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[#E07A1F] to-[#7A1D1D] p-4 rounded-2xl flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#3A2F2F] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[#A3542D] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-[#E07A1F] to-[#7A1D1D] rounded-3xl p-12 shadow-2xl">
            <h3 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-white mb-6">
              Join the Movement
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Be part of India's spiritual renaissance. Choose purity. Choose tradition. Choose GauPrasad.
            </p>
            <button
              onClick={() => document.getElementById('buy-now')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#E07A1F] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#FFF7EF] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Order Now & Make a Difference
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
