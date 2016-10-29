import api from 'api';

export const LOGIN_REQUEST_SENDING = 'login/REQUEST_SENDING';
export const LOGIN_REQUEST_SUCCESS = 'login/REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'login/REQUEST_FAILURE';

export const ROUTER_ROUTE_CHANGED = 'router/ROUTE_CHANGED';

export const loginRequest = ({ commit }, creds) => {
  commit(LOGIN_REQUEST_SENDING, { sending: true });
  api.authenticate(creds)
    .then((res) => {
      commit(LOGIN_REQUEST_SENDING, { sending: false });
      return res.json();
    })
    .then((res) => {
      commit(LOGIN_REQUEST_SUCCESS, { token: res.token });
      commit(ROUTER_ROUTE_CHANGED, { path: '/dashboard' });
    })
    .catch(() => commit(LOGIN_REQUEST_FAILURE));
};

// export const getUser = ({ commit, state }) => {
//   //
// };
