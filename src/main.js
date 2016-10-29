/* eslint-disable no-new */

import Vue from 'vue';
import App from './App.vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from 'store';

// keep routing synced with vuex store
sync(store, router);

// import and configure material design theme
import './theme';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
