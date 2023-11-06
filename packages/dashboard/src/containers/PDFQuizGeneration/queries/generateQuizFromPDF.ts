import axios from '@quiz-web-engine/fetcher';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';

export const generateQuizFromPDF = (
  payloadCreateQuizPayload: CreateQuizPayload,
): Promise<string> => {
  return axios
    .post('quiz/generate/paper', payloadCreateQuizPayload)
    .then((response) => response.data)
    .catch((e) => {
      return Promise.reject(e.response);
    });
};
