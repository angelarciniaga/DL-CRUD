<template>
  <div class="container">
    <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
      <template #header>Desafío</template>

      <template #lead>
        Desafío - Creación de CRUD mediante Vuex
      </template>

      <hr class="my-4">

      <p>
        Crear un CRUD, un sistema que pueda crear un usuario, editar usuarios, eliminar usuarios y listar los usuarios, hecho con dos componentes, uno con un formulario para el envío de datos, el otro listar los usuarios con un botón en cada una de las filas de usuarios, para eliminar dicho usuario, este sistema se conectará a una api que se conecta a la base de datos de Firebase a través de cloud functions. Hecho con ayuda de vuex.

      </p>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Inicio',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
