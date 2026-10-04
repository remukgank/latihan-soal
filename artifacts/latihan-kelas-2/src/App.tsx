import { type ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';
import { ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, CircleHelp, Dumbbell, GraduationCap, Heart, Lightbulb, RotateCcw, Sparkles, Star } from 'lucide-react';
import { quizBank, type Question, type SubjectId } from './question-bank';

const queryClient = new QueryClient();

type Answers = Record<string, string | number>;

const subjectInfo = {
  pai: {
    name: 'Pendidikan Agama Islam',
    shortName: 'PAI',
    description: 'Belajar tentang ibadah, akhlak baik, dan kisah para nabi.',
    color: 'pai',
  },
  pjok: {
    name: 'Pendidikan Jasmani, Olahraga, dan Kesehatan',
    shortName: 'PJOK',
    description: 'Berlatih gerak, permainan, hidup sehat, dan menjaga keselamatan.',
    color: 'pjok',
  },
} satisfies Record<SubjectId, { name: string; shortName: string; description: string; color: string }>;

function normalizeAnswer(value: string) {
  return value.toLocaleLowerCase('id-ID').trim().replace(/[.,!?'"`]/g, '').replace(/\s+/g, ' ');
}

function isCorrect(question: Question, answer: string | number | undefined) {
  if (question.type === 'choice') return answer === question.answer;
  if (typeof answer !== 'string') return false;
  const cleaned = normalizeAnswer(answer);
  return question.accepted.some((item) => normalizeAnswer(item) === cleaned);
}

function Home() {
  const [subject, setSubject] = useState<SubjectId | null>(null);
  const [started, setStarted] = useState(false);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<Answers>({});
  const questions = subject ? quizBank[subject] : [];
  const choiceQuestions = questions.filter((question) => question.type === 'choice');
  const shortQuestions = questions.filter((question) => question.type === 'short');
  const filledCount = questions.reduce((count, question) => {
    const answer = answers[question.id];
    return count + (typeof answer === 'number' || (typeof answer === 'string' && answer.trim().length > 0) ? 1 : 0);
  }, 0);
  const score = checked ? questions.filter((question) => isCorrect(question, answers[question.id])).length : 0;
  const remaining = questions.length - filledCount;

  const chooseSubject = (nextSubject: SubjectId) => {
    if (subject !== nextSubject) setAnswers({});
    setSubject(nextSubject);
  };

  const beginQuiz = () => {
    setAnswers({});
    setChecked(false);
    setStarted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setStarted(false);
    setChecked(false);
    setAnswers({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setAnswer = (id: string, value: string | number) => {
    setAnswers((current) => ({ ...current, [id]: value }));
  };

  const submitAnswers = () => {
    if (filledCount !== 35) return;
    setChecked(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand" data-testid="text-brand">
          <div className="brand-mark"><BookOpen size={23} strokeWidth={2.5} /></div>
          <span>Pojok Latihan</span>
        </div>
        <div className="top-note"><GraduationCap size={17} /> Teman belajar kelas 2</div>
      </header>

      <div className="page-wrap">
        {!started ? (
          <>
            <section className="intro" aria-labelledby="welcome-title">
              <div>
                <div className="eyebrow"><Sparkles size={14} /> Belajar pelan-pelan, pasti bisa</div>
                <h1 id="welcome-title">Siap berlatih<br /><span>hari ini?</span></h1>
                <p>Pilih pelajaran yang ingin kamu coba. Jawab dengan santai, lalu kita lihat hasilnya bersama.</p>
              </div>
              <div className="hero-art" aria-hidden="true">
                <span className="spark one"><Star size={20} fill="currentColor" /></span>
                <span className="spark two"><Heart size={19} fill="currentColor" /></span>
                <div className="sun"><BookOpen size={61} strokeWidth={1.7} /></div>
                <div className="book-stack"><div className="book" /><div className="book" /><div className="book" /></div>
              </div>
            </section>

            <section className="content-section" aria-labelledby="choose-title">
              <div className="section-head">
                <div><h2 id="choose-title">Pilih pelajaran</h2><p>Setiap latihan berisi 25 pilihan ganda dan 10 isian.</p></div>
              </div>
              <div className="subject-grid">
                {(['pai', 'pjok'] as SubjectId[]).map((id) => {
                  const info = subjectInfo[id];
                  const selected = subject === id;
                  return (
                    <button
                      type="button"
                      className={`subject-card ${selected ? 'selected' : ''}`}
                      onClick={() => chooseSubject(id)}
                      aria-pressed={selected}
                      data-testid={`button-subject-${id}`}
                      key={id}
                    >
                      <div className="subject-top">
                        <div className={`subject-icon ${info.color}`}>
                          {id === 'pai' ? <BookOpen size={26} /> : <Dumbbell size={26} />}
                        </div>
                        <span className="subject-tag">{info.shortName} · 35 soal</span>
                      </div>
                      <h3>{info.name}</h3>
                      <p>{info.description}</p>
                      <ArrowRight className="subject-arrow" size={20} />
                    </button>
                  );
                })}
              </div>
              <div className="start-row">
                <div className="start-copy">
                  <Lightbulb size={23} />
                  <div><strong>{subject ? `${subjectInfo[subject].shortName} siap dimulai` : 'Pilih pelajaran lebih dulu'}</strong>
                    {subject ? 'Kamu bisa mengubah jawaban sebelum hasil diperiksa.' : 'Baca soal baik-baik. Kamu boleh mengubah jawaban nanti.'}
                  </div>
                </div>
                <button className="primary-btn" type="button" disabled={!subject} onClick={beginQuiz} data-testid="button-start-quiz">
                  Mulai latihan <ArrowRight size={18} />
                </button>
              </div>
            </section>
            <footer className="site-footer">Latihan kecil hari ini, langkah hebat untuk besok.</footer>
          </>
        ) : checked ? (
          <ResultView
            subject={subject!}
            answers={answers}
            score={score}
            onRetry={beginQuiz}
            onSwitch={goHome}
          />
        ) : (
          <section aria-label={`Latihan ${subjectInfo[subject!].name}`}>
            <div className="quiz-header">
              <button type="button" className="back-btn" onClick={goHome} data-testid="button-back-subject">
                <ArrowLeft size={18} /> Ganti pelajaran
              </button>
              <div className="quiz-subject">
                {subject === 'pai' ? <BookOpen size={21} /> : <Dumbbell size={21} />}
                {subjectInfo[subject!].shortName}
              </div>
            </div>
            <div className="progress-panel" aria-live="polite" data-testid="status-progress">
              <div className="progress-top">
                <span>Sudah dijawab <span className="progress-count">{filledCount} dari 35</span></span>
                <span>{remaining === 0 ? 'Semua terisi' : `Tersisa ${remaining} soal`}</span>
              </div>
              <div className="progress-track" role="progressbar" aria-label="Kemajuan menjawab" aria-valuemin={0} aria-valuemax={35} aria-valuenow={filledCount}>
                <div className="progress-fill" style={{ width: `${(filledCount / 35) * 100}%` }} />
              </div>
            </div>
            <div className="quiz-intro">
              <div><h1>Yuk, kerjakan sampai selesai!</h1><p>Pilih satu jawaban untuk setiap soal pilihan ganda. Untuk isian, tulis jawaban singkat.</p></div>
              <div className="count-pill">35 soal · tanpa batas waktu</div>
            </div>

            <QuestionSection
              title="Pilihan ganda"
              label="25 SOAL"
              questions={choiceQuestions}
              answers={answers}
              onAnswer={setAnswer}
            />
            <QuestionSection
              title="Isian singkat"
              label="10 SOAL"
              questions={shortQuestions}
              answers={answers}
              onAnswer={setAnswer}
            />
            <div className="submit-bar">
              <div className="submit-hint">
                <strong>{remaining === 0 ? 'Semua jawaban sudah terisi.' : `Masih ada ${remaining} soal yang kosong.`}</strong>
                Jawaban bisa diubah sebelum diperiksa.
              </div>
              <button type="button" className="primary-btn" onClick={submitAnswers} disabled={filledCount !== 35} data-testid="button-check-answers">
                Cek Jawaban <Check size={18} />
              </button>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function QuestionSection({
  title,
  label,
  questions,
  answers,
  onAnswer,
}: {
  title: string;
  label: string;
  questions: Question[];
  answers: Answers;
  onAnswer: (id: string, value: string | number) => void;
}) {
  return (
    <section className="question-section" aria-label={title}>
      <div className="question-title"><h2>{title}</h2><span>{label}</span></div>
      <div className="question-list">
        {questions.map((question, index) => {
          const itemNumber = index + 1;
          return (
            <article className="question-card" key={question.id} data-testid={`card-question-${question.id}`}>
              <div className="question-topline">
                <span className="number-badge">{itemNumber}</span>
                <div className="question-prompt">{question.prompt}</div>
              </div>
              {question.type === 'choice' ? (
                <div className="answer-options" role="group" aria-label={`Jawaban soal ${itemNumber}`}>
                  {question.options.map((option, optionIndex) => (
                    <button
                      type="button"
                      className={`option-btn ${answers[question.id] === optionIndex ? 'selected' : ''}`}
                      onClick={() => onAnswer(question.id, optionIndex)}
                      aria-pressed={answers[question.id] === optionIndex}
                      data-testid={`button-answer-${question.id}-${optionIndex}`}
                      key={option}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + optionIndex)}</span>
                      <span>{option}</span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="short-input-wrap">
                  <input
                    className="short-input"
                    type="text"
                    value={typeof answers[question.id] === 'string' ? answers[question.id] as string : ''}
                    onChange={(event) => onAnswer(question.id, event.target.value)}
                    placeholder="Tulis jawabanmu di sini"
                    aria-label={`Jawaban soal isian ${itemNumber}`}
                    data-testid={`input-answer-${question.id}`}
                  />
                  <p className="short-hint">Tulis jawaban singkat dengan kata-katamu.</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ResultView({
  subject,
  answers,
  score,
  onRetry,
  onSwitch,
}: {
  subject: SubjectId;
  answers: Answers;
  score: number;
  onRetry: () => void;
  onSwitch: () => void;
}) {
  const questions = quizBank[subject];
  const correctCount = questions.filter((question) => isCorrect(question, answers[question.id])).length;
  const missedCount = questions.length - correctCount;
  const message = score >= 30 ? 'Hebat sekali, kamu sudah banyak menguasai!' : score >= 20 ? 'Bagus! Terus berlatih, ya.' : 'Terima kasih sudah mencoba. Yuk, belajar lagi!';
  return (
    <section aria-label="Hasil latihan">
      <div className="quiz-header">
        <div className="quiz-subject">{subject === 'pai' ? <BookOpen size={21} /> : <Dumbbell size={21} />}{subjectInfo[subject].shortName} · hasil latihan</div>
        <span className="subject-tag">35 soal selesai</span>
      </div>
      <div className="result-hero" data-testid="panel-quiz-result">
        <div className="result-seal"><CheckCircle2 size={40} /></div>
        <h1>{score >= 30 ? 'Keren sekali!' : score >= 20 ? 'Kamu sudah berusaha!' : 'Latihan yang bagus!'}</h1>
        <p>{message}</p>
        <div className="score-line"><span className="score-big" data-testid="text-score">{score}</span><span className="score-detail">dari 35 jawaban benar</span></div>
        <div className="result-metrics">
          <span className="metric good">{correctCount} benar</span>
          <span className="metric missed">{missedCount} perlu dipelajari lagi</span>
        </div>
      </div>
      <div className="review-head">
        <div><h2>Ulas jawaban</h2><p>Lihat jawabanmu dan jawaban yang tepat.</p></div>
        <span className="subject-tag">Pilihan ganda &amp; isian</span>
      </div>
      <div data-testid="list-answer-review">
        {questions.map((question, index) => {
          const correct = isCorrect(question, answers[question.id]);
          const userAnswer = question.type === 'choice'
            ? question.options[answers[question.id] as number]
            : String(answers[question.id] ?? '');
          const rightAnswer = question.type === 'choice'
            ? question.options[question.answer]
            : question.accepted[0];
          return (
            <article className={`review-card ${correct ? 'correct' : 'incorrect'}`} key={question.id} data-testid={`review-question-${question.id}`}>
              <div className={`review-status ${correct ? 'good' : 'bad'}`}>
                {correct ? <CheckCircle2 size={16} /> : <CircleHelp size={16} />}
                {correct ? 'Jawabanmu benar' : 'Belum tepat'}
              </div>
              <div className="review-question">{index + 1}. {question.prompt}</div>
              <div className="review-detail">
                <span><strong>Jawabanmu:</strong> {userAnswer || '—'}</span>
                {!correct && <span><strong>Jawaban yang benar:</strong> {rightAnswer}</span>}
              </div>
            </article>
          );
        })}
      </div>
      <div className="result-actions">
        <button type="button" className="primary-btn" onClick={onRetry} data-testid="button-try-again"><RotateCcw size={17} /> Coba lagi</button>
        <button type="button" className="secondary-btn" onClick={onSwitch} data-testid="button-switch-subject">Pilih pelajaran lain <ArrowRight size={17} /></button>
      </div>
    </section>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
