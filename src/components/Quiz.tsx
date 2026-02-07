import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, XCircle, BookOpen, GraduationCap, Users, MessageCircle, Star, Target } from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import DecorativeElement from './DecorativeElement';

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

const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  const percentage = (current / total) * 100;
  return (
    <div className="relative">
      <div className="w-full h-4 bg-brand-light rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-brand-blue via-brand-blue to-brand-orange rounded-full transition-all duration-500 ease-out shadow-lg"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="text-sm font-bold text-brand-dark/70">
          Питання {current} з {total}
        </span>
        <span className="text-sm font-bold text-brand-blue">
          {Math.round(percentage)}%
        </span>
      </div>
    </div>
  );
};

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
      <div className="flex items-center gap-3 mb-6">
        <span className={`px-4 py-2 rounded-xl text-xs font-black ${difficultyColors[question.difficulty]}`}>
          {question.difficulty}
        </span>
        <span className="text-brand-dark/50 text-sm font-semibold">
          {categoryNames[question.category]}
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-8 leading-tight">
        {question.question}
      </h2>

      <div className="grid gap-4">
        {question.options.map((option, index) => {
          let buttonClass = "relative w-full p-5 text-left rounded-2xl border-2 transition-all duration-300 cursor-pointer ";

          if (showResult) {
            if (index === question.correctAnswer) {
              buttonClass += "bg-green-50 border-green-500 text-green-900 shadow-lg";
            } else if (index === selectedAnswer && index !== question.correctAnswer) {
              buttonClass += "bg-red-50 border-red-500 text-red-900 shadow-lg";
            } else {
              buttonClass += "bg-brand-light border-brand-light text-brand-dark/40";
            }
          } else if (selectedAnswer === index) {
            buttonClass += "bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 border-brand-blue text-brand-dark scale-[1.02] shadow-xl";
          } else {
            buttonClass += "bg-white border-brand-light text-brand-dark hover:bg-brand-light hover:border-brand-blue/30 hover:shadow-md hover:-translate-y-0.5";
          }

          return (
            <button
              key={index}
              onClick={() => !showResult && onSelect(index)}
              disabled={showResult}
              className={buttonClass}
            >
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
            <p className="text-brand-dark font-medium text-base pt-1">
              {question.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

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
    <div className="max-w-2xl mx-auto">
      <AnimatedElement animation="fade-in-down">
        <div className="text-center mb-8">
          <div className="relative inline-block w-full max-w-md mx-auto mb-4">
            <img
              src="/full_dekor/13_trim.png"
              alt="Quiz decoration"
              className="w-full h-auto object-contain"
            />
            <div className="absolute bottom-[15%] left-0 right-0 px-8">
              <h1 className="text-xl md:text-2xl font-black text-brand-dark leading-tight">
                Тест на визначення<br />рівня <span className="font-pangolin text-brand-orange">словацької</span>
              </h1>
            </div>
          </div>
          <p className="text-base md:text-lg text-brand-dark/70 max-w-xl mx-auto leading-relaxed">
            Пройдіть тест і дізнайтесь свій рівень володіння словацькою мовою
          </p>
        </div>
      </AnimatedElement>

      <AnimatedElement animation="scale-in" delay={100}>
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl space-y-6 hover:shadow-3xl transition-all duration-300">
          <div>
            <label className="block text-sm font-bold text-brand-dark mb-3">
              Ваше ім'я
            </label>
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
            <label className="block text-sm font-bold text-brand-dark mb-3">
              Email
            </label>
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
            <label className="block text-sm font-bold text-brand-dark mb-3">
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
            <label className="block text-sm font-bold text-brand-dark mb-3">
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

          <button
            onClick={handleSubmit}
            disabled={!formData.name || !formData.email}
            className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-brand-orange text-white rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Розпочати тест
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-brand-dark/60">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-blue" />
            <span className="font-medium">25 питань</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-orange" />
            <span className="font-medium">~10 хвилин</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="font-medium">Визначення рівня</span>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

const ResultsScreen = ({
  results,
  userData,
  onRestart,
  onBackToSite
}: {
  results: QuizResults;
  userData: UserData;
  onRestart: () => void;
  onBackToSite?: () => void;
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
    <div className="max-w-3xl mx-auto">
      <AnimatedElement animation="scale-in">
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl mb-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/5 rounded-full -ml-24 -mb-24 blur-3xl" />

          <div className="relative z-10">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-orange/20 rounded-full blur-2xl" />
              <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${levelColors[results.determinedLevel]} flex items-center justify-center shadow-2xl`}>
                <span className="text-5xl font-black text-white">{percentage}%</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-dark mb-4">
              {userData.name}, ваш рівень:
            </h1>

            <div className={`inline-block text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r ${levelColors[results.determinedLevel]} bg-clip-text text-transparent mb-6`}>
              {results.determinedLevel} — {plan.title}
            </div>

            <p className="text-lg md:text-xl text-brand-dark/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              {plan.description}
            </p>

            <div className="inline-flex items-center gap-3 px-6 py-3 bg-brand-light rounded-full">
              <span className="text-brand-dark/60 font-medium">Правильних відповідей:</span>
              <span className="text-2xl font-black text-brand-blue">{results.totalScore}</span>
              <span className="text-brand-dark/60 font-medium">з</span>
              <span className="text-2xl font-black text-brand-orange">{questions.length}</span>
            </div>
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement animation="fade-in-up" delay={100}>
        <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-brand-dark mb-8 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-brand-blue" />
            </div>
            Результати за категоріями
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(results.categoryScores).map(([category, score]) => (
              <div key={category} className="bg-brand-light rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-sm font-bold text-brand-dark/60 mb-2 uppercase tracking-wide">{categoryNames[category]}</div>
                <div className="text-4xl font-black text-brand-dark mb-3">
                  {score.correct}<span className="text-2xl text-brand-dark/40">/{score.total}</span>
                </div>
                <div className="w-full h-3 bg-white rounded-full mt-3 overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-brand-blue to-brand-orange rounded-full transition-all duration-500"
                    style={{ width: `${score.total > 0 ? (score.correct / score.total) * 100 : 0}%` }}
                  />
                </div>
                <div className="text-sm font-bold text-brand-blue mt-2">
                  {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedElement>

      <AnimatedElement animation="fade-in-up" delay={200}>
        <div className="bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue/90 rounded-[2rem] p-8 md:p-12 text-white mb-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/20 rounded-full -ml-32 -mb-32 blur-3xl" />

          <div className="relative z-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-20 h-20 rounded-[1.5rem] bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-xl">
                {formatIcons[plan.recommendedFormat]}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-5 h-5 text-brand-orange" />
                  <span className="text-sm font-bold text-white/80 uppercase tracking-wide">Рекомендований формат</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-2">{plan.formatName}</h2>
                <p className="text-lg text-white/80 leading-relaxed">{plan.formatDescription}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-5xl font-black mb-2">{plan.price}</div>
                <div className="text-white/80 text-base font-medium">Очікуваний час: {plan.duration}</div>
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
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }
              }}
              className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-orange text-white rounded-full font-bold text-xl hover:bg-brand-orange/90 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
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
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border-2 border-brand-dark text-brand-dark rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-all duration-300 shadow-xl transform hover:-translate-y-1"
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
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-light text-brand-dark rounded-full font-bold text-lg hover:bg-brand-dark hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1"
        >
          Повернутись на сайт
        </button>
      </div>
    </div>
  );
};

export default function Quiz({ onBackToSite }: { onBackToSite?: () => void }) {
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
    <div className="min-h-screen bg-brand-light pb-16 relative overflow-hidden">
      <DecorativeElement
        imageSrc="/dekor/24.png"
        position="top-right"
        size="medium"
        animation="float"
      />
      <DecorativeElement
        imageSrc="/dekor/40.png"
        position="bottom-left"
        size="large"
        animation="sway"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-[32rem] h-[32rem] bg-brand-blue/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-[28rem] h-[28rem] bg-brand-orange/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-br from-brand-blue/3 to-brand-orange/3 rounded-full blur-3xl" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button onClick={onBackToSite} className="flex items-center group cursor-pointer">
              <img
                src="/logo/img_3159.png"
                alt="FOCUS School"
                className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </button>

            {stage === 'quiz' && (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-brand-light rounded-full">
                  <span className="text-brand-dark/70 text-sm font-medium">
                    Питання <span className="font-bold text-brand-dark">{currentQuestion + 1}</span>/<span className="font-bold text-brand-orange">{questions.length}</span>
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
              className="px-5 py-2.5 bg-brand-blue text-white rounded-full font-semibold hover:bg-brand-blue/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 text-sm"
            >
              На сайт
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 px-4 pt-24">
        <div className="max-w-5xl mx-auto">
          {stage === 'registration' && (
            <RegistrationForm onSubmit={handleRegistration} />
          )}

          {stage === 'quiz' && (
            <div>
              <AnimatedElement animation="fade-in-down">
                <div className="mb-8">
                  <ProgressBar current={currentQuestion + 1} total={questions.length} />
                </div>
              </AnimatedElement>

              <AnimatedElement animation="scale-in" delay={100}>
                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <QuestionCard
                    question={questions[currentQuestion]}
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
                          : 'bg-brand-orange text-white hover:bg-brand-orange/90 shadow-xl hover:shadow-2xl transform hover:-translate-y-1'
                      }`}
                    >
                      {showResult
                        ? (currentQuestion < questions.length - 1 ? 'Далі' : 'Завершити')
                        : 'Перевірити'
                      }
                      {selectedAnswer !== null && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </button>
                  </div>
                </div>
              </AnimatedElement>
            </div>
          )}

          {stage === 'results' && userData && (
            <ResultsScreen
              results={calculateResults()}
              userData={userData}
              onRestart={handleRestart}
              onBackToSite={onBackToSite}
            />
          )}
        </div>
      </main>

      <footer className="relative z-10 mt-12 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img
              src="/logo/img_3159.png"
              alt="FOCUS School"
              className="h-12 w-auto"
            />
            <p className="text-white/50 text-sm">
              2026 FOCUS School. Всі права захищені.
            </p>
            <p className="text-white/30 text-sm">
              ФОКУС. ДІЯ. РЕЗУЛЬТАТ.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
