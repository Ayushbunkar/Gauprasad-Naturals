import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingCart, 
  Share2, 
  Star, 
  Check, 
  Truck, 
  Shield, 
  RotateCcw, 
  Phone, 
  Minus, 
  Plus,
  ChevronLeft,
  ChevronRight,
  Package,
  Leaf,
  Award,
  Clock,
  MapPin,
  CreditCard
} from 'lucide-react';
import pachagingbox from '../assets/pachagingbox.png';
import cup2 from '../assets/cup2.png';
import cuboid2 from '../assets/cuboid2.png';
import modak from '../assets/modakshape.png';
import modak2 from '../assets/modak2.png';
import modak3 from '../assets/modak3.png';
import circulartikki from '../assets/circulartikki.png';
import tikki2 from '../assets/tikki2.png';
import tikki3 from '../assets/tikki3.jpeg';
import ghee from '../assets/ghee.png';
import ghee2 from '../assets/ghee2.jpeg';
import ghee3 from '../assets/ghee3.jpeg';
import gaumutra from '../assets/gaumutra.jpeg';
import gaumutra2 from '../assets/gaumutra2.png';
import gaumutra3 from '../assets/gaumutra3.png';
import incenseImg from '../assets/insanestics.png';
import stick2 from '../assets/stick2.png';
import stick3 from '../assets/stick3.png';
import gauprasadLogo from '../assets/gauprasad.jpeg';

const ProductPage = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [pincode, setPincode] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState(null);

  const products = {
    'sambrani-cup-pack': {
      id: 'sambrani-cup-pack',
      name: 'Sambrani Cup Pack',
      quantity: '20 Cups',
      price: 249,
      originalPrice: 400,
      savings: 151,
      rating: 4.8,
      reviews: 2847,
      sold: 12500,
      benefits: [
        'Perfect for daily puja',
        'Natural herbs & loban',
        'Burns 30+ minutes',
        '100% organic ingredients',
        'Pleasant natural fragrance',
      ],
      images: [pachagingbox, cup2, cuboid2],
      description: 'Desi Cow Dung Natural Herbs Sambrani Havan Cup',
      longDescription: `Experience the divine essence of traditional Indian puja with our handcrafted Sambrani Cup Pack. Made from 100% pure desi cow dung sourced from indigenous Gir cows, combined with natural herbs and premium loban.

Each cup is carefully crafted by skilled artisans from rural India, ensuring that every piece carries the purity and devotion of generations of spiritual practice.

Perfect for daily puja, havan ceremonies, meditation sessions, and creating a peaceful atmosphere in your home or office. The natural ingredients ensure a clean burn with minimal smoke, releasing a soothing fragrance that purifies the air and uplifts your spiritual experience.`,
      features: [
        { icon: Leaf, title: 'Natural Ingredients', desc: 'Made with pure cow dung & herbs' },
        { icon: Clock, title: 'Long Burning', desc: 'Burns for 30+ minutes' },
        { icon: Award, title: 'Premium Quality', desc: 'Handcrafted with care' },
        { icon: Package, title: 'Eco-Friendly', desc: '100% biodegradable packaging' },
      ],
      specifications: {
        'Pack Contains': '20 Cups',
        'Burning Time': '30+ minutes per cup',
        'Ingredients': 'Cow dung, Natural herbs, Loban, Essential oils',
        'Weight': '250g (approx)',
        'Shelf Life': '2 years from manufacturing',
        'Storage': 'Keep in dry place away from moisture',
      },
      inStock: true,
      freeDelivery: true,
      cod: true,
    },
    'guggal-modak-pack': {
      id: 'guggal-modak-pack',
      name: 'Guggal Modak Pack',
      quantity: '50 Pieces',
      price: 449,
      originalPrice: 650,
      savings: 201,
      rating: 4.9,
      reviews: 4521,
      sold: 25000,
      benefits: [
        'Premium guggal fragrance',
        'Best for meditation',
        'Long lasting aroma',
        'Handcrafted modak shape',
        'Most popular choice',
      ],
      images: [modak, modak2, modak3],
      description: 'Cow Dung Guggal Sambrani Dhoop Cup',
      longDescription: `Our Guggal Modak Pack is our most popular product, loved by thousands of customers across India. The unique modak shape symbolizes Lord Ganesha's favorite sweet, making it perfect for special puja occasions.

Infused with premium Guggal (Indian Bdellium), known for its powerful purifying properties in Ayurveda. The rich, earthy fragrance creates an ideal atmosphere for deep meditation and spiritual practices.

Each piece is hand-rolled by women artisans from our village cooperative, providing them sustainable livelihoods while preserving traditional craftsmanship.`,
      features: [
        { icon: Leaf, title: 'Pure Guggal', desc: 'Premium quality guggal resin' },
        { icon: Clock, title: 'Extended Burn', desc: '30+ minutes per piece' },
        { icon: Award, title: 'Bestseller', desc: '#1 choice of customers' },
        { icon: Package, title: 'Value Pack', desc: '50 pieces per pack' },
      ],
      specifications: {
        'Pack Contains': '50 Pieces',
        'Burning Time': '30+ minutes per piece',
        'Ingredients': 'Cow dung, Guggal resin, Natural binders',
        'Weight': '400g (approx)',
        'Shelf Life': '2 years from manufacturing',
        'Storage': 'Keep in dry place away from moisture',
      },
      inStock: true,
      freeDelivery: true,
      cod: true,
    },
    'cow-dung-cake-tikki': {
      id: 'cow-dung-cake-tikki',
      name: 'Cow Dung Cake (Tikki)',
      quantity: '100 Pieces',
      price: 299,
      originalPrice: 700,
      savings: 401,
      rating: 4.7,
      reviews: 1892,
      sold: 8500,
      benefits: [
        'Soothing rose fragrance',
        'Perfect for home temple',
        'Premium quality',
        'Traditional design',
        'Budget-friendly option',
      ],
      images: [circulartikki, tikki2, tikki3],
      description: 'Cow Dung Rose Gulab Sambrani Dhoop Cup',
      longDescription: `Our traditional Cow Dung Cake (Tikki) is the most authentic form of dhoop, used in Indian households for centuries. This budget-friendly option brings the same purity and spiritual benefits as our premium products.

Infused with natural rose extracts, these tikkis release a soothing floral fragrance that calms the mind and creates a serene atmosphere. Perfect for daily use in home temples, meditation corners, or any space where you seek peace and tranquility.

The circular shape represents the endless cycle of life and spirituality, making it ideal for rituals and everyday spiritual practices.`,
      features: [
        { icon: Leaf, title: 'Rose Infused', desc: 'Natural rose fragrance' },
        { icon: Clock, title: 'Steady Burn', desc: '25+ minutes per tikki' },
        { icon: Award, title: 'Traditional', desc: 'Time-tested design' },
        { icon: Package, title: 'Affordable', desc: 'Best value for money' },
      ],
      specifications: {
        'Pack Contains': '100 Pieces',
        'Burning Time': '25+ minutes per tikki',
        'Ingredients': 'Cow dung, Rose extracts, Natural herbs',
        'Weight': '1kg (approx)',
        'Shelf Life': '2 years from manufacturing',
        'Storage': 'Keep in dry place away from moisture',
      },
      inStock: true,
      freeDelivery: true,
      cod: true,
    },
    'gaumutra': {
      id: 'gaumutra',
      name: 'Gaumutra ',
      quantity: '500 ml',
      price: 320,
      originalPrice: 550,
      savings: 230,
      rating: 4.6,
      reviews: 1245,
      sold: 6800,
      benefits: [
        'Made with purified gaumutra',
        'Used for spiritual purification',
        'Antibacterial & natural',
        'Eco-friendly & chemical-free',
        'Traditional Vedic formula',
      ],
      images: [gaumutra, gaumutra2, gaumutra3],
      description: ' Gaumutra ',
      longDescription: `Our Gaumutra is pure, purified cow urine following ancient Vedic traditions. Gaumutra has been revered in Ayurveda for its powerful purifying and antibacterial properties.

This 500ml bottle contains premium quality gaumutra that has been carefully processed and purified for spiritual and traditional use. It is perfect for havan ceremonies, spiritual cleansing rituals, and creating a pure, sacred atmosphere.

Used since ancient times for its spiritual significance and natural benefits.`,
      features: [
        { icon: Leaf, title: 'Pure & Natural', desc: 'Purified cow urine' },
        { icon: Clock, title: 'Long Lasting', desc: '500ml bottle' },
        { icon: Award, title: 'Vedic Formula', desc: 'Traditional recipe' },
        { icon: Package, title: 'Purifying', desc: 'Spiritual cleansing' },
      ],
      specifications: {
        'Volume': '500 ml',
        'Type': 'Purified Gaumutra',
        'Use': 'Spiritual & Traditional purposes',
        'Shelf Life': '1 year from manufacturing',
        'Storage': 'Keep in cool, dry place',
      },
      inStock: true,
      freeDelivery: true,
      cod: true,
    },
    'ghee-natural': {
      id: 'ghee-natural',
      name: 'Ghee Natural',
      quantity: '500 ml jar',
      price: 899,
      originalPrice: 1100,
      savings: 201,
      rating: 4.9,
      reviews: 3256,
      sold: 15000,
      benefits: [
        '100% pure cow ghee',
        'Rich aroma and natural taste',
        'Good for digestion & immunity',
        'Traditional bilona method',
        'From indigenous cows',
      ],
      images: [ghee, ghee2, ghee3],
      description: 'Pure natural cow ghee for pooja and daily nutrition',
      longDescription: `Our Pure Desi Ghee is made using the traditional Bilona method from the milk of indigenous Gir cows. This age-old technique ensures that all the natural goodness and nutrients are preserved.

Rich in vitamins A, D, E, and K, our ghee is perfect for both cooking and spiritual purposes. Use it for lighting diyas in your temple, preparing prasad, or adding to your daily meals for enhanced nutrition.

Every spoonful carries the purity of rural India and the blessings of our sacred cows.`,
      features: [
        { icon: Leaf, title: 'Pure & Natural', desc: '100% desi cow ghee' },
        { icon: Clock, title: 'Long Shelf Life', desc: '12+ months freshness' },
        { icon: Award, title: 'Bilona Method', desc: 'Traditional preparation' },
        { icon: Package, title: 'Multi-Purpose', desc: 'Cooking & pooja use' },
      ],
      specifications: {
        'Pack Contains': '500 ml jar',
        'Source': 'Indigenous Gir cow milk',
        'Method': 'Traditional Bilona churning',
        'Weight': '500 ml',
        'Shelf Life': '12 months from manufacturing',
        'Storage': 'Keep in cool, dry place',
      },
      inStock: true,
      freeDelivery: true,
      cod: true,
    },
    'incense-sticks': {
      id: 'incense-sticks',
      name: 'Incense Sticks',
      quantity: '300 gram',
      price: 399,
      originalPrice: 999,
      savings: 600,
      rating: 4.7,
      reviews: 2890,
      sold: 18500,
      benefits: [
        'Ideal for temples & daily pooja',
        'Bulk pack with better value',
        'Mixed fragrance varieties',
        'Long burning time',
        'Natural ingredients',
      ],
      images: [incenseImg, stick2, stick3],
      description: 'Premium quality incense sticks for temples and spiritual use',
      longDescription: `Our premium Incense Sticks pack contains 300 grams of handcrafted agarbattis made from natural ingredients. Each stick is carefully rolled using traditional techniques passed down through generations.

This bulk pack includes a variety of fragrances including sandalwood, rose, jasmine, and mogra - perfect for different moods and occasions. Whether it's daily puja, meditation, or creating a peaceful ambiance, these incense sticks are your perfect companion.

Made with natural charcoal and pure essential oils, they produce minimal smoke while releasing a long-lasting, divine fragrance.`,
      features: [
        { icon: Leaf, title: 'Natural', desc: 'Pure essential oils' },
        { icon: Clock, title: 'Long Burning', desc: '15+ minutes per stick' },
        { icon: Award, title: 'Bulk Value', desc: '300g pack' },
        { icon: Package, title: 'Mixed Fragrances', desc: 'Multiple varieties' },
      ],
      specifications: {
        'Pack Contains': '300 gram',
        'Burning Time': '15+ minutes per stick',
        'Fragrances': 'Sandalwood, Rose, Jasmine, Mogra',
        'Weight': '300g',
        'Shelf Life': '3 years from manufacturing',
        'Storage': 'Keep in dry place away from moisture',
      },
      inStock: true,
      freeDelivery: true,
      cod: true,
    },
  };

  const product = products[productId] || products['sambrani-cup-pack'];

  const relatedProducts = Object.values(products).filter(p => p.id !== product.id);

  const customerReviews = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      date: '2 weeks ago',
      title: 'Excellent quality!',
      comment: 'The fragrance is absolutely divine. Burns for a long time and the quality is excellent. Will definitely order again!',
      verified: true,
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      date: '1 month ago',
      title: 'Best sambrani I have ever used',
      comment: 'I have tried many brands but GauPrasad is by far the best. The natural fragrance is so soothing. Highly recommended!',
      verified: true,
    },
    {
      name: 'Meera Patel',
      location: 'Ahmedabad',
      rating: 4,
      date: '3 weeks ago',
      title: 'Good product, fast delivery',
      comment: 'Product quality is very good. Delivery was quick and packaging was nice. Will buy again.',
      verified: true,
    },
  ];

  const checkDelivery = () => {
    if (pincode.length === 6) {
      // Madhya Pradesh pincodes start with 45, 46, 47, 48, 49
      const mpPrefixes = ['45', '46', '47', '48', '49'];
      const pincodePrefix = pincode.substring(0, 2);
      const isMadhyaPradesh = mpPrefixes.includes(pincodePrefix);
      
      // Calculate delivery dates
      const today = new Date();
      let minDays, maxDays;
      
      if (isMadhyaPradesh) {
        minDays = 4;
        maxDays = 6;
      } else {
        minDays = 8;
        maxDays = 10;
      }
      
      const minDate = new Date(today);
      minDate.setDate(today.getDate() + minDays);
      const maxDate = new Date(today);
      maxDate.setDate(today.getDate() + maxDays);
      
      const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      };
      
      setDeliveryInfo({
        available: true,
        date: `${formatDate(minDate)} - ${formatDate(maxDate)}`,
        cod: true,
      });
    }
  };

  const handleWhatsAppOrder = () => {
    const totalPrice = product.price * quantity;
    const message = `Hi! I want to order:\n\nProduct: ${product.name}\nPack Size: ${product.quantity}\nQuantity: ${quantity}\nTotal Amount: ₹${totalPrice}\n\nPlease confirm the order.`;
    window.open(`https://wa.me/917987889449?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name} from GauPrasad Naturals!`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleBackToProducts = () => {
    // Navigate to home page and scroll to buy-now section
    window.location.href = '/#buy-now';
    // Force scroll after small delay
    setTimeout(() => {
      const element = document.getElementById('buy-now');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7EF] to-[#FDEADA]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={handleBackToProducts} className="flex items-center space-x-3">
              <img src={gauprasadLogo} alt="GauPrasad Naturals" className="w-12 h-12 rounded-full object-cover" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl text-[#5C4033]">GauPrasad</span>
                <span className="text-xs text-[#8B5A3C] tracking-wider">NATURALS</span>
              </div>
            </button>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleBackToProducts}
                className="text-[#E07A1F] hover:text-[#7A1D1D] font-medium transition-colors"
              >
                ← Choose Your Pack
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6">
          <ol className="flex items-center space-x-2 text-[#A3542D]">
            <li><Link to="/" className="hover:text-[#E07A1F]">Home</Link></li>
            <li>/</li>
            <li><button onClick={handleBackToProducts} className="hover:text-[#E07A1F]">Products</button></li>
            <li>/</li>
            <li className="text-[#3A2F2F] font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#FDEADA]">
                {/* Image Slider Container */}
                <div 
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] h-full"
                  style={{ transform: `translateX(-${selectedImage * 100}%)` }}
                >
                  {product.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                  ))}
                </div>
                {/* Navigation Arrows */}
                <button
                  onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white hover:scale-110 p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-6 h-6 text-[#3A2F2F]" />
                </button>
                <button
                  onClick={() => setSelectedImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white hover:scale-110 p-3 rounded-full shadow-lg transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight className="w-6 h-6 text-[#3A2F2F]" />
                </button>
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-[#7A1D1D] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round((product.savings / product.originalPrice) * 100)}% OFF
                </div>
                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`transition-all duration-300 rounded-full ${
                        selectedImage === index 
                          ? 'w-8 h-2 bg-[#E07A1F]' 
                          : 'w-2 h-2 bg-white/60 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Thumbnails */}
            <div className="flex space-x-4 justify-center">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedImage === index 
                      ? 'border-[#E07A1F] shadow-lg scale-105 ring-2 ring-[#E07A1F]/30' 
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="font-bold text-3xl md:text-4xl text-[#3A2F2F] mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-[#A3542D] mb-4">{product.description}</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-[#E07A1F] text-[#E07A1F]' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-[#3A2F2F] font-semibold">{product.rating}</span>
                </div>
                <span className="text-[#A3542D]">({product.reviews.toLocaleString()} reviews)</span>
                <span className="text-[#7A1D1D] font-medium">{product.sold.toLocaleString()}+ sold</span>
              </div>
            </div>

            {/* Price */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-baseline space-x-4 mb-2">
                <span className="text-4xl font-bold text-[#E07A1F]">₹{product.price}</span>
                <span className="text-xl text-[#A3542D] line-through">₹{product.originalPrice}</span>
                <span className="bg-[#7A1D1D] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ₹{product.savings}
                </span>
              </div>
              <p className="text-green-600 font-medium">Inclusive of all taxes</p>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="text-[#3A2F2F] font-medium">Quantity:</span>
                <div className="flex items-center border-2 border-[#E07A1F] rounded-full">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-[#E07A1F] hover:bg-[#FDEADA] rounded-l-full transition-colors"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 py-2 font-semibold text-[#3A2F2F] min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-[#E07A1F] hover:bg-[#FDEADA] rounded-r-full transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-[#A3542D]">{product.quantity}</span>
              </div>

              {/* Order Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleWhatsAppOrder}
                  className="flex-1 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#20bd5a] transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 text-lg"
                >
                  <Phone className="w-6 h-6" />
                  <span>Order on WhatsApp</span>
                </button>
                {/* Buy on Amazon - Commented out for now (not available)
                <button
                  onClick={() => window.open('https://www.amazon.in', '_blank')}
                  className="flex-1 bg-[#E07A1F] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c46a30] transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 text-lg"
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Buy on Amazon</span>
                </button>
                */}
              </div>

              {/* Share */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-[#E07A1F] text-[#E07A1F] hover:bg-[#FDEADA] transition-all"
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Delivery Check */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-semibold text-[#3A2F2F] mb-4 flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-[#E07A1F]" />
                <span>Check Delivery</span>
              </h3>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="Enter PIN code"
                  className="flex-1 border-2 border-[#FDEADA] rounded-full px-4 py-2 focus:border-[#E07A1F] focus:outline-none"
                />
                <button
                  onClick={checkDelivery}
                  className="bg-[#E07A1F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#c46a30] transition-colors"
                >
                  Check
                </button>
              </div>
              {deliveryInfo && (
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-green-600 flex items-center space-x-2">
                    <Check className="w-4 h-4" />
                    <span>Delivery available to this pincode</span>
                  </p>
                  <p className="text-[#3A2F2F]">
                    <Truck className="w-4 h-4 inline mr-2" />
                    Expected delivery: <strong>{deliveryInfo.date}</strong>
                  </p>
                </div>
              )}
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <Shield className="w-8 h-8 text-[#E07A1F] mx-auto mb-2" />
                <p className="text-xs text-[#3A2F2F] font-medium">Secure Payment</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-md">
                <RotateCcw className="w-8 h-8 text-[#E07A1F] mx-auto mb-2" />
                <p className="text-xs text-[#3A2F2F] font-medium">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-3xl p-8 shadow-lg mb-16">
          <h2 className="font-bold text-2xl text-[#3A2F2F] mb-8 text-center">Why Choose This Product?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-[#E07A1F] to-[#7A1D1D] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-[#3A2F2F] mb-1">{feature.title}</h3>
                <p className="text-sm text-[#A3542D]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-3xl shadow-lg mb-16 overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-[#FDEADA]">
            {['description', 'specifications', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-4 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-[#E07A1F] border-b-2 border-[#E07A1F] bg-[#FFF7EF]'
                    : 'text-[#A3542D] hover:text-[#E07A1F]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'description' && (
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-[#3A2F2F] leading-relaxed whitespace-pre-line">{product.longDescription}</p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-[#3A2F2F] text-lg">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-[#E07A1F] flex-shrink-0" />
                        <span className="text-[#3A2F2F]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex border-b border-[#FDEADA] pb-3">
                    <span className="font-medium text-[#A3542D] w-40">{key}</span>
                    <span className="text-[#3A2F2F]">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-8">
                {/* Review Summary */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 pb-8 border-b border-[#FDEADA]">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-[#E07A1F]">{product.rating}</div>
                    <div className="flex items-center justify-center space-x-1 my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-[#E07A1F] text-[#E07A1F]' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-[#A3542D]">{product.reviews.toLocaleString()} reviews</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((star) => (
                      <div key={star} className="flex items-center space-x-3">
                        <span className="text-sm text-[#A3542D] w-12">{star} star</span>
                        <div className="flex-1 h-3 bg-[#FDEADA] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#E07A1F] rounded-full"
                            style={{ width: star === 5 ? '75%' : star === 4 ? '20%' : '5%' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {customerReviews.map((review, index) => (
                    <div key={index} className="border-b border-[#FDEADA] pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-[#3A2F2F]">{review.name}</span>
                            {review.verified && (
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center space-x-1">
                                <Check className="w-3 h-3" />
                                <span>Verified</span>
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-[#A3542D]">{review.location}</p>
                        </div>
                        <span className="text-sm text-[#A3542D]">{review.date}</span>
                      </div>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'fill-[#E07A1F] text-[#E07A1F]' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <h4 className="font-medium text-[#3A2F2F] mb-1">{review.title}</h4>
                      <p className="text-[#A3542D]">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-16">
          <h2 className="font-bold text-2xl text-[#3A2F2F] mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <a
                key={relProduct.id}
                href={`/product/${relProduct.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-[#FDEADA] mb-4">
                  <img src={relProduct.images[0]} alt={relProduct.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold text-[#3A2F2F] mb-1">{relProduct.name}</h3>
                <p className="text-sm text-[#A3542D] mb-2 line-clamp-2">{relProduct.description}</p>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-[#E07A1F]">₹{relProduct.price}</span>
                  <span className="text-sm text-[#A3542D] line-through">₹{relProduct.originalPrice}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#3A2F2F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={gauprasadLogo} alt="GauPrasad Naturals" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-xl">GauPrasad</span>
                  <span className="text-xs text-gray-400 tracking-wider">NATURALS</span>
                </div>
              </div>
              <p className="text-gray-400">Bringing purity, tradition, and sustainability to every prayer.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <p className="text-gray-400">📞 +91 79878 89449</p>
              <p className="text-gray-400">✉️ gauprasadnaturals@gmail.com</p>
              <p className="text-gray-400">📍 Village Seoni, India</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <button onClick={handleBackToProducts} className="block text-gray-400 hover:text-[#E07A1F] transition-colors">Home</button>
              <button onClick={() => window.location.href = '/#why-us'} className="block text-gray-400 hover:text-[#E07A1F] transition-colors">About Us</button>
              <button onClick={handleBackToProducts} className="block text-gray-400 hover:text-[#E07A1F] transition-colors">Products</button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400">© 2026 GauPrasad Naturals. All rights reserved. Made in India 🇮🇳</p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl p-4 md:hidden z-50">
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-sm text-[#A3542D]">Total Price</p>
            <p className="text-xl font-bold text-[#E07A1F]">₹{product.price * quantity}</p>
          </div>
          <button
            onClick={handleWhatsAppOrder}
            className="flex-1 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
