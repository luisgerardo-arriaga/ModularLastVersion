<template>
    {{this.$route.params.id}}
    <form @submit.prevent="registrarDatos()">
        <div v-for="(item, index) in inventarios" :key="item.id" 
    class="form-floating mb-3 mt-3 col-5" id="formu">
        <input required type="text" class="form-control" v-model="this.cantidadIn[index]" v-bind:key="item.id">
        <label for="floatingNombreCaseta">{{item.nomProducto}}</label>
        <p>{{(this.nombreP[index] = item.nomProducto)}}</p>
    </div>
    <button v-on:click="logg" class="btn col-3" type="submit">
        Añadir entrada                   
    </button>
    </form>
    <p>{{this.nombreP[1]}}</p>  
</template>

<script>
import shortid from 'shortid'
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            cantidadIn:[],   
            produc:'',   
            tonelada:0, 
            fulldatetime:'',               
            formula:{
                id:'',
                infoFormula:{
                    id:'',
                    productos:'',
                    toneladas:'',
                    fecha:''
                },
            },
            nombreP:[]
        }        
    },
    computed: {
            
            pruebabt(){
                console.log(prueba)
            },
            ...mapState(['inventarios', 'infoformulas',  'infoFormula',])
        },
        methods: {
            printDate: function(){
                return new Date().toLocaleDateString();
            },
            concatenarProductos(){
                var i = 0
            
                for(i = 0; i < this.nombreP.length; i++){
                    this.produc += this.nombreP[i] + ": " + this.cantidadIn[i] + ", "
                }
            },
            logg(){
                const x = this.cantidadIn
                this.concatenarProductos()  
                // this.registrarDatos()
                // console.log(this.infoFormula)            
            },
            registrarDatos(){
                this.sumaToneladas()
                this.formula.id = this.$route.params.id

                this.formula.infoFormula.id = shortid.generate()
                this.formula.infoFormula.productos = this.produc
                this.formula.infoFormula.toneladas = this.tonelada
                this.formula.infoFormula.fecha = this.fulldatetime
                console.log(this.formula.infoFormula)
                this.setInfoFormulas(this.formula)
                
                this.formula.id = ''

                this.formula.infoFormula.id =  ''
                this.formula.infoFormula.productos = ''
                this.formula.infoFormula.toneladas = ''
                this.formula.infoFormula.fecha = ''
                // this.setInfoForm(this.$route.params.id)

            },
            sumaToneladas(){
                var i = 0
                for(i = 0; i < this.cantidadIn.length; i++){
                    this.tonelada = parseInt(this.tonelada) + parseInt(this.cantidadIn[i])
                }
            },
            bloquearBoton() {
                if(this.caseta.nombreCaseta.trim() == "" || this.caseta.numeroGallinas.trim() == "" || this.caseta.etapaCaseta.trim() == "" || this.caseta.encargadoCaseta.trim() == "") {
                    return true
                }else{
                    return false
                }
            },
            ...mapActions(['cargarDBinventario', 'setInfoFormulas','setInfoForm','setFormula','updateInfoFormu']),
            pruebax(){
                // console.log(this.aux)
            }
        },
        created(){
            this.cargarDBinventario()

        },
        mounted: function () {
            this.fulldatetime = this.printDate();
        },
        
        
        
}
</script>

<style scoped>
#formu{
    margin: auto;
}
input[type="text"], input[type="number"]{
    background-color: #252A34;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    color: white;
    transition: 0.7s;
}
input[type="text"]:focus, input[type="number"]:focus{
    border: 0;
    background-color: #393E46;
}
label{
    color: white;
}
button{
    background-color: #393E46;
    /* width: 200px; */
    transition: 0.7s;
    color: white;
    
}
button:hover{
    background-color: #00b347;
    /* width: 200px; */
    color: white;
    box-shadow: 0px 0px 5px #252A34;
}
input:-webkit-autofill{
    caret-color: white;
    -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 999px #252A34 inset;
  transition: 1s;
}
/* input:-webkit-autofill:hover,   */
input:-webkit-autofill:focus{
  border: 1px solid #0d6efd;
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px #393E46 inset;
  /* transition: background-color 5000s ease-in-out 0s; */
}

</style>