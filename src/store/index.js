import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import state from './state';
import * as getters from './getters';

Vue.use(Vuex);

export default new Store({
  state,
  getters
});
