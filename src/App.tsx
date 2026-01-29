import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ForWhoSection from './components/ForWhoSection';
import FormatsSection from './components/FormatsSection';
import PricingSection from './components/PricingSection';
import TeachersSection from './components/TeachersSection';
import ReviewsCarousel from './components/ReviewsCarousel';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';
import Quiz from './components/Quiz';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return <Quiz onBackToSite={() => setShowQuiz(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Header onQuizClick={() => setShowQuiz(true)} />
      <HeroSection />
      <AboutSection />
      <ForWhoSection />
      <FormatsSection onQuizClick={() => setShowQuiz(true)} />
      <PricingSection />
      <TeachersSection />
      <ReviewsCarousel />
      <Footer />
      <StickyButton />
    </div>
  );
}

export default App;
