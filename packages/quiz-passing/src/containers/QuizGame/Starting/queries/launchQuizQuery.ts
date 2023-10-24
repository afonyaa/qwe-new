import axios from '@modules/QueryProvider/axios';
import { StartQuizPayload } from '@coreTypes/quriesModels/StartQuizPayload';

export const launchQuizQuery = (payload: StartQuizPayload): Promise<string> => {
  return axios
    .post(`api/quiz/completion/next/${payload.lobbyId}`)
    .then((response) => response.data)
    .catch((e) => e);
};
