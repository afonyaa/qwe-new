import axios from '@quiz-web-engine/fetcher';
import { GoToFinalLeaderboardPayload } from '@coreTypes/quriesModels/GoToFinalLeaderboardPayload';

export const goToFinalLeaderBoard = (
  payload: GoToFinalLeaderboardPayload,
): Promise<string> => {
  return axios
    .post(`api/quiz/completion/leaderboard/${payload.lobbyId}`)
    .then((response) => response.data)
    .catch((e) => e);
};
