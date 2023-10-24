import { Answer } from '@/types/quriesModels/Answer';

export interface QuizQuestion {
  text: string;
  answers: Answer[];
  questionNumber: number;
  secondsLeft: number;
  submitted: boolean;
  submittedAnswerId: number;
}
