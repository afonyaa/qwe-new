import axios from '@quiz-web-engine/fetcher';
import { QuizPreview } from '@/types/quriesModels/QuizPreview';

export const getQuizListQuery = (): Promise<QuizPreview[]> => {
  return axios
    .get('quiz/list')
    .then((response) => response.data.quizzes)
    .catch((e) => e);
};
