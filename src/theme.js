import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

Vue.use(VueMaterial);

Vue.material.theme.register('default', {
  primary: 'indigo',
  accent: 'pink',
  background: 'grey',
  warn: 'deep-orange',
});
