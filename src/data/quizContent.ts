export type DifficultyLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';
export type QuestionCategory = 'grammar' | 'communication' | 'vocabulary' | 'reading' | 'writing';

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: DifficultyLevel;
  category: QuestionCategory;
}

interface LearningPlan {
  level: DifficultyLevel;
  title: string;
  description: string;
  recommendedFormat: 'individual' | 'group' | 'pair' | 'club';
  formatName: string;
  formatDescription: string;
  price: string;
  duration: string;
  features: string[];
}

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Встав правильне слово: Deti … v škole.',
    options: ['je', 'sme', 'sú', 'som'],
    correctAnswer: 2,
    explanation: 'Правильна відповідь: "sú". Це граматика рівня A1.',
    difficulty: 'A1',
    category: 'grammar',
  },
  {
    id: 2,
    question: 'Що означає словацьке слово "rúra"?',
    options: ['рука', 'піч', 'рух', 'ганчірка'],
    correctAnswer: 1,
    explanation: 'Правильна відповідь: "піч". Це лексичне питання рівня A1.',
    difficulty: 'A1',
    category: 'vocabulary',
  },
  {
    id: 3,
    question:
      'Prečítajte text a odpovedzte na otázku:\n\n"Mária vstáva o 7:00. O 7:30 raňajkuje a potom ide do práce. Pracuje od 8:00 do 16:00. Po práci ide do obchodu a potom cvičí v posilňovni."\n\nЩо робить Марія о 7:30?',
    options: ['Приймає душ', 'збирається', 'снідає', 'розчісується'],
    correctAnswer: 2,
    explanation: 'Правильна відповідь: "снідає". Це завдання на читання рівня A1.',
    difficulty: 'A1',
    category: 'reading',
  },
  {
    id: 4,
    question: 'Що сказати словацькою, якщо людина чхає?',
    options: ['Buď zdravý', 'Za zdravie', 'Na zdravie', 'Buď zdravie'],
    correctAnswer: 2,
    explanation: 'Правильна відповідь: "Na zdravie". Це комунікація рівня A1.',
    difficulty: 'A1',
    category: 'communication',
  },
  {
    id: 5,
    question: 'Вибери правильне речення:',
    options: ['mám rada plávať', 'rada plávam', 'rada plaváť', 'всі варіанти'],
    correctAnswer: 1,
    explanation: 'Правильна відповідь: "rada plávam". Це завдання на письмо рівня A1.',
    difficulty: 'A1',
    category: 'writing',
  },
  {
    id: 6,
    question: 'Встав правильне слово: Oči sú ...',
    options: ['hnedí', 'hnedý', 'hnedé'],
    correctAnswer: 2,
    explanation: 'Правильна відповідь: "hnedé". Це граматика рівня A2.',
    difficulty: 'A2',
    category: 'grammar',
  },
  {
    id: 7,
    question: 'Встав правильне слово: Kamarátka si ........ batožinu vo vlaku.',
    options: ['bola zabudla', 'zabudnula', 'zabudla', 'som zabudnula'],
    correctAnswer: 2,
    explanation: 'Правильна відповідь: "zabudla". Це граматика рівня A2.',
    difficulty: 'A2',
    category: 'grammar',
  },
  {
    id: 8,
    question: 'Перекладіть речення правильно: Вчора я зустрілась з друзями.',
    options: [
      'Včera som sa stretla s kamarátmi.',
      'Včera som sa stretnula s kamarátmi.',
      'Som včera sa stretla s kamarátmi.',
      'Ja stretla som sa s kamarátmi.',
    ],
    correctAnswer: 0,
    explanation: 'Правильна відповідь: "Včera som sa stretla s kamarátmi." Це письмо рівня A2.',
    difficulty: 'A2',
    category: 'writing',
  },
  {
    id: 9,
    question: 'Синонім до слова "skvele":',
    options: ['zle', 'výborne', 'pomaly', 'rýchle'],
    correctAnswer: 1,
    explanation: 'Правильна відповідь: "výborne". Це лексика рівня A2.',
    difficulty: 'A2',
    category: 'vocabulary',
  },
  {
    id: 10,
    question: 'Як сказати в ресторані: "Рахунок, будь ласка, заплатимо разом"?',
    options: [
      'Účet, prosím, zaplatíme spolu.',
      'Zaplatíme zvlášť, prosím.',
      'Môžeme si zobrať účet?',
      'Dajte nám účet, každý zvlášť.',
    ],
    correctAnswer: 0,
    explanation: 'Правильна відповідь: "Účet, prosím, zaplatíme spolu." Це комунікація рівня A2.',
    difficulty: 'A2',
    category: 'communication',
  },
  {
    id: 11,
    question: 'Vyberte správny tvar slovesa "ozvať sa":\n\nĎakujem za telefónne číslo, ..... zajtra.',
    options: ['ozvem sa', 'budem sa ozvať', 'sa ozvem', 'ozvam sa'],
    correctAnswer: 0,
    explanation: 'Правильна відповідь: "ozvem sa". Це граматика рівня B1.',
    difficulty: 'B1',
    category: 'grammar',
  },
  {
    id: 12,
    question: 'Ktorá zo štyroch viet je napísaná správne?',
    options: [
      'Včera som nič nevarila, som sa najedla v reštaurácii.',
      'Včera som nič neuvarila, naobedovala som sa v reštaurácii.',
      'Nič som včera nepovarila, som mala obed v reštaurácii.',
      'Obedovala som v reštaurácii, bo včera nič som neuvarila.',
    ],
    correctAnswer: 1,
    explanation:
      'Правильна відповідь: "Včera som nič neuvarila, naobedovala som sa v reštaurácii." Це письмо рівня B1.',
    difficulty: 'B1',
    category: 'writing',
  },
  {
    id: 13,
    question: 'Підбери синонім до слова: "náročný" →',
    options: ['ťažký', 'jednoduchý', 'nudný'],
    correctAnswer: 0,
    explanation: 'Правильна відповідь: "ťažký". Це лексика рівня B1.',
    difficulty: 'B1',
    category: 'vocabulary',
  },
  {
    id: 14,
    question: 'Встав слово у речення: Ak chceš byť úspešný, musíš prevziať ____.',
    options: ['podmienky', 'zodpovednosť', 'zákazníka'],
    correctAnswer: 1,
    explanation: 'Правильна відповідь: "zodpovednosť". Це лексика рівня B1.',
    difficulty: 'B1',
    category: 'vocabulary',
  },
  {
    id: 15,
    question: 'Яке речення є правильним?',
    options: [
      'Mám rád pracovať na záhrade.',
      'Rád pracujem na záhrade.',
      'Mám rád pracujem na záhrade.',
    ],
    correctAnswer: 1,
    explanation:
      'У джерелі правильна відповідь позначена як "Rád pracujem na záhrade.", тому тут питання нормалізоване як завдання на правильне речення.',
    difficulty: 'B1',
    category: 'writing',
  },
  {
    id: 16,
    question: 'Vyberte správny tvar slovesa "prečítať si":\n\n- Poslal som ti mail.\n- Ďakujem, už…',
    options: ['prečítal si ho.', 'som si prečítal ho.', 'prečítal som si ho.', 'som si ho prečítal.'],
    correctAnswer: 3,
    explanation: 'Правильна відповідь: "som si ho prečítal." Це граматика рівня B2.',
    difficulty: 'B2',
    category: 'grammar',
  },
  {
    id: 17,
    question: 'Vyberte správnu možnosť: Na parkovisku ...',
    options: [
      'stoja dva motorky a dve autobusy',
      'parkujú veľa áut',
      'stoja dva policajné autá',
      'parkuje niekoľko automobilov',
    ],
    correctAnswer: 3,
    explanation:
      'Найприродніший і граматично коректний варіант тут — "parkuje niekoľko automobilov".',
    difficulty: 'B2',
    category: 'grammar',
  },
  {
    id: 18,
    question:
      'Vyberte vhodné slovo для пропуску 1:\n\nŽivot ho priviedol až k jeho 1 ____ cieľu, ktorý si splnil. Vždy sa snaží o to, aby ho mali ľudia radi.',
    options: ['vyštudovanému', 'vysnívanému', 'vytvorenému'],
    correctAnswer: 1,
    explanation: 'Правильна відповідь: "vysnívanému". Це лексика рівня B2.',
    difficulty: 'B2',
    category: 'vocabulary',
  },
  {
    id: 19,
    question:
      'Vyberte vhodné слово для пропуску 2:\n\nOn nie je ten 2 ____ človeka, ktorý za vami príde a bude sa vnucovať len pre peniaze.',
    options: ['tip', 'typ', 'štýl'],
    correctAnswer: 1,
    explanation: 'Правильна відповідь: "typ". Це лексика рівня B2.',
    difficulty: 'B2',
    category: 'vocabulary',
  },
  {
    id: 20,
    question:
      'Vyberte vhodné слово для пропуску 3:\n\nNaozaj chce pre druhých dobre. Ľuďom 3 ____ všemožné cviky a tipy k lepšej a rýchlejšej ceste k vysnívanej postave.',
    options: ['prednáša', 'venuje', 'ukazuje'],
    correctAnswer: 2,
    explanation: 'Правильна відповідь: "ukazuje". Це лексика рівня B2.',
    difficulty: 'B2',
    category: 'vocabulary',
  },
  {
    id: 21,
    question:
      'Vyberte správnu možnosť:\n\nVyskytol sa vážny problém, ktorý ____ okamžité riešenie. Už na tom pracujeme.',
    options: ['požiada', 'požaduje', 'si vyžiada', 'si vyžaduje'],
    correctAnswer: 3,
    explanation: 'Правильна відповідь: "si vyžaduje". Це просунутий рівень C1.',
    difficulty: 'C1',
    category: 'vocabulary',
  },
  {
    id: 22,
    question:
      'Vyberte správну можність:\n\nEšte ____ nejaké záležitosti pred zajtrajším stretnutím s dôležitým klientom.',
    options: ['zoberieme', 'vyberieme', 'preberieme', 'oberieme'],
    correctAnswer: 2,
    explanation: 'Правильна відповідь: "preberieme". Це просунутий рівень C1.',
    difficulty: 'C1',
    category: 'vocabulary',
  },
  {
    id: 23,
    question:
      'Vyberte správну можність:\n\n____ všetci pracovníci, aby referovali o stave rozpracovaných úloh.',
    options: ['rozchádzajú', 'vychádzajú', 'vchádzajú', 'schádzajú'],
    correctAnswer: 3,
    explanation: 'Правильна відповідь: "schádzajú". Це просунутий рівень C1.',
    difficulty: 'C1',
    category: 'vocabulary',
  },
];

export const learningPlans: Record<DifficultyLevel, LearningPlan> = {
  A1: {
    level: 'A1',
    title: 'Початківець',
    description: 'У вас стартовий рівень. Найкраще спрацює спокійний розбір базової граматики, побутової лексики та простих діалогів.',
    recommendedFormat: 'individual',
    formatName: 'Індивідуальні заняття',
    formatDescription: 'Персональний темп, багато підтримки та фокус на сильній базі без перевантаження.',
    price: 'від 18 EUR / урок',
    duration: '2-4 місяці до впевненого A2',
    features: [
      'Базова лексика для життя у Словаччині',
      'Прості граматичні конструкції',
      'Розмовні шаблони на щодень',
      'Правильна вимова з самого старту',
    ],
  },
  A2: {
    level: 'A2',
    title: 'Базовий',
    description: 'Ви вже орієнтуєтесь у простих темах. Далі варто розширювати словниковий запас і стабілізувати граматику в мовленні.',
    recommendedFormat: 'group',
    formatName: 'Групові заняття',
    formatDescription: 'Живий темп, практика з одногрупниками та системна програма переходу до впевненого B1.',
    price: 'від 13 EUR / урок',
    duration: '3-4 місяці до рівня B1',
    features: [
      'Розширення словникового запасу',
      'Граматика середнього рівня',
      'Практика діалогів у групі',
      'Читання та розуміння коротких текстів',
    ],
  },
  B1: {
    level: 'B1',
    title: 'Середній',
    description: 'Ви вже можете спілкуватися на багато побутових тем. Тепер важливо допрацьовувати точність і впевненість у складніших фразах.',
    recommendedFormat: 'pair',
    formatName: 'Парні заняття',
    formatDescription: 'Інтенсивна мовна практика, більше говоріння і швидший прогрес у реальних ситуаціях.',
    price: 'від 13 EUR / урок',
    duration: '4-6 місяців до рівня B2',
    features: [
      'Складніші граматичні моделі',
      'Лексика для роботи та навчання',
      'Розмовна практика у парах',
      'Письмові формулювання без типових помилок',
    ],
  },
  B2: {
    level: 'B2',
    title: 'Вище середнього',
    description: 'У вас уже сильна база. На цьому етапі найкраще працює жива практика, нюанси слововживання та швидкість формулювання думок.',
    recommendedFormat: 'club',
    formatName: 'Розмовний клуб + міні-група',
    formatDescription: 'Більше живого мовлення, складніші теми та шліфування точності в реальних діалогах.',
    price: 'від 62 EUR / місяць',
    duration: 'Постійна практика до впевненого просунутого рівня',
    features: [
      'Живе спілкування на складні теми',
      'Точність у лексиці та граматиці',
      'Робота з нюансами слововживання',
      'Підготовка до професійного середовища',
    ],
  },
  C1: {
    level: 'C1',
    title: 'Просунутий',
    description: 'У вас уже дуже впевнений рівень. Тут корисно шліфувати стиль, гнучкість мовлення та професійну або академічну лексику.',
    recommendedFormat: 'club',
    formatName: 'Індивідуальний супровід + розмовний клуб',
    formatDescription: 'Точкова робота над стилем, просунутою лексикою та природністю мовлення у складних контекстах.',
    price: 'за запитом',
    duration: 'Індивідуальна траєкторія',
    features: [
      'Просунута лексика та колокації',
      'Нюанси стилю та формальності',
      'Аргументація і складні теми',
      'Підтримка високого рівня через живу практику',
    ],
  },
};

export function determineLevel(
  levelScores: Record<DifficultyLevel, { correct: number; total: number }>
): DifficultyLevel {
  const score = (level: DifficultyLevel) =>
    levelScores[level].total > 0 ? levelScores[level].correct / levelScores[level].total : 0;

  const a1 = score('A1');
  const a2 = score('A2');
  const b1 = score('B1');
  const b2 = score('B2');
  const c1 = score('C1');

  if (c1 >= 0.67 && b2 >= 0.6) return 'C1';
  if (b2 >= 0.6 && b1 >= 0.6) return 'B2';
  if (b1 >= 0.6 && a2 >= 0.6) return 'B1';
  if (a2 >= 0.6 && a1 >= 0.6) return 'A2';
  return 'A1';
}
