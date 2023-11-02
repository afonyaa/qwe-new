import axios from '@quiz-web-engine/fetcher';
import { StartQuizPayload } from '@coreTypes/quriesModels/StartQuizPayload';

export const launchQuizQuery = (payload: StartQuizPayload): Promise<string> => {
  return axios
    .post(`api/quiz/completion/next/${payload.lobbyId}`)
    .then((response) => response.data)
    .catch((e) => e);
};
