<template>
  <div id="Image">
    <h3>Misión</h3>
    <div class="card">
      <img
        id="img"
        class="card-img"
        src="../assets/image/img1.jpg"
        alt="Image 1"
      />
      <div class="card-img-overlay" id="text">
        <p class="card-text" >
          <b>
            {{$store.state.txtImg1}}
          </b>
        </p>
      </div>
    </div>
     <h3>Visión</h3>
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
            {{$store.state.txtImg2}}
          </b>
        </p>
      </div>
    </div>
     <h3>Información General</h3>
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
            {{$store.state.txtImg3}}
          </b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Img",
  props: {
  },
};
</script>