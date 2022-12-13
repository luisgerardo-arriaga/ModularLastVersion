<template> 
      <div class="container text-center mt-2">
        <div reg-c class="mb-3 mt-3 col-3" >
            <input type="text" class="form-control buscadorInput" placeholder="Buscar por producto o etapa" v-model="texto" @keyup="ejemplo">            
        </div>   
        <div class="row">
            <div class="tabla col">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Kilogramos</th>
                            <th scope="col">Etapa</th>
                            <th scope="col">Productos</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody v-if="texto.length == 0">
                        <tr v-for="item in datosFormulas" :key="item.id">
                            <th scope="row">{{item.toneladas}}</th>
                            <th scope="row">{{item.etapaFormulaDat}}</th> 
                            <th scope="row">{{item.productos}}</th> 
                            <th scope="row">{{item.fecha}}</th>
                        </tr>                                             
                    </tbody>
                    <tbody v-else>
                        <tr v-for="item in arrayFiltro" :key="item.id">
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
  data(){
    return{
      texto:'',
      arrayFiltro: []
    }
  },
  computed: {
    ...mapState(['inventarios', 'datosFormulas']),    
  },
  methods: {
    ...mapActions(['setInventario', 'cargarDBinventario', 'cargarDBDatosFormulas']),
    ejemplo(){
      if(this.texto != ''){
        this.arrayFiltro = []
        this.datosFormulas.forEach(element => {
          if(element.etapaFormulaDat.includes(this.texto) | element.fecha.includes(this.texto)| element.productos.includes(this.texto)){             
            this.arrayFiltro.push(element) 
          }
        });
        console.log(this.texto)        
      }
      else{
        this.arrayFiltro = this.datosFormulas
      }
    }
  },
  created(){
    this.cargarDBinventario()
    this.cargarDBDatosFormulas()  
    this.arrayFiltro = this.datosFormulas        
  },
  

}
</script>

<style scoped>
input[type="text"]{
    background-color: #252A34;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    color: white;
    transition: 0.7s;
}
input[type="text"]:focus{
    border: 0;
    background-color: #393E46;
}
label{
    color: white;
}

</style>