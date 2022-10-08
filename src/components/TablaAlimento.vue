<template>  
      <div class="container text-center mt-2">
        <div class="row">
            <div class="tabla col">
                <table class="table table-striped">
                    <!-- <thead v-for="item in casetas" :key="item.id" class="headerCaseta">
                        <th scope="col" v-if="this.$route.params.id == item.id">{{item.nombreCaseta}}</th>
                    </thead> -->
                    <thead>
                        <tr>
                            <th scope="col">TONELADAS</th>
                            <th scope="col">ETAPA</th>
                            <th scope="col">PRODUCTOS</th>
                            <th scope="col">FECHA</th>
                            <!-- <th scope="col" v-for="item in inventarios" :key="item.id">{{item.nomProducto}}</th> -->
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