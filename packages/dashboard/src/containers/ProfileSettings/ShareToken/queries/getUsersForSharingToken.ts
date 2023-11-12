import axios from '@quiz-web-engine/fetcher';
import { UserForSharingToken } from '@coreTypes/quriesModels/UserForSharingToken';

export const getUsersForSharingToken = (): Promise<UserForSharingToken[]> => {
  return axios
    .get('api/user/email/list')
    .then((response) => response.data)
    .catch((e) => e);
};
