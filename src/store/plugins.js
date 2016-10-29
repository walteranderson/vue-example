import { auth } from 'utils';

const authenticationPlugin = (store) => {
  store.subscribe((mutation, state) => {
    if (!state.auth.isAuthenticated) {
      if (auth.check()) {
        store.dispatch('authPrefetchRequest', auth.getToken());
      }
    }
  });
};

export default [
  authenticationPlugin,
];
