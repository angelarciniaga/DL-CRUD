<template>
  <div class="container">
    <h1>Ingresar</h1>
    <b-form @submit.prevent="login" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Tu correo"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Introduzca tu correo"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Tu contraseña" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.clave"
          type="password"
          required
          placeholder="Introduzca su clave"
        ></b-form-input>
      </b-form-group>

      <b-button class="mr-3" type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import firebase from 'firebase';

  export default {
    name: 'Login',
    data() {
      return {
        form: {
          email: '',
          clave: ''
        },
        show: true
      }
    },
    methods: {
      

      login() {
        if(this.form.email && this.form.clave && this.form.clave.length >= 6){
          firebase.auth().signInWithEmailAndPassword(this.form.email, this.form.clave)
            .then(resp => {
              console.log(resp.user);
              console.log(resp.user.email);
              this.$router.push('/home');
            })
            .catch(error => {
              console.error(error.code);
              console.error(error.message);
              this.$router.push('/registro')
            })
        } else {
          console.log('No se conecta');
        }
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.clave = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>