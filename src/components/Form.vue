<template>
  <div b-class="row">
    <div class="col-md-12">
      <p>¿Tienes alguna consulta sobre algún partido?</p>
      <p>Escríbenos y te contactaremos a la brevedad</p>
      <b-form action="#" method="post">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-3 col-md-5 col-sm-5">
            <label for="nombre">Nombre:</label>
          </div>
          <div class="col-2 col-md-5 col-sm-5">
            <input type="text" name="nombre" id="nombre" />
          </div>
          <div class="col-4"></div>
        </div>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-3">
            <label for="email"> E-Mail:</label>
          </div>
          <div class="col-2">
            <input type="text" name="email" id="email" />
          </div>
          <div class="col-4"></div>
        </div>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-3">
            <label for="consulta">Consulta:</label>
          </div>
          <div class="col-2">
            <input type="text" name="consulta" id="consulta" />
          </div>
          <div class="col-4"></div>
        </div>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-3">
            <input type="submit" value="Enviar" class="btn-primary c-warning" />
          </div>
          <div class="col-6"></div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  props: {},
};
</script>