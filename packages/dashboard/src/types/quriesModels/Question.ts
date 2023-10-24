import { AnswerForQuestion } from '@coreTypes/quriesModels/QuestionAnswer';

export interface Question {
  questionId: number;
  text: string;
  questionType: QuestionType;
  order: number;
  weight: number;
  answers: AnswerForQuestion[];
}

export enum QuestionType {
  SINGLE_CHOICE = 'SINGLE_CHOICE',
}
