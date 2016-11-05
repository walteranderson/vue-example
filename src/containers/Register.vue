<template>
  <md-card class="container container--form">
    <div class="register pure-u-1">
      <h2 class="md-title">Register</h2>
      <form @submit.stop.prevent="register(user)">

        <md-input-container>
          <label>Username</label>
          <md-input v-model="user.username"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Email</label>
          <md-input v-model="user.email"></md-input>
        </md-input-container>

        <md-input-container md-has-password>
          <label>Password</label>
          <md-input v-model="user.password" type="password"></md-input>
        </md-input-container>

        <button type="submit" class="md-button md-raised md-primary">Submit</button>
      </form>
    </div>
  </md-card>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Register',
    data() {
      return {
        user: {
          username: '',
          email: '',
          password: '',
        },
      };
    },
    methods: mapActions([
      'register',
    ]),
  };
</script>
