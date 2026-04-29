import { lazy, Suspense, useState } from 'react';
import Header from './components/Header';
import ScrollBackground from './components/ScrollBackground';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import FormatsSection from './components/FormatsSection';
import TrialSignupSection from './components/TrialSignupSection';
import FounderSection from './components/FounderSection';
import TeachersSection from './components/TeachersSection';
import ReviewsCarousel from './components/ReviewsCarousel';
import VideoLessonsSection from './components/VideoLessonsSection';
import Footer from './components/Footer';
import StickyButton from './components/StickyButton';

const Quiz = lazy(() => import('./components/Quiz'));

function QuizFallback() {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-12 h-12 mx-auto rounded-full border-4 border-brand-blue/15 border-t-brand-blue animate-spin" />
        <p className="mt-4 text-brand-dark/70 font-medium">Завантажуємо тест...</p>
      </div>
    </div>
  );
}

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return (
      <Suspense fallback={<QuizFallback />}>
        <Quiz onBackToSite={() => setShowQuiz(false)} />
      </Suspense>
    );
  }

  return (
    <div className="relative isolate min-h-screen bg-brand-dark">
      <ScrollBackground />
      <div className="relative z-10">
        <Header onQuizClick={() => setShowQuiz(true)} />
        <HeroSection />
        <FeaturesSection />
        <FormatsSection onQuizClick={() => setShowQuiz(true)} />
        <TrialSignupSection />
        <FounderSection />
        <TeachersSection />
        <ReviewsCarousel />
        <VideoLessonsSection />
        <Footer />
        <StickyButton />
      </div>
    </div>
  );
}

export default App;
