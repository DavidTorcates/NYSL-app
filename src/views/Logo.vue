<template>
  <div class="logo home">
    <router-link to="/login"
      ><img alt="Futbol logo" src="../assets/nysl_logo.png"
    /></router-link>
    <h1>{{$store.state.msg}}</h1>
    <h4>{{$store.getters.Obtenermsg}}</h4>
  </div>
</template>

<style lang="scss">
#logoinicio {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 8px;
  left: 2%;
  padding: 0px;
  border-radius: 100%;
  box-shadow: 0px 0px 10px 10px #033949;
}
</style>