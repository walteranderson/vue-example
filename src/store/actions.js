import api from 'api';
import auth from 'utils/auth';

export const LOGIN_REQUEST_SUCCESS = 'login/REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'login/REQUEST_FAILURE';
export const LOGOUT_REQUEST_SUCCESS = 'logout/REQUEST_SUCCESS';

export const ROUTER_ROUTE_CHANGED = 'router/ROUTE_CHANGED';

export const loginRequest = ({ commit }, creds) => {
  api.authenticate(creds)
    .then((res) => return res.json())
    .then((res) => {
      const token = res.token;

      auth.setToken(token);
      commit(LOGIN_REQUEST_SUCCESS, { token });
      commit(ROUTER_ROUTE_CHANGED, { path: '/dashboard' });
    })
    .catch(() => commit(LOGIN_REQUEST_FAILURE));
};

export const logoutRequest = ({ commit }) => {
  commit(LOGOUT_REQUEST_SUCCESS);
  commit(ROUTER_ROUTE_CHANGED, { path: '/' });
};

// export const getUser = ({ commit, state }) => {
//   //
// };
