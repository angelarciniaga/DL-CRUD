<template>
  <div class="container">
    <Inicio />
    <Usuarios />
    <User />
  </div>
</template>

<script>
// @ is an alias to /src
import Inicio from '@/components/Inicio.vue';
import User from '@/components/User.vue';
import Usuarios from '@/components/Usuarios.vue';

export default {
  name: 'Home',
  components: {
    Inicio,
    User,
    Usuarios
  }
}
</script>
