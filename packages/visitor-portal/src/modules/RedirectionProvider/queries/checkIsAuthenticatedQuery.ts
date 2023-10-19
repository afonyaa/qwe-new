import axios from '../../QueryProvider/axios';

export const checkIsAuthenticatedQuery = () => {
  return axios.get('api/user/');
};
