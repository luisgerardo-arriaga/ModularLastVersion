<template>
  <div id="nav">
    <Navbar style="z-index:100;"/>
  </div>
  <div id="rout">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['cargarDB', 'cargarDBProduccion'])
  },
  created() {    
    this.cargarDBProduccion()
  }  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  /* background-color: red; */
}
#nav a.router-link-exact-active {
  color: #00ADB5;
}
#rout{
  display: block;
  overflow-x: auto;
  white-space: nowrap;
}
</style>
