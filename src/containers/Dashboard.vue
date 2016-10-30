<template>
  <md-card class="container">
    <h2 class="md-title">Dashboard</h2>
    <p>Hello, {{ user.username }}.</p>
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
