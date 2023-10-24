import axios from '@modules/QueryProvider/axios';
import { SubmitQuestionPayload } from '@coreTypes/quriesModels/SubmitQuestionPayload';

export const submitQuestion = (
  payload: SubmitQuestionPayload,
): Promise<string> => {
  return axios
    .post(`api/quiz/completion/submit`, payload)
    .then((response) => response.data)
    .catch((e) => e);
};
