<template> 
      <div class="container text-center mt-2">
        <div reg-c class="form-floating mb-3 mt-3 col-6" >
            <input type="text" class="form-control buscadorInput" id="floatingNombreCaseta" placeholder="Buscador" v-model="texto" @keyup="ejemplo">
            <label for="floatingNombreCaseta">Buscador</label>
        </div>   
        <div class="input-group input-group-sm mb-3 col-6">
          
          < type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"><span class="input-group-text" id="inputGroup-sizing-sm">Small</span></>
        </div>     
        <div class="row">
            <div class="tabla col">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Toneladas</th>
                            <th scope="col">Etapa</th>
                            <th scope="col">Productos</th>
                            <th scope="col">Fecha</th>
                        </tr>
                    </thead>
                    <tbody v-if="arrayFiltro.length == 0">
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
          if(element.etapaFormulaDat.includes(this.texto) | element.fecha.includes(this.texto)){
            console.log(element) 
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