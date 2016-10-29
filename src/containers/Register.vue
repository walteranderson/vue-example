<template>
  <md-card class="container container--form">
    <div class="register pure-u-1">
      <h2 class="md-title">Register</h2>
      <form @submit.stop.prevent="submit">

        <md-input-container>
          <label>Username</label>
          <md-input v-model="username"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Email</label>
          <md-input v-model="email"></md-input>
        </md-input-container>

        <md-input-container md-has-password>
          <label>Password</label>
          <md-input v-model="password" type="password"></md-input>
        </md-input-container>

        <button type="submit" class="md-button md-raised md-primary">Submit</button>
      </form>
    </div>
  </md-card>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    }
  };
</script>
