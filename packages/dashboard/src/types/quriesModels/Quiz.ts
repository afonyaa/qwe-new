import { Question } from '@coreTypes/quriesModels/Question';

export interface Quiz {
  quizId: number;
  name: string;
  questions: Question[];
  //todo доработать
}
