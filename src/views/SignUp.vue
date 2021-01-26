<template >
  <div id="login">
    <router-link class="navbar-brand" to="/">
      <img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png" />
    </router-link>
    <div class="container2">
      <h3>Registro</h3>
      <b-icon icon="envelope" name="icon" class ="icon">
        
      </b-icon>
      <input class="input" 
      type="text" 
      placeholder="Email" 
      v-model="email" 
      maxlength="15"
      minlength="7"
      />
      <br />
      <b-icon icon="lock" class="icon"></b-icon>
      <input
        class="input"
        type="text"
        placeholder="Password"
        v-model="password"
      />
     <br/>

     <div v-if="arrobaFunction" class="arrobaValidation">
       Debe ingresar un @
     </div>

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
      arrobaValue: true,
      password: "",
    };
  },
  computed: {
    arrobaFunction() {
     return this.email.includes("@") == false ;
    }
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
    }
  }
};
</script>