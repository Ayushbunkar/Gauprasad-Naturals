import { useInView } from 'react-intersection-observer';
import { ShoppingBag, Phone, Package, CreditCard, Check } from 'lucide-react';
import pachagingbox from '../assets/pachagingbox.png';
import modak from '../assets/modakshape.png';
import circulartikki from '../assets/circulartikki.png';

const BuyNow = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      name: 'Sambrani Cup Pack',
      quantity: '20 Cups',
      price: '₹280',
      originalPrice: '₹400',
      savings: 'Save ₹120',
      benefits: [
        'Perfect for daily puja',
        'Natural herbs & loban',
        'Burns 30+ minutes',
        'Free delivery',
      ],
      popular: false,
      image: pachagingbox,
      description: 'Desi Cow Dung Natural Herbs Sambrani Havan Cup',
    },
    {
      name: 'Guggal Modak Pack',
      quantity: '15 Pieces',
      price: '₹450',
      originalPrice: '₹650',
      savings: 'Save ₹200',
      benefits: [
        'Premium guggal fragrance',
        'Best for meditation',
        'Long lasting aroma',
        'Free delivery',
        'Most popular',
      ],
      popular: true,
      image: modak,
      description: 'Cow Dung Guggal Sambrani Dhoop Cup',
    },
    {
      name: 'Rose Gulab Pack',
      quantity: '15 Pieces',
      price: '₹475',
      originalPrice: '₹700',
      savings: 'Save ₹225',
      benefits: [
        'Soothing rose fragrance',
        'Perfect for home temple',
        'Premium quality',
        'Free delivery',
      ],
      popular: false,
      image: circulartikki,
      description: 'Cow Dung Rose Gulab Sambrani Dhoop Cup',
    },
    {
      name: 'Loban Frankincense',
      quantity: '20 Cups',
      price: '₹320',
      originalPrice: '₹480',
      savings: 'Save ₹160',
      benefits: [
        'Pure loban fragrance',
        'Ideal for havan',
        'Natural ingredients',
        'Free delivery',
      ],
      popular: false,
      image: '/images/loban-frankincense-20.jpg',
      description: 'Cow Dung Loban Frankincense Sambrani Cup',
    },
    {
      name: 'Cinnamon Havan Pack',
      quantity: '13 Pieces + Dhoop',
      price: '₹495',
      originalPrice: '₹750',
      savings: 'Save ₹255',
      benefits: [
        'Warm cinnamon aroma',
        'Includes dhoop sticks',
        'Festival special',
        'Free delivery',
      ],
      popular: false,
      image: '/images/cinnamon-havan-13.jpg',
      description: 'Cow Dung Cinnamon Sambrani Havan Cup with Dhoop',
    },
    {
      name: 'Bulk Temple Pack',
      quantity: '100 Pieces',
      price: '₹899',
      originalPrice: '₹1499',
      savings: 'Save ₹600',
      benefits: [
        'Best for temples',
        'Bulk discount',
        'Mixed varieties available',
        'Free delivery',
        'Priority support',
      ],
      popular: false,
      image: '/images/bulk-temple-100.jpg',
      description: 'Bulk Pack - Multiple Variants Available',
    },
  ];

  const handleWhatsAppOrder = (product) => {
    const message = `Hi! I want to order ${product.name} - ${product.quantity} for ${product.price}`;
    window.open(`https://wa.me/917987889449?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleAmazonOrder = () => {
    window.open('https://www.amazon.in', '_blank');
  };

  return (
    <section id="buy-now" className="py-20 bg-gradient-to-b from-[#FDEADA] to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-bold text-[#3A2F2F] mb-4">
            Choose Your Pack
          </h2>
          <p className="text-lg text-[#A3542D] max-w-2xl mx-auto">
            Select the perfect pack for your spiritual needs
          </p>
        </div>

        {/* Product Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16"
        >
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                product.popular ? 'ring-4 ring-[#E07A1F]' : ''
              } ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animation: inView ? `fade-in 0.6s ease-out ${index * 0.15}s forwards` : 'none'
              }}
            >
              {/* Popular Badge */}
              {product.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E07A1F] to-[#7A1D1D] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular 🔥
                </div>
              )}

              {/* Product Image */}
              <div className="mb-4 rounded-2xl overflow-hidden bg-[#FDEADA] h-56 md:h-64 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `data:image/svg+xml,%3Csvg width="400" height="300" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="400" height="300" fill="%23FDEADA"/%3E%3Ccircle cx="200" cy="120" r="60" fill="%23A3542D" opacity="0.3"/%3E%3Ccircle cx="200" cy="180" r="40" fill="%237A1D1D" opacity="0.4"/%3E%3Ctext x="200" y="250" text-anchor="middle" fill="%233A2F2F" font-size="16" font-family="Arial">Havan Cup ${product.quantity}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>

              {/* Product Name */}
              <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#3A2F2F] text-center mb-1">
                {product.name}
              </h3>
              <p className="text-[#A3542D] text-center mb-2 text-sm">{product.description}</p>
              <p className="text-[#E07A1F] text-center mb-4 font-semibold">{product.quantity}</p>

              {/* Pricing */}
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-3 mb-2">
                  <span className="text-3xl font-bold text-[#E07A1F]">{product.price}</span>
                  <span className="text-lg text-[#A3542D] line-through">{product.originalPrice}</span>
                </div>
                <span className="inline-block bg-[#FDEADA] text-[#7A1D1D] px-4 py-1 rounded-full text-sm font-semibold">
                  {product.savings}
                </span>
              </div>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-[#E07A1F] flex-shrink-0" />
                    <span className="text-[#3A2F2F] text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Order Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsAppOrder(product)}
                  className="w-full bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#20bd5a] transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>WhatsApp Order</span>
                </button>
                <button
                  onClick={handleAmazonOrder}
                  className="w-full bg-white text-[#E07A1F] border-2 border-[#E07A1F] px-6 py-3 rounded-full font-semibold hover:bg-[#E07A1F] hover:text-white transition-all duration-300"
                >
                  Buy on Amazon
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Options */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <h3 className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold text-[#3A2F2F] text-center mb-8">
            Multiple Payment Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#E07A1F] to-[#7A1D1D] p-4 rounded-2xl mb-4">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#3A2F2F] mb-2">UPI / Cards</h4>
              <p className="text-sm text-[#A3542D]">Pay securely online</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#E07A1F] to-[#7A1D1D] p-4 rounded-2xl mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#3A2F2F] mb-2">Cash on Delivery</h4>
              <p className="text-sm text-[#A3542D]">Pay when you receive</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-gradient-to-br from-[#E07A1F] to-[#7A1D1D] p-4 rounded-2xl mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-[#3A2F2F] mb-2">WhatsApp</h4>
              <p className="text-sm text-[#A3542D]">Order via chat</p>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-[#A3542D] mb-4">🔒 Secure Payment • 🚚 Free Delivery • 🔄 Easy Returns</p>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
