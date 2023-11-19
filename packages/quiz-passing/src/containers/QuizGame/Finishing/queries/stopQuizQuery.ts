import axios from '@quiz-web-engine/fetcher';
import { StopQuizPayload } from '@coreTypes/quriesModels/StopQuizPayload';

export const stopQuizQuery = (payload: StopQuizPayload): Promise<string> => {
  return axios
    .delete(`api/quiz/completion/${payload.lobbyId}`)
    .then((response) => response.data)
    .catch((e) => e);
};
