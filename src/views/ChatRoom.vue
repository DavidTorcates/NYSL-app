<template>
  <div id="sala_chat">
    <h4 class="titule2">Foro chat</h4>
    <router-link class="navbar-brand" to="/">
      <img
        id="logoinicio"
        alt="Futbol logo"
        data-cy="logo"
        src="../assets/nysl_logo.png"
      />
    </router-link>
    <Chat />
  </div>
</template>

<script>
import Chat from "@/components/Chat.vue";
export default {
  name: "ChatRoom",
  components: {
    Chat,
  },
};
</script>