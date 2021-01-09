 <template>
  <b-navbar toggleable type="dark" class="nav">
    <b-navbar-brand href="#">
      <router-link class="navbar-brand" to="/">
        <img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png" />
      </router-link>
    </b-navbar-brand>
    
    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>
    
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#"
          >
          <router-link class="nav-item nav-link" to="/Home"
            >Inicio</router-link>
          </b-nav-item
        >
        <b-nav-item href="#"
          ><router-link class="nav-item nav-link" to="/Rules"
            >Reglas y Políticas</router-link
          ></b-nav-item
        >
        <b-nav-item href="#"
          ><router-link class="nav-item nav-link" to="/Info"
            >Informacion de Juegos</router-link
          ></b-nav-item
        >
        <b-nav-item href="#">
          <router-link class="nav-item nav-link" to="/Contact"
            >Contacto</router-link
          ></b-nav-item
        >
        <b-nav-item href="#"
          ><router-link class="nav-item nav-link" to="/About"
            >Sobre Nosotros</router-link
          ></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>


<script>
export default {
  name: "Navbar",
};
</script>

