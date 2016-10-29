/* eslint-disable no-new */

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import store from 'store';
import { App } from 'containers';
import router from './router';

// import and configure material design theme
import './theme';

// keep routing synced with vuex store
sync(store, router);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
