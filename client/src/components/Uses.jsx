import { useInView } from 'react-intersection-observer';
import { Flame, Heart, Sparkles, CalendarDays, Church } from 'lucide-react';

const Uses = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const uses = [
    {
      icon: Flame,
      title: 'Daily Puja',
      description: 'Perfect for morning and evening rituals at your home temple',
      gradient: 'from-[#E07A1F] to-[#ff8c42]',
    },
    {
      icon: Heart,
      title: 'Havan & Yagya',
      description: 'Ideal for traditional fire ceremonies and sacred rituals',
      gradient: 'from-[#7A1D1D] to-[#a82828]',
    },
    {
      icon: Sparkles,
      title: 'Meditation & Yoga',
      description: 'Creates a serene atmosphere for spiritual practices',
      gradient: 'from-[#A3542D] to-[#c66838]',
    },
    {
      icon: CalendarDays,
      title: 'Festivals',
      description: 'Celebrate Diwali, Navratri, and all auspicious occasions',
      gradient: 'from-[#E07A1F] to-[#7A1D1D]',
    },
    {
      icon: Church,
      title: 'Temples & Weddings',
      description: 'Bulk orders available for mandirs and special ceremonies',
      gradient: 'from-[#7A1D1D] to-[#A3542D]',
    },
    {
      icon: Heart,
      title: 'Home Blessing',
      description: 'Purify your living space and create positive energy',
      gradient: 'from-[#A3542D] to-[#E07A1F]',
    },
  ];

  return (
    <section id="uses" className="py-20 bg-gradient-to-b from-white to-[#FFF7EF]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-[#3A2F2F] mb-4">
            Where Can You Use It?
          </h2>
          <p className="text-lg text-[#A3542D] max-w-2xl mx-auto">
            From daily prayers to grand celebrations - perfect for every sacred moment
          </p>
        </div>

        {/* Uses Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {uses.map((use, index) => {
            const Icon = use.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animation: inView ? `fade-in 0.6s ease-out ${index * 0.1}s forwards` : 'none'
                }}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${use.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-br ${use.gradient} mb-6`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="relative font-[var(--font-heading)] text-2xl font-bold text-[#3A2F2F] mb-3">
                  {use.title}
                </h3>

                {/* Description */}
                <p className="relative text-[#A3542D] leading-relaxed">
                  {use.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#A3542D] mb-6">
            Join thousands who have made the switch to pure, natural worship
          </p>
          <button
            onClick={() => document.getElementById('buy-now')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#E07A1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c96a1a] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Uses;
