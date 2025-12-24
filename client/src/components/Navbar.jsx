import { useState, useEffect } from 'react';
import { Flame } from 'lucide-react';
import gauprasadLogo from '../assets/gauprasad.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'How It\'s Made', id: 'how-made' },
    { label: 'Uses', id: 'uses' },
    { label: 'Reviews', id: 'reviews' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <img src={gauprasadLogo} alt="GauPrasad Naturals" className="w-12 h-12" />
          <div className="flex flex-col leading-tight">
            <span className="font-[var(--font-heading)] text-2xl font-bold text-[#5C4033]">
              GauPrasad
            </span>
            <span className="text-xs text-[#8B5A3C] tracking-wider">NATURALS</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[#5C4033] hover:text-[#D97A3A] transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('buy-now')}
            className="bg-[#D97A3A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c46a30] transition-all duration-300 shadow-lg hover:shadow-xl text-sm"
          >
            Buy Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#3A2F2F]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 py-4" style={{ animation: 'fade-in 0.6s ease-in-out' }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-6 py-3 text-[#5C4033] hover:bg-[#EDE4D8] hover:text-[#D97A3A] transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('buy-now')}
            className="mx-6 mt-3 bg-[#D97A3A] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c46a30] transition-all duration-300 shadow-lg hover:shadow-xl w-[calc(100%-3rem)] text-center"
          >
            Buy Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
