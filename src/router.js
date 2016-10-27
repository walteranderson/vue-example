import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  Home,
  Dashboard,
  Login,
  Register
} from 'containers';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/register', component: Register }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
