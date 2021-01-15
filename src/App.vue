<template>
  <div id="app">
    <div v-show="homePage">
      <Navbar />
    </div>
    <b-container>
      <transition name="fade">
        <router-view />
      </transition>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  computed: {
    homePage() {
      if (this.$route.path == ('/') || this.$route.path == "/login" || this.$route.path == "/signup" ) {
        return false;
      } else {
        return true;
      }
    },
  },
  components: { Navbar },
};
</script>
