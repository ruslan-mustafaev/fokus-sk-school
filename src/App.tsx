import { useState } from 'react';
import Header from './components/Header';
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
  );
}

export default App;
