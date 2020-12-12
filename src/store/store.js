import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../main';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [],
  },
  getters: {
    mostrarUsuarios(state) {
      return state.usuarios;
    }
  },
  mutations: {
    mutarUsuarios(state, arreglo) {
      state.usuarios = arreglo;
    }
  },
  actions: {
    traerData({commit}) {
      db.collection("usuarios").get().then(respuesta => {
        let arreglo = [];
        respuesta.forEach(element => {
          arreglo.push({
            nombre: element.data().nombre,
            apellido: element.data().apellido,
            email: element.data().email,
            id: element.id
          }) 
        });
        commit('mutarUsuarios', arreglo);
      });
    },
    agregandoUsuarios(context,data){
      db.collection("usuarios").add({
        nombre: data.nombre,
        apellido: data.apellido,
        email: data.email
      }).then(resp => {
        console.log(resp);
      })
    },
    eliminarUsuarios(context, id) {
      db.collection("usuarios").doc(id).delete().then(() => {
        console.log('usuario eliminado');
      }).catch (error => {
        console.log(error);
      })
    },
    actualizandoUsuario(context,datos){
      db.collection('usuarios').doc(datos.id).update({
        nombre: datos.nombre,
        apellido: datos.apellido,
        email: datos.email,
      }).then(() =>{
        console.log('Actualizando');
      })
    }
  },
  
})
