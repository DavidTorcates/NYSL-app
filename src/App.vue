<template>
  <div id="app">
    <Navbar />
    <transition name="bounce">
      <b-container><router-view /></b-container>
    </transition>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
