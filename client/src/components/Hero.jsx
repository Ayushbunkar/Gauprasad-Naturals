import { Sparkles, Leaf, Heart, Phone } from 'lucide-react';

const Hero = () => {
  const handleWhatsAppOrder = () => {
    window.open('https://wa.me/917987889449?text=Hi, I would like to order Gobar Loban Havan Cups', '_blank');
  };

  const scrollToBuy = () => {
    document.getElementById('buy-now')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFF7EF]/50 to-[#FFF7EF] z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="1920" height="1080" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3CradialGradient id="grad" cx="50%25" cy="50%25"%3E%3Cstop offset="0%25" style="stop-color:%23E07A1F;stop-opacity:0.2" /%3E%3Cstop offset="100%25" style="stop-color:%237A1D1D;stop-opacity:0.3" /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width="1920" height="1080" fill="url(%23grad)" /%3E%3Ccircle cx="960" cy="540" r="300" fill="%23FFF7EF" opacity="0.3" /%3E%3Ccircle cx="960" cy="540" r="200" fill="%23E07A1F" opacity="0.2" /%3E%3Ccircle cx="960" cy="540" r="100" fill="%23FDEADA" opacity="0.4" /%3E%3C/svg%3E')`
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10" style={{ animation: 'float 3s ease-in-out infinite' }}>
        <Sparkles className="w-8 h-8 text-[#E07A1F] opacity-40" />
      </div>
      <div className="absolute top-40 right-20" style={{ animation: 'float 3s ease-in-out infinite 1s' }}>
        <Leaf className="w-10 h-10 text-[#A3542D] opacity-40" />
      </div>
      <div className="absolute bottom-32 left-20" style={{ animation: 'float 3s ease-in-out infinite 2s' }}>
        <Heart className="w-8 h-8 text-[#7A1D1D] opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center" style={{ animation: 'fade-in 0.6s ease-in-out' }}>
        {/* Small Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg mb-8">
          <Sparkles className="w-4 h-4 text-[#E07A1F]" />
          <span className="text-sm font-semibold text-[#3A2F2F]">Handcrafted with Devotion</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-bold text-[#3A2F2F] mb-6 leading-tight">
          शुद्ध गोबर से<br />
          <span className="bg-gradient-to-r from-[#E07A1F] to-[#7A1D1D] bg-clip-text text-transparent">शुद्ध पूजा</span>
        </h1>

        {/* Subheadline */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 text-sm md:text-lg text-[#A3542D] font-medium mb-10">
          <span className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-[#E07A1F]" />
            <span>100% Natural</span>
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-[#E07A1F]" />
            <span>Chemical-Free</span>
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-[#E07A1F]" />
            <span>Eco-Friendly</span>
          </span>
          <span className="hidden md:inline">•</span>
          <span>Handcrafted in India</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#3A2F2F]/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the divine fragrance of traditional havan with our pure Gobar Loban cups. 
          Made from desi cow dung and natural herbs, bringing spirituality and sustainability together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button onClick={scrollToBuy} className="bg-[#E07A1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c96a1a] transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Order Now
          </button>
          <button onClick={handleWhatsAppOrder} className="bg-white text-[#E07A1F] border-2 border-[#E07A1F] px-8 py-4 rounded-full font-semibold hover:bg-[#E07A1F] hover:text-white transition-all duration-300 w-full sm:w-auto flex items-center justify-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>WhatsApp Order</span>
          </button>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-sm text-[#3A2F2F]/60">
          <p>Trusted by 500+ families & temples across India 🙏</p>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#FFF7EF"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
