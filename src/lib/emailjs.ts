export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_93390z3',
  PUBLIC_KEY: '0lRqySXMIafpQ2Q7e',
  TEMPLATES: {
    TRIAL_SIGNUP: 'template_vyiot1d',
    QUIZ_RESULTS: 'template_lr3i6km',
  },
};

type EmailParams = Record<string, string | number>;

async function sendEmail(templateId: string, params: EmailParams): Promise<void> {
  const payload = {
    service_id: EMAILJS_CONFIG.SERVICE_ID,
    template_id: templateId,
    user_id: EMAILJS_CONFIG.PUBLIC_KEY,
    template_params: params,
  };

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`EmailJS error: ${res.status}`);
  }
}

export interface TrialSignupParams {
  name: string;
  contact: string;
  email: string;
}

export interface QuizResultParams {
  name: string;
  email: string;
  goal: string;
  studyTime: string;
  level: string;
  levelTitle: string;
  score: string;
  totalQuestions: string;
  percentage: string;
  recommendedFormat: string;
  price: string;
  duration: string;
  vocabScore: string;
  grammarScore: string;
  communicationScore: string;
  readingScore: string;
  writingScore: string;
}

export function sendTrialSignupEmail(params: TrialSignupParams): Promise<void> {
  return sendEmail(EMAILJS_CONFIG.TEMPLATES.TRIAL_SIGNUP, {
    to_name: 'FOCUS School',
    from_name: params.name,
    from_contact: params.contact,
    from_email: params.email || 'не вказано',
    reply_to: params.email || params.contact,
  });
}

export function sendQuizResultEmail(params: QuizResultParams): Promise<void> {
  return sendEmail(EMAILJS_CONFIG.TEMPLATES.QUIZ_RESULTS, {
    to_name: 'FOCUS School',
    student_name: params.name,
    student_email: params.email,
    student_goal: params.goal,
    student_study_time: params.studyTime,
    level: params.level,
    level_title: params.levelTitle,
    score: params.score,
    total_questions: params.totalQuestions,
    percentage: params.percentage,
    recommended_format: params.recommendedFormat,
    price: params.price,
    duration: params.duration,
    vocab_score: params.vocabScore,
    grammar_score: params.grammarScore,
    communication_score: params.communicationScore,
    reading_score: params.readingScore,
    writing_score: params.writingScore,
    reply_to: params.email,
  });
}