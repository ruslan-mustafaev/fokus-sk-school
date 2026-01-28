import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FormatsSection from './components/FormatsSection';
import PricingSection from './components/PricingSection';
import TeachersSection from './components/TeachersSection';
import TestimonialsSection from './components/TestimonialsSection';
import ReviewsCarousel from './components/ReviewsCarousel';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FormatsSection />
      <PricingSection />
      <TeachersSection />
      <ReviewsCarousel />
      <TestimonialsSection />
      <Footer />
      <StickyButton />
    </div>
  );
}

export default App;
