<template>
<div>
  <h4 class="titule2">Inicio</h4>
    <router-link class="navbar-brand" to="/">
        <img id="logoinicio" data-cy="logo" alt="Futbol logo" src="../assets/nysl_logo.png" />
    </router-link>    
    <Card/>
 </div> 
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  components: {
    Card
  },
};
</script>