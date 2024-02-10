<template>
  <div class="flex flex-col max-h-96 mt-10">
    <!-- Your SignUp component or Spinner component goes here -->
    <SignUp v-if="!$store.state.authUser"/>
    <Spinner v-else />
  </div>
</template>

<script>
import signinAnimation from '~/static/animations/sign-in.json'
import SignUp from '../components/auth/SignUp.vue';

export default {
  middleware: 'auth-redirect-home',
  data() {
    return {
      defaultOptions: { animationData: signinAnimation },
    };
  },
  head() {
    return {
      title: `Enter - ${this.$store.state.name}`,
    };
  },
  components: { SignUp }
}
</script>

<style scoped>
/* Ensure the content area takes up at least the height of the viewport */ /* Adjust 100px to match your footer height */
</style>
