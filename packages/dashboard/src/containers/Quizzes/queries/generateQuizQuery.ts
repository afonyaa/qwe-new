import axios from '@modules/QueryProvider/axios';
import { CreateQuizPayload } from '@coreTypes/quriesModels/CreateQuizPayload';

export const generateQuizQuery = (
  payload: CreateQuizPayload,
): Promise<string> => {
  return axios
    .post('quiz/generate', payload)
    .then((response) => response.data)
    .catch((e) => e);
};
