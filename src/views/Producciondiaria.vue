<template> 
<div>
    <br>
    <label for="">Elige semana:</label>
    <select v-model="option" @click="prueba">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
    </select>
</div>
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
                            <th scope="row">Huevo Cajas</th>
                            <td>{{ cajasHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ cajasHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ cajasHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ cajasHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ cajasHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ cajasHuevos[5] }}</td> <!-- Jueves -->
                            <td>{{ cajasHuevos[6] }}</td> <!-- Viernes -->
                            <td>{{ totalSemana[0] }}</td>
                        </tr>                     
                        <tr>
                            <th scope="row">Huevo Grande</th>
                            <td>{{ grandeHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ grandeHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ grandeHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ grandeHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ grandeHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ grandeHuevos[5] }}</td> <!-- Jueves -->
                            <td>{{ grandeHuevos[6] }}</td> <!-- Viernes -->
                            <td>{{ totalSemana[1] }}</td>
                        </tr>   
                        <tr>
                            <th scope="row">Huevo Chico</th>
                            <td>{{ chicoHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ chicoHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ chicoHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ chicoHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ chicoHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ chicoHuevos[5] }}</td> <!-- Jueves -->
                            <td>{{ chicoHuevos[6] }}</td> <!-- Viernes -->
                            <td>{{ totalSemana[2] }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Huevo Fragil</th>
                            <td>{{ fragilHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ fragilHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ fragilHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ fragilHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ fragilHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ fragilHuevos[5] }}</td> <!-- Jueves -->
                            <td>{{ fragilHuevos[6] }}</td> <!-- Viernes -->
                            <td>{{ totalSemana[3] }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Huevo Sucio</th>
                            <td>{{ sucioHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ sucioHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ sucioHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ sucioHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ sucioHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ sucioHuevos[5] }}</td> <!-- Jueves -->
                            <td>{{ sucioHuevos[6] }}</td> <!-- Viernes -->
                            <td>{{ totalSemana[4] }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Huevo Roto</th>
                            <td>{{ rotoHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ rotoHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ rotoHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ rotoHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ rotoHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ rotoHuevos[5] }}</td> <!-- Jueves -->
                            <td>{{ rotoHuevos[6] }}</td> <!-- Viernes -->
                            <td>{{ totalSemana[5] }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Huevo Blando</th>
                            <td>{{ blandoHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ blandoHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ blandoHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ blandoHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ blandoHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ blandoHuevos[5] }}</td> <!-- Jueves -->
                            <td>{{ blandoHuevos[6] }}</td> <!-- Viernes -->
                            <td>{{ totalSemana[6] }}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total del dia</th>
                            <td>{{ totalHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ totalHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ totalHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ totalHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ totalHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ totalHuevos[5] }}</td> <!-- Jueves -->
                            <td>{{ totalHuevos[6] }}</td> <!-- Viernes -->
                            <!-- <td>{{ totalSemana[7] }}</td> -->
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
            option: null,
            cajasHuevos:[0,0,0,0,0,0,0],
            grandeHuevos:[0,0,0,0,0,0,0],
            chicoHuevos:[0,0,0,0,0,0,0],
            fragilHuevos:[0,0,0,0,0,0,0],
            sucioHuevos:[0,0,0,0,0,0,0],
            rotoHuevos:[0,0,0,0,0,0,0],
            blandoHuevos:[0,0,0,0,0,0,0],
            totalHuevos:[0,0,0,0,0,0,0],
            totalSemana: [0,0,0,0,0,0,0],
        }
    },
    computed: {
        ...mapState(['produccionDiaria', 'casetas'])
    },
    methods: {
        ...mapActions(['deleteProduccionCaseta']),
        prueba(){
            this.produccionDiaria.forEach(element => {
                if(element.idCaseta == this.$route.params.id && element.semana == this.option){
                    if(element.diaRegistro == "Sabado"){
                        this.cajasHuevos[0] = element.cajas
                        this.grandeHuevos[0] = element.huevoGrande
                        this.chicoHuevos[0] = element.huevoChico
                        this.fragilHuevos[0] = element.huevoFragil
                        this.sucioHuevos[0] = element.huevoSucio
                        this.rotoHuevos[0] = element.huevoRoto
                        this.blandoHuevos[0] = element.huevoBlando
                        this.totalHuevos[0] = element.huevoTotal                        
                    }
                    if(element.diaRegistro == "Domingo"){
                        this.cajasHuevos[1] = element.cajas
                        this.grandeHuevos[1] = element.huevoGrande
                        this.chicoHuevos[1] = element.huevoChico
                        this.fragilHuevos[1] = element.huevoFragil
                        this.sucioHuevos[1] = element.huevoSucio
                        this.rotoHuevos[1] = element.huevoRoto
                        this.blandoHuevos[1] = element.huevoBlando
                        this.totalHuevos[1] = element.huevoTotal
                    }
                    if(element.diaRegistro == "Lunes"){
                        this.cajasHuevos[2] = element.cajas
                        this.grandeHuevos[2] = element.huevoGrande
                        this.chicoHuevos[2] = element.huevoChico
                        this.fragilHuevos[2] = element.huevoFragil
                        this.sucioHuevos[2] = element.huevoSucio
                        this.rotoHuevos[2] = element.huevoRoto
                        this.blandoHuevos[2] = element.huevoBlando
                        this.totalHuevos[2] = element.huevoTotal
                    }
                    if(element.diaRegistro == "Martes"){
                        this.cajasHuevos[3] = element.cajas
                        this.grandeHuevos[3] = element.huevoGrande
                        this.chicoHuevos[3] = element.huevoChico
                        this.fragilHuevos[3] = element.huevoFragil
                        this.sucioHuevos[3] = element.huevoSucio
                        this.rotoHuevos[3] = element.huevoRoto
                        this.blandoHuevos[3] = element.huevoBlando
                        this.totalHuevos[3] = element.huevoTotal
                    }
                    if(element.diaRegistro == "Miercoles"){
                        this.cajasHuevos[4] = element.cajas
                        this.grandeHuevos[4] = element.huevoGrande
                        this.chicoHuevos[4] = element.huevoChico
                        this.fragilHuevos[4] = element.huevoFragil
                        this.sucioHuevos[4] = element.huevoSucio
                        this.rotoHuevos[4] = element.huevoRoto
                        this.blandoHuevos[4] = element.huevoBlando
                        this.totalHuevos[4] = element.huevoTotal
                    }
                    if(element.diaRegistro == "Jueves"){
                        this.cajasHuevos[5] = element.cajas
                        this.grandeHuevos[5] = element.huevoGrande
                        this.chicoHuevos[5] = element.huevoChico
                        this.fragilHuevos[5] = element.huevoFragil
                        this.sucioHuevos[5] = element.huevoSucio
                        this.rotoHuevos[5] = element.huevoRoto
                        this.blandoHuevos[5] = element.huevoBlando
                        this.totalHuevos[5] = element.huevoTotal
                    }
                    if(element.diaRegistro == "Viernes"){
                        this.cajasHuevos[6] = element.cajas
                        this.grandeHuevos[6] = element.huevoGrande
                        this.chicoHuevos[6] = element.huevoChico
                        this.fragilHuevos[6] = element.huevoFragil
                        this.sucioHuevos[6] = element.huevoSucio
                        this.rotoHuevos[6] = element.huevoRoto
                        this.blandoHuevos[6] = element.huevoBlando
                        this.totalHuevos[6] = element.huevoTotal
                    }
                }
                this.totalSemana[0] += parseInt(this.cajasHuevos[0] * 360)
            })            
            
            // for (let i = 0; i < 7; i++) {
            //     this.totalSemana[0] += parseInt(this.cajasHuevos[i] * 360)
            //     this.totalSemana[1] += parseInt(this.grandeHuevos[i])
            //     this.totalSemana[2] += parseInt(this.chicoHuevos[i])
            //     this.totalSemana[3] += parseInt(this.fragilHuevos[i])
            //     this.totalSemana[4] += parseInt(this.sucioHuevos[i])
            //     this.totalSemana[5] += parseInt(this.rotoHuevos[i])
            //     this.totalSemana[6] += parseInt(this.blandoHuevos[i])                
            // }            
        },
        prueba2(){
            this.totalSemana[0] == 0;
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