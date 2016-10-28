<template>
  <md-card class="container container--form">
    <div class="login pure-u-1">
      <h2 class="md-title">Login</h2>
      <form @submit.stop.prevent="submit">

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
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      submit() {
        console.log(this.email, this.password);
      }
    }
  };
</script>
