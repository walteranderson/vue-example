import api from 'api';

export const LOGIN_REQUEST_SENDING = 'LOGIN_REQUEST_SENDING';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

export const loginRequest = ({ commit }, creds) => {
  commit(LOGIN_REQUEST_SENDING, true);
  api.authenticate(creds)
    .then((res) => {
      commit(LOGIN_REQUEST_SENDING, false);
      return res.json();
    })
    .then((res) => commit(LOGIN_REQUEST_SUCCESS, res.token))
    .catch(() => commit(LOGIN_REQUEST_FAILURE));
};

// export const getUser = ({ commit, state }) => {
//   //
// };
