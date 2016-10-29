const storage = window.localStorage;
const TOKEN_KEY = 'v_t';

const _token = null;

export const setToken = token => {
  storage.setItem(TOKEN_KEY, JSON.stringify(token));
  _token = token;
};

export const getToken = () => {
  if (_token) return _token;
  return JSON.parse(storage.getItem(TOKEN_KEY));
};

// TODO: add refresh token
export const check = () => {
  return new Promise((resolve, reject) => {
    const token = gettoken();
    if (!token) {
      return reject('no token');
    }

    resolve(token);
  });
};
