import { auth } from 'utils';

export const requestInterceptor = (config) => {
  const token = auth.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
