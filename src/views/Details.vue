<template>
<div>
  <router-link class="navbar-brand" to="/">
        <img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png" />
    </router-link>
    <IframeMap/>
</div>
</template>

<script>
import IframeMap from "@/components/IframeMap.vue"

export default {
  name: "Details",
  components: {
    IframeMap,
  },
};
</script>