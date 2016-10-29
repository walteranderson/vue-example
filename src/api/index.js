import http from 'axios';
import { requestInterceptor } from './interceptors';

http.interceptors.request.use(requestInterceptor);

const API_BASE_URL = 'http://localhost:8000/api';

// const DEFAULT_HEADERS = {
//   'Content-Type': 'application/json',
// };

export default {
  authenticate(creds) {
    const url = `${API_BASE_URL}/auth/local`;
    return http.post(url, creds);
  },

  getUser() {
    const url = `${API_BASE_URL}/users/me`;
    return http.get(url);
  },
};
