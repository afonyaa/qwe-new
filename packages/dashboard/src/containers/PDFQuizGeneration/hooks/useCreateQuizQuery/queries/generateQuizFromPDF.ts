import axios from '@quiz-web-engine/fetcher';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';

export const generateQuizFromPDF = (
  payload: CreateQuizPayload,
): Promise<{ quizId: string }> => {
  return axios
    .post('quiz/generate/paper', payload)
    .then((response) => response.data)
    .catch((e) => {
      return Promise.reject(e.response);
    });
};
