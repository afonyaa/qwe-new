import axios from '@quiz-web-engine/fetcher';
import { CreateQuizPayload } from '@coreTypes/quriesModels/StartQuizPayload';

export const startQuizQuery = (payload: CreateQuizPayload): Promise<string> => {
  return axios
    .post(`quiz/${payload.quizId}/start`, payload)
    .then((response) => response.data)
    .catch((e) => e);
};
