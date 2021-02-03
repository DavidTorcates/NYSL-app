<template>
  <div class="container">
    <h4 class="titule2">Contáctanos</h4>
    <router-link class="navbar-brand" to="/">
        <img id="logoinicio" alt="Futbol logo" data-cy="logo" src="../assets/nysl_logo.png" />
    </router-link>
    
    <Form />
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
export default {
  name: "Home",
  components: {
    Form,
  },
};
</script>
