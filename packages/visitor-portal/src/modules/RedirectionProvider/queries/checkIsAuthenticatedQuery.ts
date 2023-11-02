import axios from '@quiz-web-engine/fetcher';

export const checkIsAuthenticatedQuery = () => {
  return axios.get('api/user/');
};
