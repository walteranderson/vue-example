const API_BASE_URL = 'http://localhost:8000/api';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
};

export default {
  authenticate(creds) {
    const url = `${API_BASE_URL}/auth/local`;
    const method = 'POST';
    const headers = DEFAULT_HEADERS;
    const body = JSON.stringify(creds);

    return fetch(url, { method, headers, body });
  }
};
