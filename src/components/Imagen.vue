<template>
  <div id="imagen">
    <div class="card">
      <img
        id="img"
        class="card-img"
        src="../assets/image/img1.jpg"
        alt="Image 1"
      />
      <div class="card-img-overlay" id="text">
        <p class="card-text">
          <b>
            {{ texto }}
          </b>
        </p>
      </div>
    </div>
    <div class="card">
      <img
        id="img"
        class="card-img"
        src="../assets/image/img2.jpg"
        alt="Image 1"
      />
      <div class="card-img-overlay" id="text">
        <p class="card-text">
          <b>
            {{ texto }}
          </b>
        </p>
      </div>
    </div>
    <div class="card">
      <img
        id="img"
        class="card-img"
        src="../assets/image/img3.jpg"
        alt="Image 1"
      />
      <div class="card-img-overlay" id="text">
        <p class="card-text">
          <b>
            {{ texto }}
          </b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Imagen",
  props: {
    texto: String,
  },
};
</script>