<template >
  <div id="login">
    <router-link class="navbar-brand" to="/">
      <img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png" />
    </router-link>
    <div class="container2 container">
      <form
      id="app"
      >
      <h3>Ingreso</h3>
      <b-icon icon="envelope" class ="icon"></b-icon>
      <input class="input email" type="email" placeholder="Email" v-model="email" />
      <br />
      <b-icon icon="lock" class="icon"></b-icon>
      <input
        class="input"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <br />
      <button class="input" type="submit" @click="login">Ingresar</button>
      <br />
       <b-col sm="12" lg="12">
      <b-icon icon="facebook" class ="icon iconface"></b-icon>
      <button class="input facebook" >Continuar con Facebook</button>
      <b-icon icon="google" class ="icon icongo"></b-icon>
      <button class="input google" >Continuar con Google</button>
      </b-col>
      <br />
      <p>
        ¿Necesitas una cuenta?
        <router-link to="/signup"> <i>Registrate</i> </router-link>
      </p>
        </form>
    </div>
    <div
    v-if="error"
    class="error"
    style="color: red; margin-top: 70px; font-size: 3em"
    >
        MALISIMO
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
//import { component } from 'vue/types/umd';
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      //log the user in
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            user.data;
            this.$router.replace("Home");
          },
          (err) => {
            err;
            alert("Necesitas una cuenta");
          }
        );
    },
  },
  computed: {
    error(){
      return this.email.trim().length < 7;
    }
  }
};
</script>