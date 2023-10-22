import axios from '@modules/QueryProvider/axios';
import { GoToNextQuestionPayload } from '@coreTypes/quriesModels/GoToNextQuestonPayload';

export const goToNextQuestionQuery = (
  payload: GoToNextQuestionPayload,
): Promise<string> => {
  return axios
    .post(`api/quiz/completion/next/${payload.lobbyId}`)
    .then((response) => response.data)
    .catch((e) => e);
};
