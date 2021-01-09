<template>
  <div class="iframe">
    <h3>Detalles del Partido</h3>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13312.533785390946!2d-70.71255915446521!3d-33.4718763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c49991cee435%3A0xbed1aa4819b68795!2sCancha%20de%20futbolito!5e0!3m2!1ses-419!2scl!4v1610152978374!5m2!1ses-419!2scl"
      width="600"
      height="450"
      frameborder="0"
      style="border: 0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
      class="mapa"
    ></iframe>
    <label>
      <b>Partido 3</b> <br />
      Equipos: U2 vs U4 <br />Dirección: Raulí 651 <br />Cancha: Euforia Futbol
      5 <br />Fecha: 23/01/2020 <br />Hora: 10:00 Hrs</label
    ><br>
    <b-button class="btn2" variant="success">  CREAR ALERTA</b-button>
  </div>
</template>

<script>
export default {
  name: "Details",
};
</script>