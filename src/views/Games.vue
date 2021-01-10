<template>
<div>
  <b-row>
    <b-col lg="6">
      <Table />
    </b-col>
    <b-col lg="6">
      <IframeMap/>
    </b-col>
  </b-row>
</div>
</template>

<script>
import Table from "@/components/Table.vue";
import IframeMap from "@/components/IframeMap.vue"
export default {
  name: "Games",
  components: {
    Table,
    IframeMap,
  },
};
</script>