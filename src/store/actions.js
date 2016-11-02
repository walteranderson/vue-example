import api from 'api';
import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE,
  LOGOUT_REQUEST,
  USER_REQUEST_SUCCESS,
  ROUTER_ROUTE_CHANGED,
} from 'store/mutations';

// TODO: think about better naming conventions for actions and mutation types.

export const loginRequest = ({ commit }, creds) => {
  api.authenticate(creds)
    .then((res) => {
      const token = res.data.token;

      commit(LOGIN_REQUEST_SUCCESS, { token });
    })
    // attempt to get the user now that we're authenticated
    .then(api.getUser)
    .then((res) => {
      const user = res.data;

      commit(USER_REQUEST_SUCCESS, { user });
      commit(ROUTER_ROUTE_CHANGED, { path: '/dashboard' });
    })
    .catch(() => {
      // TODO: add proper logging
      commit(LOGIN_REQUEST_FAILURE);
      commit(LOGOUT_REQUEST);
    });
};

export const logoutRequest = ({ commit }) => {
  commit(LOGOUT_REQUEST);
  commit(ROUTER_ROUTE_CHANGED, { path: '/' });
};

export const authPrefetchRequest = ({ commit }, token) => {
  commit(LOGIN_REQUEST_SUCCESS, { token });
  api.getUser()
    .then((res) => {
      const user = res.data;
      commit(USER_REQUEST_SUCCESS, { user });
      commit(ROUTER_ROUTE_CHANGED, { path: '/dashboard' });
    })
    .catch(() => {
      // TODO: add proper logging
      commit(LOGOUT_REQUEST);
      commit(ROUTER_ROUTE_CHANGED, { path: '/' });
    });
};

export const registerRequest = ({ commit }, creds) => {
  api.registerUser(creds)
    .then((res) => {
      const token = res.data.token;

      commit(LOGIN_REQUEST_SUCCESS, { token });
    })
    // attempt to get the user now that we're authenticated
    .then(api.getUser)
    .then((res) => {
      const user = res.data;

      commit(USER_REQUEST_SUCCESS, { user });
      commit(ROUTER_ROUTE_CHANGED, { path: '/dashboard' });
    })
    .catch(() => {
      // TODO: add proper logging
      commit(LOGIN_REQUEST_FAILURE);
      commit(LOGOUT_REQUEST);
    });
};
