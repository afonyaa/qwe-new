import axios from '@quiz-web-engine/fetcher';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';

export const generateQuizQuery = (
  payload: CreateQuizPayload,
): Promise<string> => {
  return axios
    .post('quiz/generate/topic', payload)
    .then((response) => response.data)
    .catch((e) => {
      return Promise.reject(e.response);
    });
};
