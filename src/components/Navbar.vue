<template>
  <nav class="navbar navbar-expand-lg" id="nav">
    <router-link class="navbar-brand" to="/"
      ><img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png"
    /></router-link>
    <!--Menu hamburguesa-->
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <!--<svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
      <span class="navbar-toggler-icon text-white"></span>
    -->
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/Home">Inicio </router-link>
        <router-link class="nav-item nav-link" to="/Rules"
          >Reglas y Políticas</router-link
        >
        <router-link class="nav-item nav-link" to="/Info"
          >Informacion de Juegos</router-link
        >
        <router-link class="nav-item nav-link" to="/Contact"
          >Contacto</router-link
        >
        <router-link class="nav-item nav-link" to="/About"
          >Sobre Nosotros</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

