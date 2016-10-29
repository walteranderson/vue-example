import Vue from 'vue';
import VueRouter from 'vue-router';
import store from 'store';
import {
  Home,
  Dashboard,
  Login,
  Register,
} from 'containers';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard, meta: { auth: true } },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth) && !store.state.auth.isAuthenticated) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
