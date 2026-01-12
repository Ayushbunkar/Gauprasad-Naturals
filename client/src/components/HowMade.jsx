import { useInView } from 'react-intersection-observer';
import { Droplets, Flower2, Hand, Sun, CheckCircle } from 'lucide-react';
import ayurvedicImage from '../assets/ayurvedicherbs.png';
import handMoldedImage from '../assets/handmolded.png';
import sunDriedImage from '../assets/sundried.png';
import qualityCheckedImage from '../assets/qualitycheck.png';
import naturalCollectionImage from '../assets/naturalcollection.png';

const HowMade = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      icon: Droplets,
      title: 'Natural Collection',
      description: 'Pure gobar collected from healthy desi cows in rural villages',
      image:  naturalCollectionImage ,
    },
    {
      icon: Flower2,
      title: 'Ayurvedic Herbs Mixed',
      description: 'Blended with natural loban, camphor, and sacred herbs',
      image: ayurvedicImage,
    },
    {
      icon: Hand,
      title: 'Hand-Molded',
      description: 'Carefully shaped by skilled rural artisans with traditional methods',
      image: handMoldedImage,
    },
    {
      icon: Sun,
      title: 'Sun-Dried',
      description: 'Naturally dried under sunlight to preserve authenticity',
      image: sunDriedImage,
    },
    {
      icon: CheckCircle,
      title: 'Quality Checked',
      description: 'Each batch tested for quality, fragrance, and burning time',
      image: qualityCheckedImage,
    },
  ];

  return (
    <section id="how-made" className="py-20 bg-gradient-to-b from-[#FDEADA] to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-[#3A2F2F] mb-4">
            How It's Made
          </h2>
          <p className="text-lg text-[#A3542D] max-w-2xl mx-auto">
            From village to your home - a journey of purity, tradition, and care
          </p>
        </div>

        {/* Steps */}
        <div ref={ref} className="max-w-6xl mx-auto w-full">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-16 mb-16 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  animation: inView ? `fade-in 0.6s ease-in-out ${index * 0.2}s forwards` : 'none'
                }}
              >
                {/* Image */}
                <div className="w-full md:w-2/5">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white max-w-full">
                    <div className="p-2 flex items-center md:h-80 lg:h-96 w-full">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-full">
                      <Icon className="w-6 h-6 text-[#E07A1F]" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/5">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-[#E07A1F] to-[#7A1D1D] text-white font-[var(--font-heading)] text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-[#3A2F2F] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-lg text-[#A3542D] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Message */}
        <div className="bg-gradient-to-r from-[#FDEADA] to-[#FFF7EF] rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto mt-16">
          <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-[#3A2F2F] mb-4">
            Supporting Rural India, One Cup at a Time
          </h3>
          <p className="text-lg text-[#A3542D] leading-relaxed">
            Every purchase empowers rural artisan families and helps preserve traditional 
            Indian craftsmanship. We're building a sustainable future rooted in our dharmic values.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowMade;
