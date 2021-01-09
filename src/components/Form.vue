<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="form">
      <b-form-group
        id="input-group-1"
        label="Correo electrónico:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Escriba su correo elctrónico"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nombre y apellido:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Escriba su nombre y apellido"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Ingrese su consulta:" label-for="input-3">
        <b-form-textarea
          id="input-3"
          v-model="form.message"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Enviar</b-button>
      <b-button type="reset" variant="primary">Limpiar</b-button>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          message: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.message = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>