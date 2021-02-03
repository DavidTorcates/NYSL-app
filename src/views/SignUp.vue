<template >
  <div id="login">
    <router-link class="navbar-brand" to="/">
      <img id="logoinicio" alt="Futbol logo" data-cy="logo" src="../assets/nysl_logo.png" />
    </router-link>
    <div class="container2">
      <h3>Registro</h3>
      <b-icon icon="envelope" class ="icon"></b-icon>
      <input class="input" type="email" placeholder="Email" v-model="email" />
      <br />
      <b-icon icon="lock" class="icon"></b-icon>
      <input
        class="input"
        type="password"
        placeholder="Password"
        v-model="password"
      />
     <br/>
      <button class="inputSignup" @click="signUp">registrar</button>
      <br />
      
      <br />
      <p>
        ¿Ya tienes una cuenta?
        <router-link to="/login"> <i>Iniciar sesión</i> </router-link>
      </p>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function () {
      //log the user in
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            user.data;
            this.$router.replace("login");
            alert("¡Te has registrado correctamente!");
          },
          (err) => {
            err;
             alert("Ingresa correctamente todos los datos");
          }
        );
    },
  },
};
</script>