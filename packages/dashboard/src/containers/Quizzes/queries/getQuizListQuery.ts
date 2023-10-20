import axios from '@modules/QueryProvider/axios';
import {QuizPreview} from '@/types/quriesModels/QuizPreview';

export const getQuizListQuery = (): Promise<QuizPreview[]> => {
  return axios
    .get('quiz/list')
    .then((response) => response.data.quizzes)
    .catch((e) => e);
};
