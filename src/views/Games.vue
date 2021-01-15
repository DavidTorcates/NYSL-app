<template>
  <div>
    <router-link class="navbar-brand" to="/">
        <img id="logoinicio" alt="Futbol logo" src="../assets/nysl_logo.png" />
    </router-link>
    
    <b-row>
      <b-col lg="6" sm="7" md="6" xl="6">
        <Table />
      </b-col>
      <b-col lg="6" sm="5" md="6" xl="6">
        <IframeMap />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Table from "@/components/Table.vue";
import IframeMap from "@/components/IframeMap.vue";
export default {
  name: "Games",
  components: {
    Table,
    IframeMap,
  },
};
</script>
<style lang="scss">
@media only screen and (max-width: 992px) and (orientation: landscape) {
  .tabla {
    text-align: left;
    background-color: rgba(240, 229, 229, 0.301) !important;
    font-size: 10px;
    .btn {
      width: 65px;
      font-size: 10px;
    }
  }
  .mapa {
    width: 100% !important;
    height: 500% !important;
  }
}
@media only screen and (max-width: 576px) and (orientation: portrait) {
  .table {
    font-size: 13px;
    text-align: left;
    .btn {
      font-size: 12px !important;
      width: 65px;
      margin: 0px;
      padding: 0px;
    }
    tbody {
      td:nth-last-child(1) {
        vertical-align: middle;
        text-align: center;
        padding-left:10px ;
      }
    }
  }
}
</style>