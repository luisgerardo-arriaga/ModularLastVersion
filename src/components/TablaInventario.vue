<template>
{{inventarios}}
  <div class="produccioncaseta  container mt-5 ">      
      <!-- Seccion del formulario de produccion -->
      
      <div class="row mt-5">
          
        <div class="col-sm-6 col-md-2"></div>
        <div class="col-8">
            <table class="table">
                
                <thead>
                    
                        <tr> 
                            <th class="text-start" scope="row">Código</th>
                            <td scope="col" class="text-end">Producto</td>
                            <td scope="col" class="text-end">Cantidad/Saldo Inicial</td>
                            <td scope="col" class="text-end">Entradas</td>
                            <td scope="col" class="text-end">Total</td>
                            <td scope="col" class="text-end">Salida</td>
                            <td scope="col" class="text-end">Saldo final</td>
                        </tr>
                  </thead>

                  <tbody>
                      <tr>
                            <th class="text-center" scope="row">1</th>
                            <td class="text-center">100</td>
                            <td class="text-center">100</td>
                            <td class="text-center">100</td>
                            <td class="text-center">100</td>
                            <td class="text-center">100</td>
                            <td class="text-center">100</td>
                      </tr>
                                           
                  </tbody>
                
              </table>
          </div>
          <div class="col-2"></div>
      </div>

      
  </div>
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