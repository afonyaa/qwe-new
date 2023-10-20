import axios from '@modules/QueryProvider/axios';
import { Quiz } from '@coreTypes/quriesModels/Quiz';

export const getQuizQuery = (quizId: string): Promise<Quiz> => {
  return axios
    .get(`quiz/${quizId}`)
    .then((response) => response.data)
    .catch((e) => e);
};
