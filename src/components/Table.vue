<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      class="tabla"
      striped
      hover
      small
      fixed
      responsive="sm"
    >
      <template #cell(seleccionar)="row" >
        <router-link to="/Details">
          <b-button
            variant="success"
            size="sm"
            @click="row.toggleDetails"
            class="mr-2"
          >
            Ver Mapa
          </b-button>
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["septiembre", "equipos", "ubicación", "Seleccionar"],
      items: [
        {
          septiembre: "01",
          equipos: "U1 y U4",
          ubicación: "AJ Katzenmaier",
        },
        {
          septiembre: "01",
          equipos: "U3 y U2",
          ubicación: "Greenbay",
        },
        {
          septiembre: "08",
          equipos: "U5 y U6",
          ubicación: "Howard A Yeager",
        },
        {
          septiembre: "08",
          equipos: "U6 y U1",
          ubicación: "Marjorie P Hart",
        },
        {
          septiembre: "15",
          equipos: "U2 y U4",
          ubicación: "North",
        },
        {
          septiembre: "15",
          equipos: "U3 y U5",
          ubicación: "AJ Katzenmaier",
        },
        {
          septiembre: "22",
          equipos: "U1 y U3",
          ubicación: "South",
        },
        {
          septiembre: "22",
          equipos: "U2 y U6",
          ubicación: "Howard A Yeager",
        },
        {
          septiembre: "29",
          equipos: "U4 y U5",
          ubicación: "Greenbay",
        },
      ],
    };
  },
};
</script>