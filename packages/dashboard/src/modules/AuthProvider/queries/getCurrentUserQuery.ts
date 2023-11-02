import axios from '@quiz-web-engine/fetcher';
import { User } from '@coreTypes/quriesModels/User';

export const getCurrentUserQuery = (): Promise<User> => {
  return axios
    .get('api/user/')
    .then((response) => response.data)
    .catch((e) => {
      throw new Error(e);
    });
};
