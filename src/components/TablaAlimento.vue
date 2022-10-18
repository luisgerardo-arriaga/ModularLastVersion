<template>  
<h1>busqueda</h1>
<div class="field has-addons is-pulled-right">
  <div class="control">
    <input v-model="search" type="text" class="input is-rounded" v-on:keyup.enter="searchData">
  </div>
  <button class="button is-success is-rounded" v-on:click="searchData">Buscar</button>
</div>
      <div class="container text-center mt-2">
        <div class="row">
            <div class="tabla col">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">TONELADAS</th>
                            <th scope="col">ETAPA</th>
                            <th scope="col">PRODUCTOS</th>
                            <th scope="col">FECHA</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr v-for="item in datosFormulas" :key="item.id">
                            <th scope="row">{{item.toneladas}}</th>
                            <th scope="row">{{item.etapaFormulaDat}}</th> 
                            <th scope="row">{{item.productos}}</th> 
                            <th scope="row">{{item.fecha}}</th> 
                        </tr>                                             
                    </tbody>
                </table>                
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      search: '',
      array:[]
    }
  },
  computed: {
    ...mapState(['inventarios', 'datosFormulas']),    
  },
  methods: {
    ...mapActions(['setInventario', 'cargarDBinventario', 'cargarDBDatosFormulas']),
  },
  created(){
    this.cargarDBinventario()
    this.cargarDBDatosFormulas()
  },

}
</script>

<style>

</style>