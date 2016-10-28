<template>
<md-toolbar class="md-large">
  <md-button class="md-icon-button">
    <md-icon>menu</md-icon>
  </md-button>

  <span style="flex: 1;"></span>

  <template v-if="!isAuthenticated">
    <router-link to="/login" class="md-button">Login</router-link>
    <router-link to="/register" class="md-button">Register</router-link>
  </template>
  <md-button class="md-icon-button">
    <md-icon>favorite</md-icon>
  </md-button>

  <div class="md-toolbar-container">
    <router-link to="/" tag="h2" class="md-title">Vue Example</router-link>
  </div>


</md-toolbar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters([
    'isAuthenticated'
  ])
};
</script>

<style lang="scss">
.md-title {
  cursor: pointer;
}
</style>
