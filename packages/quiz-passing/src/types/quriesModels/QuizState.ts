import { Maybe } from '../coreTypes';
import { UserRole } from '@coreTypes/quriesModels/UserRole';
import { QuizStatus } from '@coreTypes/quriesModels/QuizStatus';
import { QuizPlayer } from '@coreTypes/quriesModels/QuizPlayer';
import { QuizQuestion } from '@coreTypes/quriesModels/QuizQuestion';

export interface QuizState {
  pinCode: number;
  playerName: Maybe<string>;
  players: QuizPlayer[];
  quizId: number;
  quizName: string;
  role: UserRole;
  status: QuizStatus;
  totalQuestions: number;
  currentQuestion: QuizQuestion;
  submitted: true;
}
