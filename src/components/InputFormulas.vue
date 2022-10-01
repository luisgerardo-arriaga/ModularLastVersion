<template>
    <h2>Registro de nueva fomrula </h2>
    <div id="alert-nuevo" class="alert-danger mb-3 mt-3 col-5 " v-show="validarSalida">
        {{this.strSalida}}
    </div>
    <form @submit.prevent="registrarDatos()">
        <div v-for="(item, index) in inventarios" :key="item.id" 
    class="form-floating mb-3 mt-3 col-5" id="formu">
                
        <input required type="text" class="form-control" v-model="this.cantidadIn[index]" v-bind:key="item.id">
        <label for="floatingNombreCaseta">{{item.nomProducto}}</label>
        <p v-show="false">{{(this.nombreP[index] = item.nomProducto)}}</p>
        <p v-show="false">{{(this.arre_cantidad[index] = item.cantidad)}}</p>
    </div>
    <button v-on:click="logg(), registrarSalida()" :disabled="this.banSalida" class="btn col-3" type="submit">
        Añadir entrada                   
    </button>
    </form>
</template>

<script>
import shortid from 'shortid'
import { mapActions, mapState } from 'vuex'

export default {
    data() {
        return {
            banSalida: false,
            strSalida:'',
            cantidadIn:[],   
            arre_cantidad:[],   
            produc:'',   
            tonelada:0, 
            fulldatetime:'',               
            formulax:{
                id:'',
                infoFormula:{
                    id:'',
                    productos:'',
                    toneladas:'',
                    fecha:''
                },
            },
            inventario: {
                id:'',
                salida: '',
                saldo_act: '',
            },
            nombreP:[]
        }        
    },
    computed: {
        ...mapState(['inventarios', 'infoformulas',  'infoFormula','formula']),

        validarSalida(){
            this.banSalida = false
                var i = 0
                for(i = 0; i < this.cantidadIn.length; i++){
                    if(parseInt(this.inventarios[i].saldo_act) < parseInt(this.cantidadIn[i])){
                        this.strSalida = 'La cantiadad que desea resgistrar en ' + this.inventarios[i].nomProducto +' es mayor a la que se encuentra en el inventario.'
                        this.banSalida = true
                        return this.banSalida
                    }
                }
            },
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
            },
            registrarDatos(){
                this.sumaToneladas()
                this.formulax.id = this.$route.params.id

                this.formulax.infoFormula.id = shortid.generate()
                this.formulax.infoFormula.productos = this.produc
                this.formulax.infoFormula.toneladas = this.tonelada
                this.formulax.infoFormula.fecha = this.fulldatetime
                console.log(this.formulax.infoFormula)
                this.setInfoFormulas(this.formulax)
                
                this.formula.id = ''

                this.formulax.infoFormula.id =  ''
                this.formulax.infoFormula.productos = ''
                this.formulax.infoFormula.toneladas = ''
                this.formulax.infoFormula.fecha = ''
                // this.setInfoForm(this.$route.params.id)

            },
            registrarSalida(){
                var i = 0
                for(i = 0; i < this.cantidadIn.length; i++){
                    if(parseInt(this.inventarios[i].entrada) < parseInt(this.cantidadIn[i])){
                        this.inventario.id = this.inventarios[i].id
                        this.inventario.salida = parseInt(this.cantidadIn[i]) + parseInt(this.inventarios[i].salida)
                        this.inventario.saldo_act = parseInt(this.inventarios[i].saldo_act) - parseInt(this.cantidadIn[i])
                        this.updateInventarioOut(this.inventario)
                    }
                }
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
            ...mapActions(['cargarDBinventario', 'setInfoFormulas','setInfoForm','setFormula','updateInfoFormu', 'updateInventarioOut']),
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
#alert-nuevo{
    margin: auto;
    border-radius: 5px;
}
h2{
    margin-bottom: 55px;
}
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
    margin-bottom: 28px;
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