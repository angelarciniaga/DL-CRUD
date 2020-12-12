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
            <tr v-for="(item) in datoUsuarios" :key="item">
            <td>{{item.nombre}}</td>
            <td>{{item.apellido}}</td>
            <td>{{item.email}}</td>
            <td><b-button @click="eliminandoUsuario(item.id)" variant="danger">Eliminar</b-button></td>
            <td><b-button @click="editUsuario(item.id)">Modificar</b-button></td>
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
        eliminandoUsuario(id){
            this.$confirm().then(() => {
            this.$message({
                type: 'success',
                message: 'Usuario Eliminado.'
            });
            this.$store.dispatch('eliminarUsuarios',id);
            }).catch(() => {
            console.log('Se produjo un error al eliminar al usuario.')
            });
        },
        editUsuario(id){
            this.$router.push({name: 'actualizandoUsuario', params: {id: id}});
        }
    },
};
</script>