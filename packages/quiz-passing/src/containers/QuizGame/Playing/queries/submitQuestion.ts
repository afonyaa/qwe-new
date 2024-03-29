import axios from '@quiz-web-engine/fetcher';
import { SubmitQuestionPayload } from '@coreTypes/quriesModels/SubmitQuestionPayload';

export const submitQuestion = (
  payload: SubmitQuestionPayload,
): Promise<string> => {
  return axios
    .post(`api/quiz/completion/submit`, payload)
    .then((response) => response.data)
    .catch((e) => e);
};
