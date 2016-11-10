import api from 'api';
import {
  ROUTER_ROUTE_CHANGED,
  AUTH_SET_TOKEN,
  AUTH_EXPIRE,
  SET_USER,
} from 'store/mutations';

// TODO: think about better naming conventions
//  - actions
// TODO: add proper logging

export const login = ({ commit }, creds) => {
  api.authenticate(creds)
    .then((res) => {
      const token = res.token;

      commit(AUTH_SET_TOKEN, { token });
    })
    .then(api.getUser)
    .then((user) => {
      commit(SET_USER, { user });
      commit(ROUTER_ROUTE_CHANGED, { path: '/dashboard' });
    });
    // .catch(() => {
    //   commit(AUTH_EXPIRE);
    // });
};

export const register = ({ commit }, creds) => {
  api.registerUser(creds)
    .then((res) => {
      const token = res.token;

      commit(AUTH_SET_TOKEN, { token });
    })
    .then(api.getUser)
    .then((user) => {
      commit(SET_USER, { user });
      commit(ROUTER_ROUTE_CHANGED, { path: '/dashboard' });
    });
    // .catch(() => {
    //   commit(AUTH_EXPIRE);
    // });
};

export const logout = ({ commit }) => {
  commit(AUTH_EXPIRE);
  commit(ROUTER_ROUTE_CHANGED, { path: '/' });
};

export const authPrefetch = ({ commit }, token) => {
  commit(AUTH_SET_TOKEN, { token });
  api.getUser()
    .then((user) => {
      commit(SET_USER, { user });
      commit(ROUTER_ROUTE_CHANGED, { path: '/dashboard' });
    })
    .catch(() => {
      commit(AUTH_EXPIRE);
      commit(ROUTER_ROUTE_CHANGED, { path: '/' });
    });
};
