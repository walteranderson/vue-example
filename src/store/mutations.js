import { auth } from 'utils';

export const LOGIN_REQUEST_SUCCESS = 'login/REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'login/REQUEST_FAILURE';
export const LOGOUT_REQUEST = 'logout/REQUEST_SUCCESS';

export const ROUTER_ROUTE_CHANGED = 'router/ROUTE_CHANGED';

export const USER_REQUEST_SUCCESS = 'user/REQUEST_SUCCESS';
export const USER_REQUEST_FAILURE = 'user/REQUEST_FAILURE';

const mutations = {
  [LOGIN_REQUEST_SUCCESS](state, { token }) {
    auth.setToken(token);
    state.auth.isAuthenticated = true;
  },

  [LOGOUT_REQUEST](state) {
    auth.clearToken();
    state.auth.isAuthenticated = false;
    state.user = {};
  },

  [USER_REQUEST_SUCCESS](state, { user }) {
    state.user = user;
  },
};

export default mutations;
