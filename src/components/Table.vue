<template> 
  <div > 
    <b-table striped class="tabla" hover  :items = "items" ></b-table >
     
  </div > 
</template >

<script>
export default {
  name: "Table",
  data() {
      return {
        items: [
          { septiembre: '01', equipos: 'U1 y U4', ubicación: 'AJ Katzenmaier', Seleccionar: ''},
          { septiembre: '01', equipos: 'U3 y U2', ubicación: 'Greenbay', Seleccionar: '' },
          { septiembre: '08', equipos: 'U5 y U6', ubicación: 'Howard A Yeager', Seleccionar: '' },
          { septiembre: '08', equipos: 'U6 y U1', ubicación: 'Marjorie P Hart', Seleccionar: '' },
          { septiembre: '15', equipos: 'U2 y U4', ubicación: 'North', Seleccionar: ''},
          { septiembre: '15', equipos: 'U3 y U5', ubicación: 'AJ Katzenmaier', Seleccionar: ''},
          { septiembre: '22', equipos: 'U1 y U3', ubicación: 'South', Seleccionar: ''},
          { septiembre: '22', equipos: 'U2 y U6', ubicación: 'Howard A Yeager', Seleccionar: ''},
          { septiembre: '29', equipos: 'U4 y U5', ubicación: 'Greenbay', Seleccionar: ''}
        ]
      }
      }
}
</script>