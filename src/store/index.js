import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import state from 'store/state';
import mutations from 'store/mutations';
import * as getters from 'store/getters';
import * as actions from 'store/actions';
import plugins from 'store/plugins';

Vue.use(Vuex);

const state = {
  auth: {
    isAuthenticated: false,
    error: null,
  },
  user: {},
};

export default new Store({
  state,
  getters,
  actions,
  mutations,
  plugins,
});
