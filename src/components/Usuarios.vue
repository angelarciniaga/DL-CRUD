<template>
    <div>
        <b-form class="container" @submit.prevent="agregar">

        <b-form-group id="input-group-1" label="Ingrese su nombre" label-for="input-1">
            <b-form-input id="input-1" v-model="form.nombre" type="text" required placeholder="Nombre"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Ingrese su apellido" label-for="input-2">
            <b-form-input id="input-2" v-model="form.apellido" type="text" required placeholder="Apellido"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Ingrese su edad" label-for="input-3">
            <b-form-input id="input-3" v-model="form.email" type="text" required placeholder="Email"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="mr-2">Agregar</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

        </b-form>
    </div>
</template>

<script>
export default {
    name: 'Usuarioa',
    data() {
        return {
            form: {
            nombre: '',
            apellido: '',
            email: ''
            },
        }
    },
    methods: {
        agregar(){
            if (this.form.nombre && this.form.apellido && this.form.email) {
                this.$store.dispatch('agregandoUsuarios', this.form );
                this.$router.push('/home');
            } else {
                console.log('ajams')
            }
        }
    },
}
</script>

<style>
</style>