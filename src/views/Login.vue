<template >
  <div id="login">
    <router-link class="navbar-brand" to="/">
      <img id="logoinicio" 
      alt="Futbol logo" 
      src="../assets/nysl_logo.png" 
      data-cy="logo"
      />
    </router-link>
    <div class="container2 container">
      <h3>Ingreso</h3>
      <b-icon icon="envelope" class ="icon"></b-icon>
      <input class="input" id="email" type="email" placeholder="Ingrese Email" v-model="email" />
      <br />
      <b-icon icon="lock" class="icon"></b-icon>
      <input
        class="input"
        type="password"
        id="pass"
        placeholder="Password"
        v-model="password"
      />
      <br />
      <button class="input" id="btn" @click="login">Ingresar</button>
      <br />
       <b-col sm="12" lg="12">
      <b-icon icon="facebook" class ="icon iconface"></b-icon>
      <button class="input facebook" >Continuar con Facebook</button>
      <b-icon icon="google" class ="icon icongo"></b-icon>
      <button class="input google" >Continuar con Google</button>
      </b-col>
      <br />
      <div v-if="error" id="error">
        <p style="color:red"> Necesita una cuenta </p>
      </div>
      <br>
      <p>
        ¿Necesitas una cuenta?
        <router-link to="/signup"> <i>Registrate</i> </router-link>
      </p>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: false
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
            this.error = false;
            this.$router.replace("Home");
          },
          (err) => {
            err;
            this.error = true;
          }
        );
    },
  },
  }
</script>