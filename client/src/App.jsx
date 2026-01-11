import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import HowMade from './components/HowMade';
import Uses from './components/Uses';
import Reviews from './components/Reviews';
import BuyNow from './components/BuyNow';
import Story from './components/Story';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <HowMade />
      <Uses />
      <Reviews />
      <BuyNow />
      <Story />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
