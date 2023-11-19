import { QuizQuestion } from '@coreTypes/quriesModels/QuizQuestion';

export interface QuestionResultProps {
  currentQuestion: QuizQuestion;
  onNextQuestion?: () => void;
  onLeaderboard?: () => void;
  isLastQuestion: boolean;
}
