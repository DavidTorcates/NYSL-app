<template>
  <div>
    <h3>Información de Juegos</h3>
    <Table />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
export default {
  name: "Games",
  components: {
    Table,
  },
};
</script>