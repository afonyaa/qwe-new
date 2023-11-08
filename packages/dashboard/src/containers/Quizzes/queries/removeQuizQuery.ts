import axios from '@quiz-web-engine/fetcher';
import { RemoveQuizPayload } from '@coreTypes/quriesModels/RemoveQuizPayload';

export const removeQuizQuery = (
  payload: RemoveQuizPayload,
): Promise<string> => {
  return axios
    .delete(`quiz/${payload.id}`)
    .then((response) => response.data)
    .catch((e) => {
      return Promise.reject(e.response);
    });
};
