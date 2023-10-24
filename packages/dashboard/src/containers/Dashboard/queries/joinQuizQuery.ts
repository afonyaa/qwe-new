import axios from '@modules/QueryProvider/axios';
import { JoinQuizPayload } from '@coreTypes//quriesModels/JoinQuizPayload';

export const joinQuizQuery = (payload: JoinQuizPayload): Promise<string> => {
  return axios
    .post(`api/quiz/completion/join/${payload.pinCode}`)
    .then((response) => response.data)
    .catch((e) => e);
};
