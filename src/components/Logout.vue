<template>
  <div>
    <router-link class="nav-item nav-link" to="/login"
      ><b-button class="logout" @click="logout">
        <b-icon icon="power" aria-hidden="true"></b-icon> </b-button
    ></router-link>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "Logout",
  methods:{
   logout() {
      firebase.auth().signOut().then(() => {
            this.$router.replace("/");
            alert("¡Adiós Vaquero!");
          })
          .cath((err) => {
            alert(err);
        }); 
    }
}
}
</script>