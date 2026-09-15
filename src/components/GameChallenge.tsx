import React, { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Heart,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Compass,
  Target,
  Lock
} from 'lucide-react';
import { MathChallenge, MathQuestion, UserProfile } from '../types';
import { PirateAvatar } from './PirateAvatar';
import { CompanionAvatar } from './CompanionAvatar';
import { audio } from '../utils/audio';

interface GameChallengeProps {
  challenge: MathChallenge;
  profile: UserProfile;
  lives: number;
  onAnswerCorrect: (timeSpent: number) => void;
  onAnswerIncorrect: () => void;
  onRetryLevel: () => void;
  onGameOverRestart: () => void;
  onOpenMap: () => void;
}

export const GameChallenge: React.FC<GameChallengeProps> = ({
  challenge,
  profile,
  lives,
  onAnswerCorrect,
  onAnswerIncorrect,
  onRetryLevel,
  onGameOverRestart,
  onOpenMap
}) => {
  // Normalize questions array (3 questions per island)
  const questions: MathQuestion[] =
    challenge.questions && challenge.questions.length > 0
      ? challenge.questions
      : [
          {
            id: 1,
            questionNumber: 1,
            questionTitle: 'Pertanyaan 1 dari 1',
            questionText: challenge.questionText || '',
            equation: challenge.equation || '',
            options: challenge.options || [],
            correctAnswer: challenge.correctAnswer || 'A',
            explanation: challenge.explanation || '',
            companionHint: challenge.companionHint || '',
            timeLimit: challenge.timeLimit || 40
          }
        ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex] || questions[0];
  const totalQuestions = questions.length;

  const [timeLeft, setTimeLeft] = useState(currentQuestion.timeLimit);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | null>(null);
  const [wrongOptions, setWrongOptions] = useState<('A' | 'B' | 'C')[]>([]);
  const [answerState, setAnswerState] = useState<
    'idle' | 'question_passed' | 'island_conquered' | 'wrong_attempt' | 'timeout_attempt' | 'all_chances_exhausted'
  >('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [animalInteracted, setAnimalInteracted] = useState(false);
  const [animalSpeech, setAnimalSpeech] = useState<string | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const advanceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset state when challenge ID changes (arriving at a new island)
  useEffect(() => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    setCurrentQuestionIndex(0);
    const q0 = challenge.questions && challenge.questions[0] ? challenge.questions[0] : null;
    setTimeLeft(q0 ? q0.timeLimit : challenge.timeLimit || 40);
    setSelectedOption(null);
    setWrongOptions([]);
    setAnswerState('idle');
    setFeedbackMessage(null);
    setShowHint(false);
    setAnimalInteracted(false);
    setAnimalSpeech(null);
    startTimeRef.current = Date.now();
  }, [challenge.id]);

  // When lives are restored back to 3
  useEffect(() => {
    if (lives === 3 && (answerState === 'wrong_attempt' || answerState === 'timeout_attempt' || answerState === 'all_chances_exhausted')) {
      setSelectedOption(null);
      setWrongOptions([]);
      setAnswerState('idle');
      setFeedbackMessage(null);
      setTimeLeft(currentQuestion.timeLimit);
      startTimeRef.current = Date.now();
    }
  }, [lives, currentQuestion.timeLimit, answerState]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    };
  }, []);

  // Countdown timer logic
  useEffect(() => {
    if (
      answerState === 'question_passed' ||
      answerState === 'island_conquered' ||
      answerState === 'all_chances_exhausted' ||
      lives <= 0
    ) {
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          handleTimeout();
          return 0;
        }
        if (prev <= 10) {
          audio.playTimerTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [challenge.id, currentQuestionIndex, answerState, lives]);

  const handleTimeout = () => {
    audio.playWrongSound();
    const remainingChances = lives - 1;
    onAnswerIncorrect();

    if (remainingChances <= 0) {
      setAnswerState('all_chances_exhausted');
      setFeedbackMessage(null);
    } else {
      setAnswerState('timeout_attempt');
      setFeedbackMessage(
        `Waktu habis untuk kesempatan ini! Tersisa ${remainingChances} kesempatan lagi. Jam pasir dibalik kembali, ayo segera hitung dan pilih jawabanmu, Kapten!`
      );
      setTimeLeft(Math.max(25, Math.round(currentQuestion.timeLimit * 0.75)));
    }
  };

  // Advance to the next question on the current island
  const handleAdvanceToNextQuestion = () => {
    if (advanceTimerRef.current) clearTimeout(advanceTimerRef.current);
    if (currentQuestionIndex < totalQuestions - 1) {
      const nextIdx = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIdx);
      setSelectedOption(null);
      setWrongOptions([]);
      setAnswerState('idle');
      setFeedbackMessage(null);
      setShowHint(false);
      setTimeLeft(questions[nextIdx].timeLimit);
      startTimeRef.current = Date.now();
      onRetryLevel(); // restore 3 fresh chances for the next question!
    }
  };

  const handleSelectOption = (optionId: 'A' | 'B' | 'C') => {
    if (
      answerState === 'question_passed' ||
      answerState === 'island_conquered' ||
      answerState === 'all_chances_exhausted' ||
      lives <= 0 ||
      wrongOptions.includes(optionId)
    ) {
      return;
    }

    setSelectedOption(optionId);
    audio.playButtonClick();

    if (optionId === currentQuestion.correctAnswer) {
      // Correct answer!
      audio.playCorrectSound();
      audio.playCoinSound();

      if (currentQuestionIndex < totalQuestions - 1) {
        // More questions remaining on this island
        setAnswerState('question_passed');
        setFeedbackMessage(null);
        advanceTimerRef.current = setTimeout(() => {
          handleAdvanceToNextQuestion();
        }, 2400);
      } else {
        // Conquered all 3 questions on this island!
        setAnswerState('island_conquered');
        setFeedbackMessage(null);
        const timeSpent = Math.max(1, Math.round((Date.now() - startTimeRef.current) / 1000));
        advanceTimerRef.current = setTimeout(() => {
          onAnswerCorrect(timeSpent);
        }, 2800);
      }
    } else {
      // Incorrect answer chosen
      audio.playWrongSound();
      const nextWrong = [...wrongOptions, optionId];
      setWrongOptions(nextWrong);
      const remainingChances = lives - 1;
      onAnswerIncorrect();

      if (remainingChances <= 0) {
        setAnswerState('all_chances_exhausted');
        setFeedbackMessage(null);
      } else {
        setAnswerState('wrong_attempt');
        const chosenText = currentQuestion.options.find((o) => o.id === optionId)?.text || '';
        setFeedbackMessage(
          `Pilihan ${optionId} (${chosenText}) belum tepat! Tersisa ${remainingChances} kesempatan lagi. Coba hitung kembali dengan teliti dan pilih jawaban yang lain, Kapten!`
        );
      }
    }
  };

  // Reset/Restart the current question attempt immediately
  const handleRetryCurrentAttempt = () => {
    audio.playButtonClick();
    setSelectedOption(null);
    setAnswerState('idle');
    setFeedbackMessage(null);
    setTimeLeft(currentQuestion.timeLimit);
    startTimeRef.current = Date.now();
  };

  // Reset with 3 fresh chances for this question
  const handleFullResetQuestion = () => {
    audio.playButtonClick();
    setSelectedOption(null);
    setWrongOptions([]);
    setAnswerState('idle');
    setFeedbackMessage(null);
    setTimeLeft(currentQuestion.timeLimit);
    startTimeRef.current = Date.now();
    onRetryLevel();
  };

  // Reset back to Question 1 of this island
  const handleRestartIslandFromQ1 = () => {
    audio.playButtonClick();
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setWrongOptions([]);
    setAnswerState('idle');
    setFeedbackMessage(null);
    setShowHint(false);
    setTimeLeft(questions[0].timeLimit);
    startTimeRef.current = Date.now();
    onRetryLevel();
  };

  const handleAnimalClick = () => {
    audio.playSeagull();
    setAnimalInteracted(true);
    setAnimalSpeech(challenge.interactiveAnimal.dialogue);

    if (challenge.interactiveAnimal.bonusSeconds && !animalInteracted) {
      setTimeLeft((prev) => prev + challenge.interactiveAnimal.bonusSeconds!);
      audio.playCoinSound();
    }

    setTimeout(() => {
      setAnimalSpeech(null);
    }, 4500);
  };

  const getBiomeBackground = () => {
    switch (challenge.biome) {
      case 'beach':
        return 'from-sky-500 via-amber-200 to-amber-100 text-slate-900';
      case 'ocean':
        return 'from-sky-800 via-blue-600 to-cyan-500 text-white';
      case 'shipwreck':
        return 'from-slate-900 via-teal-950 to-amber-950 text-amber-100';
      case 'jungle':
        return 'from-emerald-950 via-teal-900 to-amber-900 text-emerald-100';
      case 'crystal_cave':
        return 'from-purple-950 via-indigo-900 to-slate-950 text-purple-100';
      case 'waterfall':
        return 'from-cyan-950 via-teal-900 to-blue-900 text-cyan-100';
      case 'skull_canyon':
        return 'from-stone-950 via-amber-950 to-red-950 text-amber-100';
      case 'lagoon':
        return 'from-indigo-950 via-blue-900 to-teal-950 text-blue-100';
      case 'fortress':
        return 'from-zinc-900 via-stone-800 to-amber-950 text-zinc-100';
      case 'treasure_island':
        return 'from-amber-600 via-yellow-500 to-amber-700 text-slate-950';
      default:
        return 'from-amber-800 to-yellow-600 text-white';
    }
  };

  const timerPercentage = Math.max(0, (timeLeft / currentQuestion.timeLimit) * 100);
  const isTimeCritical = timeLeft <= 8;
  const isExhausted = answerState === 'all_chances_exhausted' || lives <= 0;
  const correctOption = currentQuestion.options.find((o) => o.id === currentQuestion.correctAnswer);

  return (
    <div className="w-full max-w-5xl mx-auto space-y-4">
      {/* Biome Atmosphere Scenery Banner */}
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${getBiomeBackground()} p-4 sm:p-6 border-2 border-amber-500/30 shadow-xl transition-all`}
      >
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Top Header of Level */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-950/60 backdrop-blur-xs text-amber-300 border border-amber-500/40">
              Pulau {challenge.id} dari 10 • {challenge.typeLabel}
            </span>
            <span className="text-xs text-slate-200/90 font-medium">
              {challenge.islandName}
            </span>
          </div>

          {/* Actions & Countdown Timer */}
          <div className="flex items-center gap-2">
            {/* Quick Retry Button if an attempt was failed */}
            {lives > 0 &&
              answerState !== 'question_passed' &&
              answerState !== 'island_conquered' &&
              (wrongOptions.length > 0 || answerState === 'timeout_attempt' || lives < 3) && (
                <button
                  onClick={handleRetryCurrentAttempt}
                  title="Coba kembali soal ini segera"
                  className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden xs:inline">Coba Kembali</span>
                </button>
              )}

            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md ${
                isTimeCritical
                  ? 'bg-red-950/80 border-red-500 text-red-300 animate-pulse'
                  : 'bg-slate-950/60 border-amber-500/40 text-amber-300'
              }`}
            >
              <Clock
                className={`w-4 h-4 ${isTimeCritical ? 'text-red-400 animate-spin-slow' : 'text-amber-400'}`}
              />
              <span className="font-mono font-bold text-sm">{timeLeft} detik</span>
            </div>
          </div>
        </div>

        {/* Timer progress bar */}
        <div className="w-full bg-slate-950/40 h-2 rounded-full overflow-hidden mb-4 border border-white/10">
          <div
            className={`h-full transition-all duration-1000 ${
              isTimeCritical
                ? 'bg-gradient-to-r from-red-600 to-amber-500'
                : 'bg-gradient-to-r from-amber-400 to-emerald-400'
            }`}
            style={{ width: `${timerPercentage}%` }}
          />
        </div>

        {/* Interactive Wildlife and Captain on the Scenery stage */}
        <div className="relative z-10 flex items-end justify-between min-h-[140px] px-2 sm:px-6">
          {/* Hero Captain & Companion */}
          <div className="flex items-end gap-2 sm:gap-4">
            <div className="relative group cursor-pointer" onClick={() => audio.playButtonClick()}>
              <PirateAvatar hero={profile.hero} size="lg" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-slate-950/80 text-[10px] text-amber-300 font-bold whitespace-nowrap border border-amber-500/30">
                Kapten {profile.name}
              </div>
            </div>

            <div className="relative group cursor-pointer" onClick={() => audio.playCoinSound()}>
              <CompanionAvatar companion={profile.companion} size="md" />
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 rounded bg-slate-950/80 text-[9px] text-amber-200 font-bold whitespace-nowrap border border-amber-500/30">
                {profile.companion.name}
              </div>
            </div>
          </div>

          {/* Interactive Island Animal on the Shore */}
          <div className="relative flex flex-col items-center">
            {animalSpeech && (
              <div className="absolute -top-16 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 w-48 sm:w-60 p-2.5 rounded-xl bg-amber-50 text-slate-900 border-2 border-amber-600 shadow-xl text-xs font-semibold animate-bounce z-30">
                <div className="flex items-center gap-1 text-[10px] text-amber-800 font-bold mb-0.5">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  {challenge.interactiveAnimal.name}:
                </div>
                "{animalSpeech}"
                <div className="absolute -bottom-2 right-6 w-3 h-3 bg-amber-50 border-r-2 border-b-2 border-amber-600 transform rotate-45" />
              </div>
            )}

            <button
              onClick={handleAnimalClick}
              className="group relative focus:outline-none transition-transform hover:scale-110 active:scale-95"
              title={`Klik ${challenge.interactiveAnimal.name} untuk berinteraksi!`}
            >
              <div className="text-4xl sm:text-5xl drop-shadow-lg filter group-hover:brightness-110">
                {challenge.interactiveAnimal.avatar}
              </div>
              <div className="px-2 py-0.5 mt-1 rounded-full bg-slate-950/80 text-[10px] text-emerald-300 border border-emerald-500/40 flex items-center gap-1">
                <span>💬 Sapa {challenge.interactiveAnimal.species}</span>
                {challenge.interactiveAnimal.bonusSeconds && !animalInteracted && (
                  <span className="text-amber-400 font-bold">+5s</span>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Math Question & Parchment Area */}
      <div className="relative rounded-2xl bg-[#f5e6ca] p-4 sm:p-8 border-4 border-amber-900/60 shadow-2xl text-slate-900">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9eedb] to-[#eed8b3] rounded-xl opacity-90 pointer-events-none" />

        <div className="relative z-10 space-y-5">
          {/* 3 Questions Stepper Progress for this Island */}
          <div className="p-3 sm:p-4 rounded-xl bg-amber-950/10 border border-amber-900/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase text-amber-900 tracking-wider">
                Misi Pulau {challenge.id}:
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2">
                {questions.map((q, idx) => {
                  const isDone = idx < currentQuestionIndex;
                  const isCurrent = idx === currentQuestionIndex;
                  return (
                    <div
                      key={idx}
                      className={`px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ${
                        isDone
                          ? 'bg-emerald-700 text-white'
                          : isCurrent
                          ? 'bg-amber-900 text-amber-100 ring-2 ring-amber-600 scale-105 shadow-md'
                          : 'bg-amber-900/20 text-amber-950/50'
                      }`}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                      ) : isCurrent ? (
                        <Target className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                      ) : (
                        <Lock className="w-3 h-3 text-amber-950/40" />
                      )}
                      <span>Soal {idx + 1}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full bg-amber-900/20 text-amber-950 font-bold text-xs">
                Pertanyaan {currentQuestionIndex + 1} dari {totalQuestions}
              </span>
            </div>
          </div>

          {/* Chances tracker, retry button, and level header */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-900/20 pb-3">
            <div className="flex items-center gap-2">
              <div className="inline-block px-3 py-1 rounded-full bg-amber-900/15 border border-amber-900/30 text-amber-900 text-xs font-bold uppercase tracking-wider">
                {challenge.levelTitle}
              </div>

              {/* Quick Retry Button */}
              {lives > 0 &&
                answerState !== 'question_passed' &&
                answerState !== 'island_conquered' &&
                (wrongOptions.length > 0 || answerState === 'timeout_attempt' || lives < 3) && (
                  <button
                    onClick={handleRetryCurrentAttempt}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold text-xs shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    title="Coba kembali soal ini"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Coba Kembali Soal Ini</span>
                  </button>
                )}
            </div>

            {/* 3 Hearts Chances for this Question */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-950">
                Kesempatan Soal Ini:
              </span>
              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-950/10 border border-red-800/30">
                <div className="flex items-center gap-1">
                  {[1, 2, 3].map((num) => {
                    const isActive = num <= lives;
                    return (
                      <div
                        key={num}
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          isActive
                            ? 'bg-red-500 text-white shadow-sm scale-100'
                            : 'bg-amber-900/20 text-amber-900/40 scale-90 line-through'
                        }`}
                        title={`Kesempatan ke-${num}: ${isActive ? 'Tersedia' : 'Sudah Terpakai'}`}
                      >
                        ❤️
                      </div>
                    );
                  })}
                </div>
                <span className="text-xs font-bold text-red-700 ml-1">
                  {lives} / 3
                </span>
              </div>
            </div>
          </div>

          {/* Question Title & Text & Equation */}
          <div className="text-center space-y-3">
            {currentQuestion.questionTitle && (
              <div className="inline-block px-3 py-0.5 rounded-full bg-amber-800 text-amber-100 text-xs font-bold">
                {currentQuestion.questionTitle}
              </div>
            )}
            <p className="text-base sm:text-lg font-medium text-amber-950 leading-relaxed max-w-2xl mx-auto">
              {currentQuestion.questionText}
            </p>

            {/* Topic Badge / Equation Board */}
            {currentQuestion.equation && (
              <div className="inline-block p-3 sm:p-5 rounded-2xl bg-amber-950 text-amber-300 font-mono text-lg sm:text-2xl font-bold shadow-inner border-2 border-amber-600/50 tracking-wide max-w-full">
                {currentQuestion.equation}
              </div>
            )}
          </div>

          {/* Options: A, B, C */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOption === option.id;
              const isWrong = wrongOptions.includes(option.id);
              const isCorrect = option.id === currentQuestion.correctAnswer;

              let buttonStyle =
                'bg-amber-100 hover:bg-amber-200 border-amber-800/40 text-amber-950 hover:border-amber-900';

              if ((answerState === 'question_passed' || answerState === 'island_conquered') && isCorrect) {
                buttonStyle =
                  'bg-emerald-600 border-emerald-400 text-white scale-[1.03] shadow-lg shadow-emerald-700/50 ring-4 ring-emerald-400/40';
              } else if (isExhausted) {
                if (isCorrect) {
                  // Reveal correct answer ONLY when all 3 chances are exhausted!
                  buttonStyle =
                    'bg-emerald-600 border-emerald-300 text-white shadow-xl shadow-emerald-900/50 ring-4 ring-emerald-400 animate-pulse';
                } else if (isWrong || isSelected) {
                  buttonStyle = 'bg-red-200/80 border-red-400 text-red-950 opacity-60';
                } else {
                  buttonStyle = 'bg-amber-100/60 border-amber-800/20 text-amber-900/50 opacity-50';
                }
              } else if (isWrong) {
                buttonStyle =
                  'bg-red-200/80 border-red-500 text-red-950 opacity-70 cursor-not-allowed';
              }

              const isDisabled =
                answerState === 'question_passed' ||
                answerState === 'island_conquered' ||
                isExhausted ||
                isWrong;

              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  disabled={isDisabled}
                  className={`relative p-4 sm:p-5 rounded-xl border-3 font-bold text-left transition-all flex items-center justify-between group shadow-md ${buttonStyle} ${
                    !isDisabled
                      ? 'hover:scale-[1.02] active:scale-[0.98] cursor-pointer'
                      : ''
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-lg border-2 ${
                        ((answerState === 'question_passed' || answerState === 'island_conquered') && isCorrect) ||
                        (isExhausted && isCorrect)
                          ? 'bg-emerald-700 border-emerald-200 text-white'
                          : isWrong
                          ? 'bg-red-700 border-red-200 text-white'
                          : 'bg-amber-900 text-amber-100 border-amber-700 group-hover:bg-amber-800'
                      }`}
                    >
                      {option.id}
                    </div>
                    <span className="text-base sm:text-lg tracking-tight">
                      {option.text}
                    </span>
                  </div>

                  {/* Feedback indicator */}
                  {(((answerState === 'question_passed' || answerState === 'island_conquered') && isCorrect) ||
                    (isExhausted && isCorrect)) && (
                    <div className="flex items-center gap-1">
                      {isExhausted && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-200 font-bold border border-emerald-300">
                          Kunci Jawaban
                        </span>
                      )}
                      <CheckCircle2 className="w-6 h-6 text-white animate-bounce" />
                    </div>
                  )}
                  {isWrong && !isExhausted && (
                    <XCircle className="w-6 h-6 text-red-600" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Companion Hint Drawer */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-amber-900 border-t border-amber-900/20">
            <button
              onClick={() => {
                audio.playButtonClick();
                setShowHint(!showHint);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-900/10 hover:bg-amber-900/20 font-bold transition-colors text-amber-900 cursor-pointer"
            >
              <Lightbulb className="w-4 h-4 text-amber-600" />
              {showHint ? 'Sembunyikan Petunjuk' : 'Minta Petunjuk Sahabat'}
            </button>

            <span className="text-amber-900/80 font-medium">
              {lives > 0
                ? `*Pemain memiliki 3 kesempatan per soal. Tersisa ${lives} kesempatan.`
                : '*Semua 3 kesempatan telah habis.'}
            </span>
          </div>

          {/* Hint Card */}
          {showHint && (
            <div className="p-3.5 rounded-xl bg-amber-200/70 border border-amber-800/30 text-xs text-amber-950 flex items-start gap-3">
              <span className="text-xl">🦜</span>
              <div>
                <p className="font-bold text-amber-900">
                  Petunjuk dari {profile.companion.name}:
                </p>
                <p className="mt-0.5">{currentQuestion.companionHint}</p>
              </div>
            </div>
          )}

          {/* ATTEMPT FAILED BANNER (When lives > 0): DO NOT SHOW CORRECT ANSWER OR EXPLANATION! */}
          {!isExhausted && (answerState === 'wrong_attempt' || answerState === 'timeout_attempt') && (
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-100/95 border-2 border-amber-600 text-amber-950 text-sm space-y-3 animate-shake shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-base">
                  <XCircle className="w-5 h-5 text-red-600" />
                  {answerState === 'timeout_attempt'
                    ? 'Waktu Percobaan Habis!'
                    : 'Jawaban Pilihan Belum Tepat!'}
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white font-bold text-xs shadow-xs">
                  <span>Tersisa {lives} Kesempatan</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-amber-950 font-medium">
                {feedbackMessage}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-amber-800/20">
                <div className="text-xs text-amber-900 font-medium">
                  💡 Kamu dapat langsung memilih jawaban lain di atas, atau klik tombol coba kembali:
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleRetryCurrentAttempt}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-slate-950" />
                    Coba Kembali Soal Ini
                  </button>

                  <button
                    onClick={handleFullResetQuestion}
                    className="px-3 py-2 rounded-xl bg-amber-900/10 hover:bg-amber-900/20 text-amber-950 font-semibold text-xs transition-colors cursor-pointer border border-amber-900/20"
                    title="Mulai ulang soal ini dengan 3 hati penuh"
                  >
                    Mulai Ulang (Reset 3 Kesempatan)
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ALL 3 CHANCES EXHAUSTED BANNER: ONLY HERE REVEAL THE CORRECT ANSWER & STEP-BY-STEP CALCULATION! */}
          {isExhausted && (
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-red-950 via-slate-900 to-black border-4 border-red-700 text-white shadow-2xl space-y-4 animate-in fade-in">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-900/60 border-2 border-red-500 flex items-center justify-center text-2xl">
                  🔒
                </div>
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-red-500/30 text-red-300 text-xs font-bold border border-red-500/40">
                    3 Kesempatan Percobaan Telah Digunakan
                  </div>
                  <h3 className="font-pirate text-xl sm:text-2xl font-bold text-amber-400 mt-0.5">
                    Kunci Jawaban yang Benar
                  </h3>
                </div>
              </div>

              {/* Reveal Correct Answer */}
              <div className="p-4 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-emerald-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold text-emerald-300 tracking-wider">
                    Jawaban yang Tepat:
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 text-xs font-black">
                    PILIHAN {currentQuestion.correctAnswer}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono">
                  {correctOption?.text}
                </div>
                <div className="text-xs text-emerald-300 font-mono">
                  {currentQuestion.equation?.includes('?')
                    ? `Persamaan: ${currentQuestion.equation.replace('?', String(correctOption?.value || correctOption?.text || ''))}`
                    : `Topik: ${currentQuestion.categoryLabel || currentQuestion.equation || 'Wawasan Pengetahuan'}`}
                </div>
              </div>

              {/* Reveal Step-by-Step Math Calculation / Pembahasan */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-600/40 text-xs sm:text-sm text-slate-200 space-y-1.5">
                <p className="font-bold text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Kunci Jawaban & Pembahasan Lengkap:
                </p>
                <p className="text-slate-200 leading-relaxed">
                  {currentQuestion.explanation}
                </p>
                <p className="text-[11px] text-amber-200/70 italic mt-2">
                  *Pelajari pembahasannya di atas agar siap mencoba kembali soal ini!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleFullResetQuestion}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-slate-950 font-bold text-sm shadow-lg shadow-amber-900/50 flex items-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 text-slate-950" />
                  Coba Ulang Soal Ini (3 Kesempatan Baru)
                </button>

                {currentQuestionIndex > 0 && (
                  <button
                    onClick={handleRestartIslandFromQ1}
                    className="px-4 py-3 rounded-xl bg-amber-900/60 hover:bg-amber-900 text-amber-200 font-semibold text-sm border border-amber-700 flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Ulang dari Soal 1 Pulau Ini
                  </button>
                )}

                <button
                  onClick={() => {
                    audio.playButtonClick();
                    onGameOverRestart();
                  }}
                  className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm border border-slate-600 flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-amber-400" />
                  Mulai Ulang dari Pulau 1
                </button>
              </div>
            </div>
          )}

          {/* INTERMEDIATE QUESTION PASSED (Soal 1 or 2 passed) */}
          {answerState === 'question_passed' && (
            <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-emerald-100 to-teal-100 border-2 border-emerald-600 text-emerald-950 text-sm space-y-3 animate-in fade-in shadow-lg">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2.5 font-bold text-emerald-800 text-base sm:text-lg">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 animate-bounce" />
                  Luar Biasa! Soal {currentQuestionIndex + 1} Berhasil Dipecahkan!
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold shadow-xs">
                  +10 Koin Emas
                </span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                {currentQuestion.explanation}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-emerald-300">
                <span className="text-xs text-emerald-800 font-bold">
                  Membuka Pertanyaan {currentQuestionIndex + 2} dari {totalQuestions}...
                </span>
                <button
                  onClick={handleAdvanceToNextQuestion}
                  className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Lanjut Sekarang</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ISLAND CONQUERED (All 3 questions passed) */}
          {answerState === 'island_conquered' && (
            <div className="p-5 sm:p-7 rounded-2xl bg-gradient-to-r from-emerald-900 via-teal-900 to-emerald-950 border-3 border-emerald-400 text-white shadow-2xl space-y-3 animate-in fade-in">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/30 border-2 border-emerald-300 flex items-center justify-center text-3xl shadow-inner">
                  🏆
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                    Seluruh 3 Pertanyaan Selesai!
                  </div>
                  <h3 className="font-pirate text-xl sm:text-3xl font-bold text-amber-300">
                    Pulau {challenge.islandName} Berhasil Ditaklukkan!
                  </h3>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                {currentQuestion.explanation}
              </p>
              <p className="text-xs text-amber-200 font-semibold pt-1">
                Fragmen peta #{challenge.id} dan artefak pulau kini menjadi milikmu! Kapal segera berlayar...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
