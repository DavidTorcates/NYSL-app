<template>
  <div id="app">
    <div v-show="this.$router.path != '/login' && '/signup'">
      <Navbar/>
    </div>
    <b-container>
      <transition  name="fade">
        <router-view />
      </transition>
    </b-container>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
