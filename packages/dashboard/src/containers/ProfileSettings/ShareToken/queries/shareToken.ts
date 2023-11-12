import axios from '@quiz-web-engine/fetcher';
import { ShareTokenPayload } from '@coreTypes/quriesModels/ShareTokenPayload';

export const shareTokenQuery = (
  payload: ShareTokenPayload,
): Promise<string> => {
  return axios
    .post('api/user/token', payload)
    .then((response) => response.data)
    .catch((e) => e);
};
