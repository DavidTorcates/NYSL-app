<template>
  <div>
    <router-link class="navbar-brand" to="/Welcome">
        <img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png" />
    </router-link>
    <Img texto=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vel ab in corrupti rem qui quae, cumque ra " />
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