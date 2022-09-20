<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Codigo</th>
        <th scope="col">Producto</th>
        <th scope="col">Saldo inicial</th>
        <th scope="col">Entradas</th>
        <th scope="col">Total</th>
        <th scope="col">Salidas</th>
        <th scope="col">Saldo actual</th> 
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in inventarios" :key="item.id">
      <!-- <tr> -->
        <th scope="row">{{item.codigo}}</th>
        <td>{{item.nomProducto}}</td>
        <td>{{item.cantidad}}</td>
        <td>10</td>
        <td>56</td>
        <td>30</td>
        <td>26</td>
      </tr>
    </tbody>
  </table>  
  </template>
  
<script>
import { mapActions, mapState } from 'vuex'

export default {
 computed: {
    ...mapState(['inventarios'])
  },
  methods:{
    ...mapActions(['deleteInventario'])
  }   
}
</script>

<style scoped>

</style>