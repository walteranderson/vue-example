import http from 'axios';
import { requestInterceptor } from './interceptors';

http.interceptors.request.use(requestInterceptor);

const {
  API_BASE_URL,
  API_AUTH_ENDPOINT,
  API_USER_ENDPOINT,
} = process.env;

// const DEFAULT_HEADERS = {
//   'Content-Type': 'application/json',
// };

export default {
  authenticate(creds) {
    const url = API_BASE_URL + API_AUTH_ENDPOINT;
    return http.post(url, creds);
  },

  getUser() {
    const url = API_BASE_URL + API_USER_ENDPOINT;
    return http.get(url);
  },
};
