import axios from '@quiz-web-engine/fetcher';
import { QuizState } from '@coreTypes/quriesModels/QuizState';

export const getQuizStateQuery = (lobbyId: string): Promise<QuizState> => {
  return axios
    .get(`api/quiz/completion/${lobbyId}`)
    .then((response) => response.data)
    .catch((e) => e);
};
