<template>
<div>
    <h3>Inicio</h3>
    <Card fecha = "4 Agosto" cuerpo= "NYSL Fundraiser" />
    <Card fecha = "16 Agosto" cuerpo= "Season Kick-off: Meet the Teams" />
    <Card fecha = "1 Septiembre" cuerpo= "First Game of the Season (Check Game Schedule for details)" />
 </div> 
</template>
<script>
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  components: {
    Card
  },
};
</script>