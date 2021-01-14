<template>
  <div>
    <div id="carta" class="container">
      <div class="card">
        <h5 class="card-header">{{ $store.getters.ObtenerDate1 }}</h5>
        <div class="card-body">
          <h5 class="card-title">{{ $store.getters.ObtenerComp1 }}</h5>
        </div>
      </div>
    </div>
    <div id="carta" class="container">
      <div class="card">
        <h5 class="card-header">{{ $store.getters.ObtenerDate2 }}</h5>
        <div class="card-body">
          <h5 class="card-title">{{ $store.getters.ObtenerComp2 }}</h5>
        </div>
      </div>
    </div>
    <div id="carta" class="container">
      <div class="card">
        <h5 class="card-header">{{ $store.getters.ObtenerDate3 }}</h5>
        <div class="card-body">
          <h5 class="card-title">{{ $store.getters.ObtenerComp3 }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>