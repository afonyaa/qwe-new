import axios from '@quiz-web-engine/fetcher';
import { JoinQuizPayload } from '@coreTypes//quriesModels/JoinQuizPayload';

export const joinQuizQuery = (payload: JoinQuizPayload): Promise<string> => {
  return axios
    .post(`api/quiz/completion/join/${payload.pinCode}`)
    .then((response) => response.data)
    .catch((e) => {
      return Promise.reject(e.response);
    });
};
