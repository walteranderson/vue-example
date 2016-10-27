<template>
    <div>
      <p>Home</p>
      <p>Am I Authenticated? {{ isAuthenticated ? 'Yes' : 'No' }}</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters([
    'isAuthenticated'
  ])
};
</script>
