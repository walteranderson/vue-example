import { auth } from 'utils';

export const AUTH_SET_TOKEN = 'auth/SET_TOKEN';
export const AUTH_EXPIRE = 'auth/EXPIRE';
export const SET_USER = 'user/SET';
export const ROUTER_ROUTE_CHANGED = 'router/ROUTE_CHANGED';

const mutations = {
  [AUTH_SET_TOKEN](state, { token }) {
    auth.setToken(token);
    state.auth.isAuthenticated = true;
  },

  [AUTH_EXPIRE](state, { error = null }) {
    auth.clearToken();
    state.auth.isAuthenticated = false;
    state.user = {};
    state.auth.error = error;
  },

  [SET_USER](state, { user }) {
    state.user = user;
  },
};

export default mutations;
