import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FormatsSection from './components/FormatsSection';
import PricingSection from './components/PricingSection';
import TeachersSection from './components/TeachersSection';
import ReviewsCarousel from './components/ReviewsCarousel';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';
import ParticleEffect from './components/ParticleEffect';
import MagneticScroll from './components/MagneticScroll';

function App() {
  return (
    <div className="min-h-screen relative">
      <ParticleEffect />
      <MagneticScroll />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <FormatsSection />
        <PricingSection />
        <TeachersSection />
        <ReviewsCarousel />
        <Footer />
        <StickyButton />
      </div>
    </div>
  );
}

export default App;
