<template>
<div>
  <h4 class="titule2">Inicio</h4>
    <router-link class="navbar-brand" to="/">
        <img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png" />
    </router-link>    
    <Card/>
 </div> 
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  data(){
    msg : 'shere'
  }
  ,
  components: {
    Card
  },
};
</script>