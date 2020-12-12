<template>
    <div>
        <table class="table my-5">
        <thead>
            <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Modificar</th>
            <th scope="col">Eliminar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(id) in datoUsuarios" :key="id">
            <td>{{item.nombre}}</td>
            <td>{{item.apellido}}</td>
            <td>{{item.email}}</td>
            <td><v-btn color="error" elevation="5" @click="eliminando(item.id)">Eliminar</v-btn></td>
            <td><v-btn color="primary" elevation="5" @click="modificandoTask(item.id)">Modificar</v-btn></td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "User",
    mounted() {
        this.$store.dispatch("traerData");
    },
    computed: {
        datoUsuarios() {
        return this.$store.getters.mostrarUsuarios;
        },
    },
    methods: {
        eliminarUser(id){
            this.$confirm('¿Estás seguro?', {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'warning',
            center: true
            }).then(() => {
            this.$message({
                type: 'success',
                message: 'Usuario Eliminado.'
            });
            this.$store.dispatch('eliminarUsuarios',id);
            }).catch(() => {
            console.log('Se produjo un error al eliminar al usuario.')
            });
        },
        editarUsuario(id){
            this.$router.push({name: 'ModificarUser', params: {id: id}});
        }
    },
};
</script>