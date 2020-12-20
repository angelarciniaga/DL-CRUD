<template>
    <div>
        <b-form class="container" @submit.prevent="agregar">

        <b-form-group id="input-group-1" label="Ingrese su nombre" label-for="input-1">
            <b-form-input id="input-1" v-model="form.nombre" type="text" required placeholder="Nombre"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Ingrese su correo" label-for="input-2">
            <b-form-input id="input-2" v-model="form.email" type="email" required placeholder="Correo"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Ingresa tu contraseña" label-for="input-3">
            <b-form-input id="input-3" v-model="form.password" type="password" required placeholder="Contraseña"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mr-2">Agregar</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

        </b-form>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Usuarioa',
    data() {
        return {
            form: {
            nombre: '',
            email: '',
            password: ''
            },
        }
    },
    methods: {
        agregar(){
            if (this.form.nombre && this.form.email && this.form.password) {
                firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
                .then(() => {
                    this.$router.push('/Login');
                })
            }
        }
    },
}
</script>

<style>
</style>