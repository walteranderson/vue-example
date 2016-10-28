<template>
  <md-card class="container container--form">
    <div class="login pure-u-1">
      <h2 class="md-title">Login</h2>
      <form @submit.stop.prevent="loginRequest(creds)">

        <md-input-container>
          <label>Email</label>
          <md-input v-model="creds.email"></md-input>
        </md-input-container>

        <md-input-container md-has-password>
          <label>Password</label>
          <md-input v-model="creds.password" type="password"></md-input>
        </md-input-container>

        <button type="submit" class="md-button md-raised md-primary">Submit</button>
      </form>
    </div>
  </md-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      creds: { email: '', password: '' }
    };
  },
  methods: {
    ...mapActions([
      'loginRequest'
    ])
  }
};
</script>
