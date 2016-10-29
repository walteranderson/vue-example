import auth from 'utils/auth';

const API_BASE_URL = 'http://localhost:8000/api';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};

let _headers = [];

auth.check()
  .then(token => {
    _headers.push({ 'Authorization': `Bearer ${token}` });
  });

export default {
  authenticate(creds) {
    const url = `${API_BASE_URL}/auth/local`;
    const method = 'POST';
    const headers = DEFAULT_HEADERS + _headers;
    const body = JSON.stringify(creds);

    return fetch(url, { method, headers, body });
  }

  user() {
    const url = `${API_BASE_URL}/users/me`;
    const method = 'GET';
    const headers = DEFAULT_HEADERS + _headers;

    return fetch(url, { method, headers });
  }
};
