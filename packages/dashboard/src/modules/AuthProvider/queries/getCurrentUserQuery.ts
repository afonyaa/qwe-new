import axios from '@modules/QueryProvider/axios';

export const getCurrentUserQuery = () => {
  return axios.get('api/user/');
};
