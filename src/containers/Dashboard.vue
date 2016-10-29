<template>
  <md-card class="container">
    <h2 class="md-title">dashboard</h2>
    <img src="~assets/images/vue-logo.png" alt="VueJS Logo">
    {{ user }}
  </md-card>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Dashboard',

    computed: mapGetters([
      'user',
    ]),
  };
</script>
