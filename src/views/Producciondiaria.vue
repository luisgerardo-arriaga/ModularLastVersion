<template> 
<div>
    <label for="" class="fs-4 m-3" >Elige semana:</label>
    <select v-model="option" @click="prueba" class="selectSemana form-select-lg mb-3" aria-label="Default select example">
        <option value="1">Semana 1</option>
        <option value="2">Semana 2</option>
        <option value="3">Semana 3</option>
        <option value="4">Semana 4</option>
        <option value="5">Semana 5</option>
        <option value="6">Semana 6</option>
        <option value="7">Semana 7</option>
        <option value="8">Semana 8</option>
        <option value="9">Semana 9</option>
        <option value="10">Semana 10</option>
        <option value="11">Semana 11</option>
        <option value="12">Semana 12</option>
        <option value="13">Semana 13</option>
        <option value="14">Semana 14</option>
        <option value="15">Semana 15</option>
        <option value="16">Semana 16</option>
        <option value="17">Semana 17</option>
        <option value="18">Semana 18</option>
        <option value="19">Semana 19</option>
        <option value="20">Semana 20</option>
        <option value="21">Semana 21</option>
        <option value="22">Semana 22</option>
        <option value="23">Semana 23</option>
        <option value="24">Semana 24</option>
        <option value="25">Semana 25</option>
        <option value="26">Semana 26</option>
        <option value="27">Semana 27</option>
        <option value="28">Semana 28</option>
        <option value="29">Semana 29</option>
        <option value="30">Semana 30</option>
        <option value="31">Semana 31</option>
        <option value="32">Semana 32</option>
        <option value="33">Semana 33</option>
        <option value="34">Semana 34</option>
        <option value="35">Semana 35</option>
        <option value="36">Semana 36</option>
        <option value="37">Semana 37</option>
        <option value="38">Semana 38</option>
        <option value="39">Semana 39</option>
        <option value="40">Semana 40</option>
        <option value="41">Semana 41</option>
        <option value="42">Semana 42</option>
        <option value="43">Semana 43</option>
        <option value="44">Semana 44</option>
        <option value="45">Semana 45</option>
        <option value="46">Semana 46</option>
        <option value="47">Semana 47</option>
        <option value="48">Semana 48</option>
        <option value="49">Semana 49</option>
        <option value="50">Semana 50</option>
        <option value="51">Semana 51</option>
        <option value="52">Semana 52</option>
        <option value="53">Semana 53</option>
        <option value="54">Semana 54</option>
    </select>
</div>
    <div class="container text-center mt-2">
        <div class="row">
            <div class="tabla col">
                <table class="table table-striped">
                    <thead v-for="item in casetas" :key="item.id" class="headerCaseta">
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
                        <tr >
                            <th scope="row">Huevo Cajas</th>
                            <td>{{ cajasHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ cajasHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ cajasHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ cajasHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ cajasHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ cajasHuevos[5] }}</td> <!-- Jueves -->
                            <td>{{ cajasHuevos[6] }}</td> <!-- Viernes -->
                            <td class="total">{{ totalSemana[0] }}</td>
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
                            <td class="total">{{ totalSemana[1] }}</td>
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
                            <td class="total">{{ totalSemana[2] }}</td>
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
                            <td class="total">{{ totalSemana[3] }}</td>
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
                            <td class="total">{{ totalSemana[4] }}</td>
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
                            <td class="total">{{ totalSemana[5] }}</td>
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
                            <td class="total">{{ totalSemana[6] }}</td>
                        </tr>
                        <tr class="totalDia">
                            <th scope="row" >Total del dia</th>
                            <td>{{ totalHuevos[0] }}</td> <!-- Sabado --> 
                            <td>{{ totalHuevos[1] }}</td> <!-- Domingo -->
                            <td>{{ totalHuevos[2] }}</td> <!-- Lunes -->
                            <td>{{ totalHuevos[3] }}</td> <!-- Martes -->
                            <td>{{ totalHuevos[4] }}</td> <!-- Miercoles -->
                            <td>{{ totalHuevos[5] }}</td> <!-- Jueves -->
                            <td >{{ totalHuevos[6] }}</td> <!-- Viernes -->
                            <td class="total"></td>
                        </tr>
                    </tbody>
                </table>                
            </div>
            <div class="grafica col">
                <!-- <Grafica :totalHuevos="totalHuevos" :option="option"/> -->
                <canvas id="myChart"  width="400" height="500"></canvas>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import Grafica from "../components/Grafica.vue"
export default {
    data(){
        return{
            aux:'',
            banGra:true,
            ban:true,
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
            arre_grafia:[]
        }
    },
    components: {
        Grafica
    },
    computed: {
        ...mapState(['produccionDiaria', 'casetas'])
    },
    methods: {
        ...mapActions(['deleteProduccionCaseta', 'cargarDB']),
        
        prueba(){
            this.cajasHuevos = [0,0,0,0,0,0,0],
            this.grandeHuevos = [0,0,0,0,0,0,0],
            this.chicoHuevos = [0,0,0,0,0,0,0],
            this.fragilHuevos = [0,0,0,0,0,0,0],
            this.sucioHuevos = [0,0,0,0,0,0,0],
            this.rotoHuevos = [0,0,0,0,0,0,0],
            this.blandoHuevos = [0,0,0,0,0,0,0],
            this.totalHuevos = [0,0,0,0,0,0,0],
            this.totalSemana = [0,0,0,0,0,0,0],

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
                    let aux = 0
                    let aux1 = 0
                    let aux2 = 0
                    let aux3 = 0
                    let aux4 = 0
                    let aux5 = 0
                    let aux6 = 0
                    for (let i = 0; i < 6; i++) {         
                        aux += parseInt(this.cajasHuevos[i])                                      
                        aux1 += parseInt(this.grandeHuevos[i])                                      
                        aux2 += parseInt(this.chicoHuevos[i])                                      
                        aux3 += parseInt(this.fragilHuevos[i])                                      
                        aux4 += parseInt(this.sucioHuevos[i])                                      
                        aux5 += parseInt(this.rotoHuevos[i])                                      
                        aux6 += parseInt(this.blandoHuevos[i])                                     
                        this.totalSemana[0] = aux * 360
                        this.totalSemana[1] = aux1
                        this.totalSemana[2] = aux2
                        this.totalSemana[3] = aux3
                        this.totalSemana[4] = aux4
                        this.totalSemana[5] = aux5
                        this.totalSemana[6] = aux6
                    }
                }
                
            })   
            this.show_gra()
        },
        show_gra(){
          if(this.aux != this.option){
            console.log(1)
            this.ban = true
          }
        
          if(this.ban){
            this.ban = false
            this.aux = this.option
            console.log(this.aux)

            if(this.banGra){
              this.banGra = false
              this.grafica()
            }

            else{
              console.log(3)
              this.myChart.destroy()
              this.grafica()
            }
          }
        },
        grafica(){
          const ctx = document.getElementById('myChart');
          
          // myChart.refresh
          this.myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Sabado', 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'], 
              datasets: [{
                label: 'Produccion Total x Dia',
                data: this.totalHuevos,
                backgroundColor: [
                  'rgba(0, 173, 181,  0.2)',    
                  'rgba(0, 0, 0, 0.2)',
                  'rgba(60, 40, 104,  0.2)',
                  'rgba(249, 102, 102,  0.2)',                  
                ],
                borderColor: [
                  'rgba(0, 173, 181, 1)',
                  'rgba(0, 0, 0, 1)',
                  'rgba(60, 40, 104,  1)',                  
                  'rgba(249, 102, 102,  1)',                  
                ],
                borderWidth: 1,
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true
                }
              }
            }
          });
          this.myChart;
        }
    },    
    created() {    
        this.cargarDB()
    },
}
</script>

<style scoped>
    #myChart{
        margin-top: 53px;
    }
    .selectSemana{
        margin-top: 2rem;
    }
    .headerCaseta{
        background-color: black;
        color: white;
        font-size: larger;        
    }
    .total{
        /* color: red; */
        border-left:black 3px solid;
        border-right: black 3px solid;
    }
    .totalDia{
        border-top: black 3px solid;
    }
    .container{
        box-sizing: content-box;
        
    }
    .tabla{        
        margin-right: 1%;
        
    }
    .grafica{
        width: 200px;
        /* background-color: lightcoral; */
        margin-left: 1%;
    }
    table{
        border:black 2px solid;      
        border-top: none;  
        border-right: none;
    }
</style>