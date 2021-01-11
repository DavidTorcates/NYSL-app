<template>
  <div>
    <router-link class="navbar-brand" to="/">
        <img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png" />
    </router-link>
    
    <Imagen texto="Información General." />
  </div>
</template>
<script>
import Imagen from "@/components/Imagen.vue";
export default {
  name: "About",
  components: {
    Imagen,
  },
};
</script>