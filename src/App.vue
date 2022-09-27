<template>
  <div id="nav">
    <Navbar style="z-index:100;"/>
  </div>
  <router-view/>
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
    this.cargarDB(),
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
}
#nav a.router-link-exact-active {
  color: #00ADB5;
}
</style>
