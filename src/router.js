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
  { path: '/login', component: Login },
  { path: '/register', component: Register },

  // auth-protected routes
  { path: '/dashboard', component: Dashboard, meta: { auth: true } },
];

const router = new VueRouter({
  routes,

  // enables HTML5 history mode
  mode: 'history',
});

// guard protected routes by checking the vuex store `auth.isAuthenticated`
router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some(record => record.meta.auth);
  const notAuthenticated = !store.state.auth.isAuthenticated;

  if (protectedRoute && notAuthenticated) {
    // redirect to the intended page after logging in
    const query = { redirect: to.fullPath };
    const path = '/login';

    next({ path, query });
  } else {
    next();
  }
});

export default router;
