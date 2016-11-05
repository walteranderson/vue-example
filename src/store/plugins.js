import { auth } from 'utils';

const authenticationPlugin = (store) => {
  store.subscribe((mutation, state) => {
    // TODO: figure out a less brittle way of handling the pre-fetch request
    if (!state.auth.isAuthenticated) {
      if (auth.check()) {
        store.dispatch('authPrefetch', auth.getToken());
      }
    }
  });
};

export default [
  authenticationPlugin,
];
