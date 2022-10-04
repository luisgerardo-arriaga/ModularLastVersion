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
        <td>{{item.entrada}}</td>
        <td>{{parseInt(item.entrada) + parseInt(item.cantidad)}}</td>
        <td>{{item.salida}}</td>
        <td>{{item.saldo_act}}</td>
        <td>
          <button class="btn btn-danger me-2 btn-sm buttonDelete" @click="deleteInventario(item.id)" >
            <span class="material-icons btnDeletespan">delete</span>
          </button>
        </td>
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
.buttonDelete{
    float: left;  
    transition: .5s;
    border: none;     
}
.buttonDelete:hover{
    color: red;  
    background: none;  
}
</style>