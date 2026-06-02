import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  GraduationCap,
  Loader2,
  MessageCircle,
  Star,
  Target,
  Users,
  XCircle,
} from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import DecorativeElement from './DecorativeElement';
import {
  determineLevel as determineNotionLevel,
  learningPlans as notionLearningPlans,
  questions as notionQuestions,
  type DifficultyLevel,
  type QuestionCategory,
  type QuizQuestion,
} from '../data/quizContent';
import { sendQuizResultEmail } from '../lib/emailjs';

// ── Types ────────────────────────────────────────────────────────────────────

interface LeadData {
  name: string;
  email: string;
  goal: string;
  studyTime: string;
}

interface QuizResults {
  totalScore: number;
  levelScores: Record<DifficultyLevel, { correct: number; total: number }>;
  categoryScores: Record<QuestionCategory, { correct: number; total: number }>;
  determinedLevel: DifficultyLevel;
  answers: { questionId: number; selectedAnswer: number; isCorrect: boolean; timeSpent: number }[];
}

type Stage = 'quiz' | 'lead' | 'results';

// ── Constants ────────────────────────────────────────────────────────────────

const GOAL_LABELS: Record<string, string> = {
  general: 'Загальне вивчення мови',
  work: 'Для роботи в Словаччині',
  study: 'Для навчання в університеті',
  citizenship: 'Для отримання громадянства',
  travel: 'Для подорожей',
};

const STUDY_TIME_LABELS: Record<string, string> = {
  minimal: '1-2 години на тиждень',
  moderate: '3-5 годин на тиждень',
  intensive: '6+ годин на тиждень',
  flexible: 'Гнучкий графік',
};

const LEVEL_COLORS: Record<DifficultyLevel, string> = {
  A1: 'from-green-400 to-green-600',
  A2: 'from-blue-400 to-blue-600',
  B1: 'from-amber-400 to-amber-600',
  B2: 'from-red-400 to-red-600',
  C1: 'from-zinc-700 to-slate-900',
};

// ── ProgressBar ───────────────────────────────────────────────────────────────

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="relative">
      <div className="w-full h-4 bg-brand-light rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-brand-blue via-brand-blue to-brand-orange rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm font-bold text-brand-dark/70">
          Питання {current} з {total}
        </span>
        <span className="text-sm font-bold text-brand-blue">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};

// ── QuestionCard ──────────────────────────────────────────────────────────────

const QuestionCard = ({
  question,
  selectedAnswer,
  onSelect,
  showResult,
}: {
  question: QuizQuestion;
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
  showResult: boolean;
}) => {
  const difficultyColors: Record<DifficultyLevel, string> = {
    A1: 'bg-green-100 text-green-700',
    A2: 'bg-blue-100 text-blue-700',
    B1: 'bg-amber-100 text-amber-700',
    B2: 'bg-red-100 text-red-700',
    C1: 'bg-zinc-800 text-zinc-100',
  };

  const categoryNames: Record<QuestionCategory, string> = {
    vocabulary: 'Лексика',
    grammar: 'Граматика',
    communication: 'Комунікація',
    reading: 'Читання',
    writing: 'Письмо',
  };

  return (
    <div className="animate-fadeIn mb-8">
      <div className="flex items-center gap-3 mb-6">
        <span className={`px-4 py-2 rounded-xl text-xs font-black ${difficultyColors[question.difficulty]}`}>
          {question.difficulty}
        </span>
        <span className="text-brand-dark/50 text-sm font-semibold">
          {categoryNames[question.category]}
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-8 leading-tight whitespace-pre-line">
        {question.question}
      </h2>

      <div className="grid gap-4">
        {question.options.map((option, index) => {
          let cls = 'relative w-full p-5 text-left rounded-2xl border-2 transition-all duration-300 cursor-pointer ';
          if (showResult) {
            if (index === question.correctAnswer) cls += 'bg-green-50 border-green-500 text-green-900';
            else if (index === selectedAnswer) cls += 'bg-red-50 border-red-500 text-red-900';
            else cls += 'bg-brand-light border-brand-light text-brand-dark/40';
          } else if (selectedAnswer === index) {
            cls += 'bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 border-brand-blue text-brand-dark scale-[1.02]';
          } else {
            cls += 'bg-white border-brand-light text-brand-dark hover:bg-brand-light hover:border-brand-blue/30 hover:-translate-y-0.5';
          }

          return (
            <button key={index} onClick={() => !showResult && onSelect(index)} disabled={showResult} className={cls}>
              <span className="flex items-center gap-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue text-sm font-black flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-base md:text-lg font-semibold">{option}</span>
              </span>
              {showResult && index === question.correctAnswer && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500">
                  <CheckCircle className="w-6 h-6" />
                </span>
              )}
              {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500">
                  <XCircle className="w-6 h-6" />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {showResult && question.explanation && (
        <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 border-2 border-brand-blue/10 animate-fadeIn">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
              <span className="text-xl">💡</span>
            </div>
            <p className="text-brand-dark font-medium text-base pt-1">{question.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// ── LeadForm ──────────────────────────────────────────────────────────────────
// Shown AFTER the quiz, before showing results.
// Collects name + email, sends the result email, then reveals results.

const LeadForm = ({
  completedAnswers,
  onComplete,
}: {
  completedAnswers: QuizResults['answers'];
  onComplete: (lead: LeadData, results: QuizResults) => void;
}) => {
  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    goal: 'general',
    studyTime: 'flexible',
  });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  // Pre-calculate results so we can show a teaser level badge
  const levelScores: QuizResults['levelScores'] = {
    A1: { correct: 0, total: 0 },
    A2: { correct: 0, total: 0 },
    B1: { correct: 0, total: 0 },
    B2: { correct: 0, total: 0 },
    C1: { correct: 0, total: 0 },
  };
  const categoryScores: QuizResults['categoryScores'] = {
    vocabulary: { correct: 0, total: 0 },
    grammar: { correct: 0, total: 0 },
    communication: { correct: 0, total: 0 },
    reading: { correct: 0, total: 0 },
    writing: { correct: 0, total: 0 },
  };
  let totalScore = 0;
  completedAnswers.forEach((answer) => {
    const q = notionQuestions.find((q) => q.id === answer.questionId);
    if (!q) return;
    levelScores[q.difficulty].total++;
    categoryScores[q.category].total++;
    if (answer.isCorrect) {
      totalScore++;
      levelScores[q.difficulty].correct++;
      categoryScores[q.category].correct++;
    }
  });
  const determinedLevel = determineNotionLevel(levelScores);
  const plan = notionLearningPlans[determinedLevel];
  const percentage = Math.round((totalScore / notionQuestions.length) * 100);

  const results: QuizResults = {
    totalScore,
    levelScores,
    categoryScores,
    determinedLevel,
    answers: completedAnswers,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setSending(true);
    setError('');
    try {
      await sendQuizResultEmail({
        name: formData.name.trim(),
        email: formData.email.trim(),
        goal: GOAL_LABELS[formData.goal] ?? formData.goal,
        studyTime: STUDY_TIME_LABELS[formData.studyTime] ?? formData.studyTime,
        level: determinedLevel,
        levelTitle: plan.title,
        score: String(totalScore),
        totalQuestions: String(notionQuestions.length),
        percentage: String(percentage),
        recommendedFormat: plan.formatName,
        price: plan.price,
        duration: plan.duration,
        vocabScore: `${categoryScores.vocabulary.correct}/${categoryScores.vocabulary.total}`,
        grammarScore: `${categoryScores.grammar.correct}/${categoryScores.grammar.total}`,
        communicationScore: `${categoryScores.communication.correct}/${categoryScores.communication.total}`,
        readingScore: `${categoryScores.reading.correct}/${categoryScores.reading.total}`,
        writingScore: `${categoryScores.writing.correct}/${categoryScores.writing.total}`,
      });
    } catch {
      // Email failure should not block showing results — just note it
      setError('Не вдалось надіслати результати на пошту. Але ваш рівень вже визначено!');
    }
    onComplete(formData, results);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <AnimatedElement animation="fade-in-down">
        {/* Teaser card */}
        <div className={`relative bg-gradient-to-br ${LEVEL_COLORS[determinedLevel]} rounded-[2rem] p-8 md:p-10 mb-6 text-white text-center overflow-hidden`}>
          <div className="absolute inset-0 bg-black/10 rounded-[2rem]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-4">
              <CheckCircle className="w-4 h-4" />
              Тест завершено!
            </div>
            <p className="text-white/80 text-base mb-3">Ви відповіли правильно на</p>
            <div className="text-6xl font-black mb-2">{percentage}%</div>
            <p className="text-white/70 text-sm">
              {totalScore} з {notionQuestions.length} питань
            </p>
            {/* Blurred level teaser */}
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-white/70 text-base">Ваш рівень:</span>
              <span className="text-3xl font-black bg-white/20 backdrop-blur-sm px-5 py-1.5 rounded-xl blur-sm select-none">
                {determinedLevel} — {plan.title}
              </span>
            </div>
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement animation="scale-in" delay={100}>
        <div className="bg-white rounded-[2rem] p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-2 text-center">
            Дізнайтесь свій рівень
          </h2>
          <p className="text-brand-dark/60 text-center text-base mb-8 leading-relaxed">
            Введіть ім'я та email — ми відкриємо повний результат<br className="hidden sm:block" /> і надішлемо детальний звіт на пошту
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">Ваше ім'я</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-transparent text-brand-dark placeholder-brand-dark/40 focus:border-brand-blue focus:bg-white focus:outline-none transition-all duration-300 font-medium"
                placeholder="Введіть ваше ім'я"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-transparent text-brand-dark placeholder-brand-dark/40 focus:border-brand-blue focus:bg-white focus:outline-none transition-all duration-300 font-medium"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">
                Мета вивчення словацької
              </label>
              <select
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-transparent text-brand-dark focus:border-brand-blue focus:bg-white focus:outline-none transition-all duration-300 cursor-pointer font-medium"
              >
                <option value="general">Загальне вивчення мови</option>
                <option value="work">Для роботи в Словаччині</option>
                <option value="study">Для навчання в університеті</option>
                <option value="citizenship">Для отримання громадянства</option>
                <option value="travel">Для подорожей</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-brand-dark mb-2">
                Скільки часу готові приділяти навчанню?
              </label>
              <select
                value={formData.studyTime}
                onChange={(e) => setFormData({ ...formData, studyTime: e.target.value })}
                className="w-full px-5 py-4 rounded-xl bg-brand-light border-2 border-transparent text-brand-dark focus:border-brand-blue focus:bg-white focus:outline-none transition-all duration-300 cursor-pointer font-medium"
              >
                <option value="minimal">1-2 години на тиждень</option>
                <option value="moderate">3-5 годин на тиждень</option>
                <option value="intensive">6+ годин на тиждень</option>
                <option value="flexible">Гнучкий графік</option>
              </select>
            </div>

            {error && (
              <p className="text-amber-600 text-sm font-medium bg-amber-50 px-4 py-3 rounded-xl">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!formData.name.trim() || !formData.email.trim() || sending}
              className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-brand-orange text-white rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {sending ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Надсилаємо...
                </>
              ) : (
                <>
                  Показати мій результат
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-brand-dark/40 mt-4 leading-relaxed">
            Ми не надсилаємо спам. Тільки ваш результат та корисна інформація про курс.
          </p>
        </div>
      </AnimatedElement>
    </div>
  );
};

// ── ResultsScreen ─────────────────────────────────────────────────────────────

const ResultsScreen = ({
  results,
  leadData,
  onRestart,
  onBackToSite,
}: {
  results: QuizResults;
  leadData: LeadData;
  onRestart: () => void;
  onBackToSite?: () => void;
}) => {
  const percentage = Math.round((results.totalScore / notionQuestions.length) * 100);
  const plan = notionLearningPlans[results.determinedLevel];

  const formatIcons: Record<string, React.ReactNode> = {
    individual: <GraduationCap className="w-8 h-8" />,
    group: <Users className="w-8 h-8" />,
    pair: <Users className="w-8 h-8" />,
    club: <MessageCircle className="w-8 h-8" />,
  };

  const categoryNames: Record<QuestionCategory, string> = {
    vocabulary: 'Лексика',
    grammar: 'Граматика',
    communication: 'Комунікація',
    reading: 'Читання',
    writing: 'Письмо',
  };

  return (
    <div className="max-w-3xl mx-auto">
      <AnimatedElement animation="scale-in">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 mb-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/5 rounded-full -ml-24 -mb-24 blur-3xl" />

          <div className="relative z-10">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 rounded-full blur-2xl" />
              <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${LEVEL_COLORS[results.determinedLevel]} flex items-center justify-center`}>
                <span className="text-5xl font-black text-white">{percentage}%</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              {leadData.name}, ваш рівень:
            </h1>

            <div className={`inline-block text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r ${LEVEL_COLORS[results.determinedLevel]} bg-clip-text text-transparent mb-6`}>
              {results.determinedLevel} — {plan.title}
            </div>

            <p className="text-lg md:text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              {plan.description}
            </p>

            <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-light rounded-full">
              <span className="text-brand-dark/60 font-medium">Правильних відповідей:</span>
              <span className="text-2xl font-black text-brand-blue">{results.totalScore}</span>
              <span className="text-brand-dark/60 font-medium">з</span>
              <span className="text-2xl font-black text-brand-orange">{notionQuestions.length}</span>
            </div>
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement animation="fade-in-up" delay={100}>
        <div className="bg-white rounded-[2rem] p-8 md:p-10 mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-8 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-brand-blue" />
            </div>
            Результати за категоріями
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {(Object.entries(results.categoryScores) as [QuestionCategory, { correct: number; total: number }][]).map(
              ([category, score]) => (
                <div key={category} className="bg-brand-light rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-sm font-bold text-brand-dark/60 mb-2 uppercase tracking-wide">
                    {categoryNames[category]}
                  </div>
                  <div className="text-4xl font-black text-brand-dark mb-3">
                    {score.correct}
                    <span className="text-2xl text-brand-dark/40">/{score.total}</span>
                  </div>
                  <div className="w-full h-3 bg-white rounded-full mt-3 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-blue to-brand-orange rounded-full transition-all duration-500"
                      style={{ width: `${score.total > 0 ? (score.correct / score.total) * 100 : 0}%` }}
                    />
                  </div>
                  <div className="text-sm font-bold text-brand-blue mt-2">
                    {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement animation="fade-in-up" delay={200}>
        <div className="bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue/90 rounded-[2rem] p-8 md:p-12 text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/20 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-[1.5rem] bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                {formatIcons[plan.recommendedFormat]}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-brand-orange" />
                  <span className="text-sm font-bold text-white/80 uppercase tracking-wide">
                    Рекомендований формат
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-2">{plan.formatName}</h2>
                <p className="text-lg text-white/80 leading-relaxed">{plan.formatDescription}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black mb-2">{plan.price}</div>
                <div className="text-white/80 text-base font-medium">
                  Очікуваний час: {plan.duration}
                </div>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-brand-orange/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-brand-orange" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => {
                if (onBackToSite) {
                  onBackToSite();
                  setTimeout(() => {
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }
              }}
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-orange text-white rounded-full font-bold text-xl hover:bg-brand-orange/90 transition-all duration-300 transform hover:-translate-y-1"
            >
              Записатись на безкоштовний урок
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </AnimatedElement>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-brand-dark text-brand-dark rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Пройти ще раз
        </button>

        <button
          onClick={() => {
            if (onBackToSite) {
              onBackToSite();
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
            }
          }}
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-light text-brand-dark rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-all duration-300 transform hover:-translate-y-1"
        >
          Повернутись на сайт
        </button>
      </div>
    </div>
  );
};

// ── Main Quiz ─────────────────────────────────────────────────────────────────

export default function Quiz({ onBackToSite }: { onBackToSite?: () => void }) {
  const [stage, setStage] = useState<Stage>('quiz');
  const [leadData, setLeadData] = useState<LeadData | null>(null);
  const [quizResults, setQuizResults] = useState<QuizResults | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<QuizResults['answers']>([]);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    if (!showResult) {
      setShowResult(true);
      const isCorrect = selectedAnswer === notionQuestions[currentQuestion].correctAnswer;
      const timeSpent = Date.now() - questionStartTime;
      setAnswers((prev) => [
        ...prev,
        { questionId: notionQuestions[currentQuestion].id, selectedAnswer, isCorrect, timeSpent },
      ]);
      return;
    }

    if (currentQuestion < notionQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setQuestionStartTime(Date.now());
      return;
    }

    // Quiz done — go to lead form
    setStage('lead');
  };

  const handleLeadComplete = (lead: LeadData, results: QuizResults) => {
    setLeadData(lead);
    setQuizResults(results);
    setStage('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setStage('quiz');
    setLeadData(null);
    setQuizResults(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
  };

  const currentScore = answers.filter((a) => a.isCorrect).length;

  return (
    <div className="min-h-screen bg-brand-light pb-16 relative overflow-hidden">
      <DecorativeElement imageSrc="/dekor/24.png" position="top-right" size="medium" animation="float" />
      <DecorativeElement imageSrc="/dekor/40.png" position="bottom-left" size="large" animation="sway" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-[32rem] h-[32rem] bg-brand-blue/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-[28rem] h-[28rem] bg-brand-orange/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-brand-blue/3 to-brand-orange/3 rounded-full blur-3xl" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md py-2" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button onClick={onBackToSite} className="flex items-center group cursor-pointer" style={{ boxShadow: 'none' }}>
              <img
                src="/logo/image.png"
                alt="FOCUS School"
                decoding="async"
                className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-105"
                style={{ filter: 'none', boxShadow: 'none' }}
              />
            </button>

            {stage === 'quiz' && (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-brand-light rounded-full">
                  <span className="text-brand-dark/70 text-sm font-medium">
                    Питання <span className="font-bold text-brand-dark">{currentQuestion + 1}</span>/
                    <span className="font-bold text-brand-orange">{notionQuestions.length}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-brand-orange/10 rounded-full">
                  <CheckCircle className="w-4 h-4 text-brand-orange" />
                  <span className="font-bold text-brand-dark">{currentScore}</span>
                </div>
              </div>
            )}

            <button
              onClick={onBackToSite}
              className="px-5 py-2.5 bg-brand-blue text-white rounded-full font-semibold hover:bg-brand-blue/90 transition-all duration-300 transform hover:scale-105 text-sm"
            >
              На сайт
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-4 pt-24">
        <div className="max-w-5xl mx-auto">

          {stage === 'quiz' && (
            <div>
              <AnimatedElement animation="fade-in-down">
                <div className="mb-8">
                  <ProgressBar current={currentQuestion + 1} total={notionQuestions.length} />
                </div>
              </AnimatedElement>

              <AnimatedElement animation="scale-in" delay={100}>
                <div className="bg-white rounded-[2rem] p-8 md:p-10 transition-all duration-300">
                  <QuestionCard
                    question={notionQuestions[currentQuestion]}
                    selectedAnswer={selectedAnswer}
                    onSelect={setSelectedAnswer}
                    showResult={showResult}
                  />

                  <div className="flex justify-end mt-8">
                    <button
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                      className={`group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                        selectedAnswer === null
                          ? 'bg-brand-light text-brand-dark/40 cursor-not-allowed'
                          : 'bg-brand-orange text-white hover:bg-brand-orange/90 transform hover:-translate-y-1'
                      }`}
                    >
                      {showResult
                        ? currentQuestion < notionQuestions.length - 1
                          ? 'Далі'
                          : 'Завершити'
                        : 'Перевірити'}
                      {selectedAnswer !== null && (
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      )}
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          )}

          {stage === 'lead' && (
            <LeadForm completedAnswers={answers} onComplete={handleLeadComplete} />
          )}

          {stage === 'results' && leadData && quizResults && (
            <ResultsScreen
              results={quizResults}
              leadData={leadData}
              onRestart={handleRestart}
              onBackToSite={onBackToSite}
            />
          )}

        </div>
      </main>

      <footer className="relative z-10 mt-12 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src="/logo/image.png" alt="FOCUS School" loading="lazy" decoding="async" className="h-12 w-auto" />
            <p className="text-white/50 text-sm">2026 FOCUS School. Всі права захищені.</p>
            <p className="text-white/30 text-sm">ФОКУС. ДІЯ. РЕЗУЛЬТАТ.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
