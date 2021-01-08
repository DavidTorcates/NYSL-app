<template>
  <div id="carta" class="container">
    <div class="card">
      <h5 class="card-header">{{ fecha }}</h5>
      <div class="card-body">
        <h5 class="card-title">{{ cuerpo }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    fecha: String,
    cuerpo: String,
  },
};
</script>