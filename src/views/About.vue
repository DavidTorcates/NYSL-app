<template>
  <div>
    <h4 class="titule2">Acerca de nosotros</h4>
    <router-link class="navbar-brand" to="/">
        <img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png" />
    </router-link>
    <Img/>
  </div>
</template>
<script>
import Img from "@/components/Image.vue";
export default {
  name: "About",
  components: {
    Img,
  }
}
</script>