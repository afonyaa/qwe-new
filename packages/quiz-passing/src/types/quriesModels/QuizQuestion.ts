import { Answer } from '@coreTypes/quriesModels/Answer';

export interface QuizQuestion {
  text: string;
  answers: Answer[];
  questionNumber: number;
  secondsLeft: number;
  submitted: boolean;
  submittedAnswerId: number;
}
