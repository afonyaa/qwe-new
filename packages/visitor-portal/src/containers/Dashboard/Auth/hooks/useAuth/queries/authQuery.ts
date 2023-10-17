import {
  AuthStateAction,
  SignInFields,
  SignUpFields,
} from '../../../interfaces';
import axios from '../../../../../../modules/RedirectionProvider/axios';

export const authQuery = (
  payload: SignInFields | SignUpFields,
  type: AuthStateAction,
) => {
  const authTypeSegments = {
    [AuthStateAction.SigningUp]: 'signup',
    [AuthStateAction.SigningIn]: 'signin',
  };
  return new Promise((resolve, reject) => {
    return axios
      .post(`api/auth/${authTypeSegments[type]}`, payload)
      .then((res) => {
        resolve(res.data.token);
      })
      .catch(reject);
  });
};
