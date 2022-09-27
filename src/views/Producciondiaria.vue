<template> 
{{produccionDiaria}}
{{this.$route.params.id}}
<button @click="busqueda">
    puchame
</button>
    <div class="container text-center mt-5">
        <div class="row">
            <div class="tabla col">
                <table class="table">
                    <thead v-for="item in casetas" :key="item.id">
                        <th scope="col" v-if="this.$route.params.id == item.id">{{item.nombreCaseta}}</th>
                    </thead>
                    <thead>
                        <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Sabado</th>
                            <th scope="col">Domingo</th>
                            <th scope="col">Lunes</th>
                            <th scope="col">Martes</th>
                            <th scope="col">Miercoles</th>
                            <th scope="col">Jueves</th>
                            <th scope="col">Viernes</th>
                            <th scope="col" class="total">TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Huevo Grande</th>
                            <td>a</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>   
                        <tr>
                            <th scope="row">Huevo Chico</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">Huevo Fragil</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">Huevo Sucio</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">Huevo Roto</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">Huevo Blando</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr >
                            <th scope="row">Huevo Cajas</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>                     
                    </tbody>
                </table>                
            </div>
            <div class="grafica col">
                2 of 2
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    data(){
        return{
            arreHuevos:[0,0,0,0,0,0,0]
        }
    },
    computed: {
        ...mapState(['produccionDiaria', 'casetas'])
    },
    methods: {
        ...mapActions(['deleteProduccionCaseta']),
        busqueda(){
            this.produccionDiaria.forEach(element => {
                if(element.idCaseta == this.$route.params.id){
                    this.validacionHuevo(this.arreHuevos,element.diaRegistro, element.huevoGrande)                    
                }
                console.log(this.arreHuevos)
            });          
        },
        validacionHuevo(huevo, dia, cantidad){
            if(dia == "Sabado"){
                huevo[0] = cantidad
            }  
            if(dia == "Domingo"){
                huevo[1] = cantidad
            }    
            if(dia == "Lunes"){
                huevo[2] = cantidad
            }    
            if(dia == "Martes"){
                huevo[3] = cantidad
            }    
            if(dia == "Miercoles"){
                huevo[4] = cantidad
            }    
            if(dia == "Jueves"){
                huevo[5] = cantidad
            }    
            if(dia == "Viernes"){
                huevo[6] = cantidad
            }           
        }
    },
}
</script>

<style scoped>
    .total{
        color: red;
        border-left:red 5px solid;
    }
    .container{
        box-sizing: content-box;
    }
    .tabla{
        background-color: lightblue;
        margin-right: 1%;
    }
    .grafica{
        background-color: lightcoral;
        margin-left: 1%;
    }
</style>