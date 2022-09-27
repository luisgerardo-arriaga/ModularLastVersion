<template>
    <div class="produccioncaseta container mt-5 ">
      <div class="row 1 mt-1"> <!--Aqui inicia la tabla para el llenado de datos  -->
            <div class="col">
                <div class="p-1 border bg.light text-start">
                    <p class="card-text ">
                        <strong>Nombre de la caseta: </strong>{{ caseta.nombreCaseta }}
                    </p>
                </div>
            </div>
            <div class="col">
                <div class="p-1 border bg.light text-end">
                    <p class="card-text" v-show="date">
                        <strong>Fecha Actual:</strong> {{ date }}
                    </p>
                </div>
            </div>          
        </div>
        <div class="row 2 mt-1"> <!-- segmento  -->
            <div class="col">
                <div class="p-1 border bg.light text-start">
                    <p class="card-text ">
                        <strong>Encargado: </strong>{{ caseta.encargadoCaseta }}
                    </p>
                </div>
            </div>
            <div class="col">
                <div class="p-1 border bg.light text-end">
                    <p class="card-text ">
                        <strong>Etapa: </strong>{{ caseta.etapaCaseta }}
                    </p>
                </div>
            </div>          
        </div> 
        <div class="row 3 mt-1"> <!--Segundo segmento  -->
            <div class="col">
                <div class="p-1 border bg.light text-start">
                    <p class="card-text ">
                        <strong>Gallinas totales a la fecha: </strong>{{ caseta.numeroGallinas }}
                    </p>
                </div>
            </div>
            <div class="col">
                <div class="p-1 border bg.light text-end">
                    <p class="card-text">
                        <strong>Bajas de gallinas: </strong>
                    </p>
                </div>
            </div>          
        </div>      
        <form @submit.prevent="procesarFormulario">
          <ProduccionCaseta :caseta_local="caseta_local" />        
        </form>
        <ProduccionCasetaM />
    </div> <!-- Fin del div principal -->
  </template>
  
  <script>
  import ProduccionCaseta from '../components/ProduccionCaseta.vue'
  const shortid = require('shortid');
  import { mapActions, mapState } from 'vuex'
  export default {
    components: {
      ProduccionCaseta,    
    },
    computed: {
          ...mapState(['caseta']), //mapea el JSON caseta
      },
      name: "DateComponent",
      data() {
        return {
          date: '',
          time: '',
          year: '',
          timestamp: '',
          fulldatetime: '',
          caseta_local: {                    
            id: '',
            idCaseta: '',
            cajas: 0,
            huevoGrande: 0,
            huevoChico: 0,
            huevoFragil: 0,
            huevoSucio: 0,
            huevoRoto: 0,
            huevoBlando: 0,
            huevoTotal: 0,
            semana: 0,
            diaRegistro: 0,          
            nombreCaseta: '',
          },
        }
      },
      methods: {
          ...mapActions(['setCaseta', 'setProduccionCasetas', 'cargarDBProduccion']), //mapea las acciones de la caseta la cual se editaran los datos
          // para obtener la fecha de la comptuadora
          printDate: function () {
            return new Date().toLocaleDateString();
            },
            printTime: function () {
              return new Date().toLocaleTimeString();
              },
              printYear: function () {
                return new Date().getFullYear();
                },
                printTimestamp: function () {
                  return Date.now();
                  },
                  printFullDate: function(){
                    return new Date();
                    },
                    
  
                    procesarFormulario(){      
                      this.caseta_local.idCaseta = this.$route.params.id
                      this.caseta_local.nombreCaseta = this.caseta.nombreCaseta 
                      this.caseta_local.id = shortid.generate()                    
                      //envia datos
                      this.setProduccionCasetas(this.caseta_local)
  
                      
  
                      this.caseta_local = {
                        id: '',
                        idCaseta:'',
                        cajas: 0,
                        huevoGrande: 0,
                        huevoChico: 0,
                        huevoFragil: 0,
                        huevoSucio: 0,
                        huevoRoto: 0,
                        huevoBlando: 0,
                        huevoTotal: 0,
                        semana: 0,
                        diaRegistro: 0,    
                        nombreCaseta: '',                  
                      }
                    }, 
          },
  mounted: function () {
         this.date = this.printDate();
         this.time = this.printTime();
         this.timestamp = this.printTimestamp();
         this.year = this.printYear();
         this.fulldatetime = this.printFullDate();
        },
  
      created(){
          this.setCaseta(this.$route.params.id) //monta la iunformacion de la caseta dependiendo del id de cada una
          this.cargarDBProduccion()  
      },
  }
  </script>
  
  <style scoped>
  button{
      background-color: #393E46;
      /* width: 200px; */
      transition: 0.7s;
      color: white;
      
  }
  button:hover{
     
      /* width: 200px; */
      color: white;
      box-shadow: 0px 0px 5px #252A34;
  }
  strong{
      color: #00ADB5;
  }
  p{
      color: black;
  }
  
  </style>