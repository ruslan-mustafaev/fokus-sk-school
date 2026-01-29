import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, BookOpen, GraduationCap, Users, MessageCircle, Star, Target } from 'lucide-react';

// Types
type DifficultyLevel = 'A1' | 'A2' | 'B1' | 'B2';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: DifficultyLevel;
  category: 'vocabulary' | 'grammar' | 'phrases' | 'comprehension';
}

interface UserData {
  name: string;
  email: string;
  goal: string;
  studyTime: string;
}

interface QuizResults {
  totalScore: number;
  levelScores: Record<DifficultyLevel, { correct: number; total: number }>;
  categoryScores: Record<string, { correct: number; total: number }>;
  determinedLevel: DifficultyLevel;
  answers: { questionId: number; selectedAnswer: number; isCorrect: boolean; timeSpent: number }[];
}

// Questions database
const questions: Question[] = [
  {
    id: 1,
    question: "Як сказати 'Доброго ранку' словацькою?",
    options: ["Dobrý večer", "Dobré ráno", "Dobrý deň", "Dobrú noc"],
    correctAnswer: 1,
    explanation: "Dobré ráno = Доброго ранку",
    difficulty: 'A1',
    category: 'phrases'
  },
  {
    id: 2,
    question: "Оберіть правильний переклад: 'Я студент'",
    options: ["Som učiteľ", "Som študent", "Som lekár", "Som inžinier"],
    correctAnswer: 1,
    explanation: "Som študent = Я студент",
    difficulty: 'A1',
    category: 'vocabulary'
  },
  {
    id: 3,
    question: "Яке число означає 'päť'?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "Päť = 5 (п'ять)",
    difficulty: 'A1',
    category: 'vocabulary'
  },
  {
    id: 4,
    question: "Доповніть речення: 'Volám ___ Ján.'",
    options: ["som", "sa", "mám", "je"],
    correctAnswer: 1,
    explanation: "Volám sa = Мене звати",
    difficulty: 'A1',
    category: 'grammar'
  },
  {
    id: 5,
    question: "Яке слово означає 'вода'?",
    options: ["Mlieko", "Voda", "Káva", "Čaj"],
    correctAnswer: 1,
    explanation: "Voda = вода",
    difficulty: 'A1',
    category: 'vocabulary'
  },
  {
    id: 6,
    question: "Перекладіть: 'Kde je najbližšia stanica?'",
    options: [
      "Де найближчий магазин?",
      "Де найближча станція?",
      "Де найближча лікарня?",
      "Де найближчий ресторан?"
    ],
    correctAnswer: 1,
    explanation: "Stanica = станція",
    difficulty: 'A2',
    category: 'comprehension'
  },
  {
    id: 7,
    question: "Оберіть правильну форму дієслова 'byť': 'Oni ___ doma.'",
    options: ["som", "si", "je", "sú"],
    correctAnswer: 3,
    explanation: "Oni sú = Вони є (множина)",
    difficulty: 'A2',
    category: 'grammar'
  },
  {
    id: 8,
    question: "Що означає 'Ďakujem veľmi pekne'?",
    options: ["Вибачте", "Будь ласка", "Дуже дякую", "До побачення"],
    correctAnswer: 2,
    explanation: "Ďakujem veľmi pekne = Дуже дякую",
    difficulty: 'A1',
    category: 'phrases'
  },
  {
    id: 9,
    question: "Який день тижня 'pondelok'?",
    options: ["Вівторок", "Понеділок", "Середа", "Четвер"],
    correctAnswer: 1,
    explanation: "Pondelok = Понеділок",
    difficulty: 'A1',
    category: 'vocabulary'
  },
  {
    id: 10,
    question: "Доповніть: 'Mám ___ rokov.' (23)",
    options: ["dvadsaťtri", "tridsaťdva", "dvadsaťdva", "tridsaťtri"],
    correctAnswer: 0,
    explanation: "Dvadsaťtri = 23 (двадцять три)",
    difficulty: 'A2',
    category: 'vocabulary'
  },
  {
    id: 11,
    question: "Оберіть правильний відмінок: 'Idem do ___.' (škola)",
    options: ["škola", "školy", "škole", "školou"],
    correctAnswer: 1,
    explanation: "Do + родовий відмінок: do školy = до школи",
    difficulty: 'A2',
    category: 'grammar'
  },
  {
    id: 12,
    question: "Що означає 'Prepáčte, nerozumiem'?",
    options: [
      "Дякую, я розумію",
      "Вибачте, я не розумію",
      "Привіт, як справи?",
      "До побачення, друже"
    ],
    correctAnswer: 1,
    explanation: "Prepáčte = Вибачте, nerozumiem = я не розумію",
    difficulty: 'A1',
    category: 'phrases'
  },
  {
    id: 13,
    question: "Яка правильна форма минулого часу? 'Včera som ___ v kine.' (byť)",
    options: ["bol", "budem", "som", "bývam"],
    correctAnswer: 0,
    explanation: "Som bol = Я був (минулий час від byť)",
    difficulty: 'A2',
    category: 'grammar'
  },
  {
    id: 14,
    question: "Перекладіть: 'Koľko to stojí?'",
    options: [
      "Де це знаходиться?",
      "Скільки це коштує?",
      "Як це працює?",
      "Що це таке?"
    ],
    correctAnswer: 1,
    explanation: "Koľko to stojí? = Скільки це коштує?",
    difficulty: 'A2',
    category: 'phrases'
  },
  {
    id: 15,
    question: "Оберіть правильний прийменник: 'Kniha je ___ stole.'",
    options: ["na", "v", "do", "z"],
    correctAnswer: 0,
    explanation: "Na stole = На столі",
    difficulty: 'A2',
    category: 'grammar'
  },
  {
    id: 16,
    question: "Що означає 'Mohol by som dostať účet, prosím?'",
    options: [
      "Можу я замовити їжу?",
      "Чи можна мені рахунок, будь ласка?",
      "Де знаходиться туалет?",
      "Чи є вільний столик?"
    ],
    correctAnswer: 1,
    explanation: "Účet = рахунок, mohol by som = чи міг би я",
    difficulty: 'B1',
    category: 'phrases'
  },
  {
    id: 17,
    question: "Оберіть правильну форму умовного способу: 'Keby som ___ čas, išiel by som s tebou.'",
    options: ["mám", "mal", "budem mať", "mával"],
    correctAnswer: 1,
    explanation: "Keby som mal = Якби я мав (умовний спосіб)",
    difficulty: 'B1',
    category: 'grammar'
  },
  {
    id: 18,
    question: "Перекладіть: 'Záleží mi na tom, aby si bol šťastný.'",
    options: [
      "Мені байдуже, чи ти щасливий",
      "Мені важливо, щоб ти був щасливий",
      "Я хочу бути щасливим",
      "Ти маєш бути щасливим"
    ],
    correctAnswer: 1,
    explanation: "Záleží mi na = Мені важливо, aby si bol = щоб ти був",
    difficulty: 'B1',
    category: 'comprehension'
  },
  {
    id: 19,
    question: "Яке слово НЕ є синонімом до 'pekný'?",
    options: ["krásny", "nádherný", "škaredý", "úžasný"],
    correctAnswer: 2,
    explanation: "Škaredý = потворний (антонім, не синонім)",
    difficulty: 'B1',
    category: 'vocabulary'
  },
  {
    id: 20,
    question: "Доповніть фразу: 'Niet ruže bez ___.'",
    options: ["kvetov", "tŕňov", "lístkov", "vône"],
    correctAnswer: 1,
    explanation: "Niet ruže bez tŕňov = Нема троянди без колючок (прислів'я)",
    difficulty: 'B1',
    category: 'phrases'
  },
  {
    id: 21,
    question: "Що означає вираз 'mať maslo na hlave'?",
    options: [
      "Бути голодним",
      "Мати провину за щось",
      "Бути розумним",
      "Мати гарне волосся"
    ],
    correctAnswer: 1,
    explanation: "Mať maslo na hlave = мати провину (ідіома)",
    difficulty: 'B2',
    category: 'phrases'
  },
  {
    id: 22,
    question: "Оберіть правильний варіант: 'Napriek tomu, ___ pršalo, išli sme von.'",
    options: ["keď", "že", "aby", "kým"],
    correctAnswer: 1,
    explanation: "Napriek tomu, že = Незважаючи на те, що",
    difficulty: 'B2',
    category: 'grammar'
  },
  {
    id: 23,
    question: "Перекладіть: 'Bola by som radšej zostala doma, keby som vedela, aké bude počasie.'",
    options: [
      "Я залишилася вдома через погану погоду",
      "Я б краще залишилася вдома, якби знала, яка буде погода",
      "Я хочу залишитися вдома завтра",
      "Погода була погана, тому я вдома"
    ],
    correctAnswer: 1,
    explanation: "Складне умовне речення з bola by som + keby som vedela",
    difficulty: 'B2',
    category: 'comprehension'
  },
  {
    id: 24,
    question: "Яке слово правильно доповнює речення? 'Tento problém si vyžaduje ___ prístup.'",
    options: ["komplexný", "komplexního", "komplexným", "komplexnej"],
    correctAnswer: 0,
    explanation: "Знахідний відмінок чоловічого роду: komplexný prístup",
    difficulty: 'B2',
    category: 'grammar'
  },
  {
    id: 25,
    question: "Що означає 'Kto druhému jamu kope, sám do nej padne'?",
    options: [
      "Хто рано встає, тому Бог дає",
      "Хто іншому яму копає, сам у неї впадає",
      "Без праці не виловиш рибку зі ставка",
      "Не відкладай на завтра те, що можна зробити сьогодні"
    ],
    correctAnswer: 1,
    explanation: "Словацьке прислів'я про те, що зло повертається до того, хто його чинить",
    difficulty: 'B2',
    category: 'comprehension'
  }
];

// Learning plans
const learningPlans = {
  A1: {
    level: 'A1',
    title: 'Початківець',
    description: 'Ви на початку свого шляху! Рекомендуємо почати з основ.',
    recommendedFormat: 'individual',
    formatName: 'Індивідуальні заняття',
    formatDescription: 'Персональний підхід для швидкого засвоєння базової лексики та граматики',
    price: '25 EUR / урок',
    duration: '3-4 місяці до рівня A2',
    features: [
      'Базова лексика (500+ слів)',
      'Прості граматичні конструкції',
      'Повсякденні фрази та вирази',
      'Правильна вимова з перших днів'
    ]
  },
  A2: {
    level: 'A2',
    title: 'Елементарний',
    description: 'У вас є базові знання! Час розвивати навички спілкування.',
    recommendedFormat: 'group',
    formatName: 'Групові заняття',
    formatDescription: 'Практика з однодумцями та структурована програма',
    price: 'від 13 EUR / урок',
    duration: '3-4 місяці до рівня B1',
    features: [
      'Розширення словникового запасу',
      'Граматика середнього рівня',
      'Розмовна практика в групі',
      'Читання та аудіювання'
    ]
  },
  B1: {
    level: 'B1',
    title: 'Середній',
    description: 'Чудовий прогрес! Ви вже можете спілкуватися на багато тем.',
    recommendedFormat: 'pair',
    formatName: 'Парні заняття',
    formatDescription: 'Інтенсивна практика діалогів з партнером',
    price: '15 EUR / урок',
    duration: '4-6 місяців до рівня B2',
    features: [
      'Складні граматичні конструкції',
      'Професійна лексика',
      'Дискусії на різні теми',
      'Підготовка до іспитів'
    ]
  },
  B2: {
    level: 'B2',
    title: 'Вище середнього',
    description: 'Відмінний рівень! Рекомендуємо практику з носіями мови.',
    recommendedFormat: 'club',
    formatName: 'Розмовний клуб',
    formatDescription: 'Жива розмова на актуальні теми для підтримки рівня',
    price: '10 EUR / зустріч',
    duration: 'Постійна практика',
    features: [
      'Вільне спілкування',
      'Ідіоми та сленг',
      'Культурні особливості',
      'Дискусії на складні теми'
    ]
  }
};

// Determine level function
function determineLevel(results: QuizResults): DifficultyLevel {
  const { levelScores } = results;
  const b2Accuracy = levelScores.B2.total > 0 ? levelScores.B2.correct / levelScores.B2.total : 0;
  const b1Accuracy = levelScores.B1.total > 0 ? levelScores.B1.correct / levelScores.B1.total : 0;
  const a2Accuracy = levelScores.A2.total > 0 ? levelScores.A2.correct / levelScores.A2.total : 0;
  const a1Accuracy = levelScores.A1.total > 0 ? levelScores.A1.correct / levelScores.A1.total : 0;

  if (b2Accuracy >= 0.6 && b1Accuracy >= 0.7) return 'B2';
  if (b1Accuracy >= 0.6 && a2Accuracy >= 0.7) return 'B1';
  if (a2Accuracy >= 0.6 && a1Accuracy >= 0.7) return 'A2';
  return 'A1';
}

// AnimatedElement component
const AnimatedElement = ({ children, animation = 'fade-in-up', delay = 0, className = '' }: {
  children: React.ReactNode;
  animation?: string;
  delay?: number;
  className?: string;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-animate ${animation} ${isVisible ? 'animate-in' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Progress Bar
const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#1E10C7] to-[#EE4E00] rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

// Question Card
const QuestionCard = ({
  question,
  selectedAnswer,
  onSelect,
  showResult
}: {
  question: Question;
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
  showResult: boolean;
}) => {
  const difficultyColors: Record<DifficultyLevel, string> = {
    'A1': 'bg-green-100 text-green-700',
    'A2': 'bg-blue-100 text-blue-700',
    'B1': 'bg-amber-100 text-amber-700',
    'B2': 'bg-red-100 text-red-700'
  };

  const categoryNames: Record<string, string> = {
    vocabulary: 'Лексика',
    grammar: 'Граматика',
    phrases: 'Фрази',
    comprehension: 'Розуміння'
  };

  return (
    <div className="animate-fadeIn mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${difficultyColors[question.difficulty]}`}>
          {question.difficulty}
        </span>
        <span className="text-gray-500 text-sm">
          {categoryNames[question.category]}
        </span>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-relaxed">
        {question.question}
      </h2>

      <div className="grid gap-3">
        {question.options.map((option, index) => {
          let buttonClass = "relative w-full p-4 text-left rounded-xl border-2 transition-all duration-200 cursor-pointer ";

          if (showResult) {
            if (index === question.correctAnswer) {
              buttonClass += "bg-green-50 border-green-400 text-green-900";
            } else if (index === selectedAnswer && index !== question.correctAnswer) {
              buttonClass += "bg-red-50 border-red-400 text-red-900";
            } else {
              buttonClass += "bg-gray-50 border-gray-200 text-gray-400";
            }
          } else if (selectedAnswer === index) {
            buttonClass += "bg-[#1E10C7]/10 border-[#1E10C7] text-gray-900 scale-[1.02] shadow-lg";
          } else {
            buttonClass += "bg-white border-gray-200 text-gray-900 hover:bg-gray-50 hover:border-[#1E10C7]/30";
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && onSelect(index)}
              disabled={showResult}
              className={buttonClass}
            >
              <span className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 text-sm font-bold flex-shrink-0">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-base font-medium">{option}</span>
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
        <div className="mt-5 p-4 rounded-xl bg-[#1E10C7]/5 border border-[#1E10C7]/20 animate-fadeIn">
          <p className="text-gray-700 text-sm font-medium">
            💡 {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

// Registration Form
const RegistrationForm = ({ onSubmit }: { onSubmit: (data: UserData) => void }) => {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    email: '',
    goal: 'general',
    studyTime: 'flexible'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      onSubmit(formData);
    }
  };

  return (
    <div className="max-w-lg mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#1E10C7] to-[#EE4E00] mb-6 shadow-xl">
          <BookOpen className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Тест на визначення рівня словацької
        </h1>
        <p className="text-gray-600 text-base">
          Пройдіть тест і дізнайтесь свій рівень володіння словацькою мовою.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Ваше ім'я
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-gray-100 border-2 border-transparent text-gray-900 placeholder-gray-400 focus:border-[#1E10C7] focus:outline-none transition-colors"
            placeholder="Введіть ваше ім'я"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-gray-100 border-2 border-transparent text-gray-900 placeholder-gray-400 focus:border-[#1E10C7] focus:outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Мета вивчення словацької
          </label>
          <select
            value={formData.goal}
            onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-gray-100 border-2 border-transparent text-gray-900 focus:border-[#1E10C7] focus:outline-none transition-colors cursor-pointer"
          >
            <option value="general">Загальне вивчення мови</option>
            <option value="work">Для роботи в Словаччині</option>
            <option value="study">Для навчання в університеті</option>
            <option value="citizenship">Для отримання громадянства</option>
            <option value="travel">Для подорожей</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Скільки часу готові приділяти навчанню?
          </label>
          <select
            value={formData.studyTime}
            onChange={(e) => setFormData({ ...formData, studyTime: e.target.value })}
            className="w-full px-4 py-3.5 rounded-xl bg-gray-100 border-2 border-transparent text-gray-900 focus:border-[#1E10C7] focus:outline-none transition-colors cursor-pointer"
          >
            <option value="minimal">1-2 години на тиждень</option>
            <option value="moderate">3-5 годин на тиждень</option>
            <option value="intensive">6+ годин на тиждень</option>
            <option value="flexible">Гнучкий графік</option>
          </select>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!formData.name || !formData.email}
          className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#EE4E00] text-white rounded-full font-bold text-lg hover:bg-[#EE4E00]/90 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Розпочати тест
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <p className="mt-6 text-center text-gray-500 text-sm">
        25 питань • ~10 хвилин • Автоматичне визначення рівня
      </p>
    </div>
  );
};

// Results Screen
const ResultsScreen = ({
  results,
  userData,
  onRestart
}: {
  results: QuizResults;
  userData: UserData;
  onRestart: () => void;
}) => {
  const percentage = Math.round((results.totalScore / questions.length) * 100);
  const plan = learningPlans[results.determinedLevel];

  const levelColors: Record<DifficultyLevel, string> = {
    'A1': 'from-green-400 to-green-600',
    'A2': 'from-blue-400 to-blue-600',
    'B1': 'from-amber-400 to-amber-600',
    'B2': 'from-red-400 to-red-600'
  };

  const formatIcons: Record<string, React.ReactNode> = {
    'individual': <GraduationCap className="w-8 h-8" />,
    'group': <Users className="w-8 h-8" />,
    'pair': <Users className="w-8 h-8" />,
    'club': <MessageCircle className="w-8 h-8" />
  };

  const categoryNames: Record<string, string> = {
    vocabulary: 'Лексика',
    grammar: 'Граматика',
    phrases: 'Фрази',
    comprehension: 'Розуміння'
  };

  return (
    <div className="max-w-2xl mx-auto animate-fadeIn">
      {/* Score Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-6 text-center">
        <div className={`inline-flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br ${levelColors[results.determinedLevel]} mb-6 shadow-2xl`}>
          <span className="text-4xl font-black text-white">{percentage}%</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {userData.name}, ваш рівень:
        </h1>

        <div className={`inline-block text-5xl font-black bg-gradient-to-r ${levelColors[results.determinedLevel]} bg-clip-text text-transparent mb-4`}>
          {results.determinedLevel} — {plan.title}
        </div>

        <p className="text-gray-600 text-lg mb-6">
          {plan.description}
        </p>

        <div className="text-gray-500">
          Правильних відповідей: <span className="font-bold text-gray-900">{results.totalScore}</span> з <span className="font-bold text-gray-900">{questions.length}</span>
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="w-6 h-6 text-[#1E10C7]" />
          Результати за категоріями
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(results.categoryScores).map(([category, score]) => (
            <div key={category} className="bg-gray-50 rounded-xl p-4">
              <div className="text-sm text-gray-500 mb-1">{categoryNames[category]}</div>
              <div className="text-2xl font-bold text-gray-900">
                {score.correct}/{score.total}
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#1E10C7] to-[#EE4E00] rounded-full"
                  style={{ width: `${score.total > 0 ? (score.correct / score.total) * 100 : 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Plan */}
      <div className="bg-gradient-to-br from-[#1E10C7] to-[#1E10C7]/80 rounded-3xl p-6 md:p-8 text-white mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#EE4E00]/20 rounded-full -ml-24 -mb-24" />

        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              {formatIcons[plan.recommendedFormat]}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-4 h-4 text-[#EE4E00]" />
                <span className="text-sm text-white/80">Рекомендований формат</span>
              </div>
              <h2 className="text-2xl font-bold">{plan.formatName}</h2>
              <p className="text-white/70">{plan.formatDescription}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-3xl font-black mb-1">{plan.price}</div>
              <div className="text-white/70 text-sm">Очікуваний час: {plan.duration}</div>
            </div>
            <ul className="space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-[#EE4E00] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => window.open('https://super-scone-d95613.netlify.app/#contact', '_blank')}
            className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#EE4E00] text-white rounded-full font-bold text-lg hover:bg-[#EE4E00]/90 transition-all duration-300 shadow-xl"
          >
            Записатись на безкоштовний урок
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onRestart}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-gray-900 text-gray-900 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          Пройти ще раз
        </button>

        <button
          onClick={() => window.open('https://super-scone-d95613.netlify.app', '_blank')}
          className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gray-100 text-gray-900 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300"
        >
          Повернутись на сайт
        </button>
      </div>
    </div>
  );
};

// Main Quiz Component
export default function QuizPage() {
  const [stage, setStage] = useState<'registration' | 'quiz' | 'results'>('registration');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<QuizResults['answers']>([]);
  const [questionStartTime, setQuestionStartTime] = useState<number>(Date.now());

  const handleRegistration = (data: UserData) => {
    setUserData(data);
    setStage('quiz');
    setQuestionStartTime(Date.now());
  };

  const calculateResults = (): QuizResults => {
    const levelScores: QuizResults['levelScores'] = {
      A1: { correct: 0, total: 0 },
      A2: { correct: 0, total: 0 },
      B1: { correct: 0, total: 0 },
      B2: { correct: 0, total: 0 }
    };

    const categoryScores: QuizResults['categoryScores'] = {
      vocabulary: { correct: 0, total: 0 },
      grammar: { correct: 0, total: 0 },
      phrases: { correct: 0, total: 0 },
      comprehension: { correct: 0, total: 0 }
    };

    let totalScore = 0;

    answers.forEach(answer => {
      const question = questions.find(q => q.id === answer.questionId);
      if (question) {
        levelScores[question.difficulty].total++;
        categoryScores[question.category].total++;

        if (answer.isCorrect) {
          totalScore++;
          levelScores[question.difficulty].correct++;
          categoryScores[question.category].correct++;
        }
      }
    });

    const results: QuizResults = {
      totalScore,
      levelScores,
      categoryScores,
      determinedLevel: 'A1',
      answers
    };

    results.determinedLevel = determineLevel(results);
    return results;
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    if (!showResult) {
      setShowResult(true);
      const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
      const timeSpent = Date.now() - questionStartTime;

      setAnswers([...answers, {
        questionId: questions[currentQuestion].id,
        selectedAnswer,
        isCorrect,
        timeSpent
      }]);
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setQuestionStartTime(Date.now());
      } else {
        setStage('results');
      }
    }
  };

  const handleRestart = () => {
    setStage('registration');
    setUserData(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setAnswers([]);
  };

  const currentScore = answers.filter(a => a.isCorrect).length;

  return (
    <div className="min-h-screen bg-gray-100 pt-8 pb-12 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        .scroll-animate { opacity: 0; }
        .scroll-animate.animate-in { opacity: 1; animation: fadeInUp 0.6s ease-out forwards; }
        select option { background: white; color: #1A1A1A; }
      `}</style>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#1E10C7]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#EE4E00]/5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 py-4 px-4 mb-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E10C7] to-[#EE4E00] flex items-center justify-center text-white font-bold shadow-lg">
              F
            </div>
            <span className="text-xl font-bold text-gray-900">FOCUS School</span>
          </div>

          {stage === 'quiz' && (
            <div className="flex items-center gap-4 text-sm">
              <span className="text-gray-500">
                Питання <span className="font-bold text-gray-900">{currentQuestion + 1}</span> з <span className="font-bold text-gray-900">{questions.length}</span>
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold">
                ✓ {currentScore}
              </span>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4">
        <div className="max-w-4xl mx-auto">
          {stage === 'registration' && (
            <RegistrationForm onSubmit={handleRegistration} />
          )}

          {stage === 'quiz' && (
            <div className="animate-fadeIn">
              <div className="mb-6">
                <ProgressBar current={currentQuestion + 1} total={questions.length} />
              </div>

              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl">
                <QuestionCard
                  question={questions[currentQuestion]}
                  selectedAnswer={selectedAnswer}
                  onSelect={setSelectedAnswer}
                  showResult={showResult}
                />

                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuestion}
                    disabled={selectedAnswer === null}
                    className={`inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                      selectedAnswer === null
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-[#EE4E00] text-white hover:bg-[#EE4E00]/90 shadow-xl hover:shadow-2xl'
                    }`}
                  >
                    {showResult
                      ? (currentQuestion < questions.length - 1 ? 'Далі' : 'Завершити')
                      : 'Перевірити'
                    }
                    {selectedAnswer !== null && <ArrowRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>
          )}

          {stage === 'results' && userData && (
            <ResultsScreen
              results={calculateResults()}
              userData={userData}
              onRestart={handleRestart}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          © 2025 FOCUS School — Онлайн школа словацької мови
        </div>
      </footer>
    </div>
  );
}
