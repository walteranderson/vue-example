import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from 'store';

// import and configure material design theme
import './theme';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
