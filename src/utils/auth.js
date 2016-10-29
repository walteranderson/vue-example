/* global window */

const storage = window.localStorage;
const TOKEN_KEY = 'v_t';
let token = null;

export default {
  setToken(t) {
    storage.setItem(TOKEN_KEY, JSON.stringify(t));
    token = t;
  },

  getToken() {
    if (token) return token;

    try {
      return JSON.parse(storage.getItem(TOKEN_KEY));
    } catch (e) {
      // TODO: add proper logging
      return null;
    }
  },

  clearToken() {
    storage.removeItem(TOKEN_KEY);
    token = null;
  },

  // TODO: check token expiration and refresh if needed
  check() {
    return !!this.getToken();
  },
};
