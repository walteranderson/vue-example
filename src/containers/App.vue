<template>
  <div v-md-theme="'default'">
    <Navigation/>
    <router-view/>
  </div>
</template>

<script>
import { Navigation } from 'components';

export default {
  name: 'App',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss">
  $grey: #EFEFEF;

  body {
    background-color: $grey;
  }

  .container {
    margin-left: auto;
    margin-right: auto;
    padding: 15px;
    bottom: 0;
  }

  @media (min-width: 1200px) {
    .container {
      width: 1170px;
      bottom: 30px;
    }
    .container--form {
      width: 600px;
    }
  }
</style>
