import {
  LOGIN_REQUEST_SENDING,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILURE
} from 'store/actions';

const mutations = {
  [LOGIN_REQUEST_SENDING](state, { sending }) {
    state.auth.sending = sending;
  },

  [LOGIN_REQUEST_SUCCESS](state, { token }) {
    state.auth.token = token;
    state.auth.isAuthenticated = true;
  },

  [LOGIN_REQUEST_FAILURE](state) {
    state.auth.isAuthenticated = false;
    state.auth.token = null;
  }
};

export default mutations;
