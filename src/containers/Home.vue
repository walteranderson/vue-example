<template>
  <md-card class="container">
    <div class="pure-g">
      <div class="pure-u-1">
        <h2 class="md-title">Home</h2>
        <p>Am I authenticated? {{ isAuthenticated ? 'Yes' : 'No' }}</p>
        <img src="~assets/images/vue-logo.png" alt="VueJS Logo">
      </div>
    </div>
  </md-card>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'Home',
    computed: mapGetters([
      'isAuthenticated',
    ]),
  };
</script>
