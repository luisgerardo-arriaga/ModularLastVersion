
<template>
  <div class="produccioncaseta container mt-5 ">      
       <div class="row 1 mt-1"> <!--Aqui inicia la tabla para el llenado de datos  -->
          <div class="col">
              <div class="p-1 border bg.light text-start">
                  <p class="card-text ">
                      <strong>Semana de produccion: </strong> 
                      <select v-model="caseta_local.semana" class="form-select" aria-label="Default select example" name="semana" id="semana" required>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                        <option value="32">32</option>
                        <option value="33">33</option>
                        <option value="34">34</option>
                        <option value="34">34</option>
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option value="38">38</option>
                        <option value="39">39</option>
                        <option value="40">40</option>
                        <option value="41">41</option>
                        <option value="42">42</option>
                        <option value="43">43</option>
                        <option value="44">44</option>
                        <option value="45">45</option>
                        <option value="46">46</option>
                        <option value="47">47</option>
                        <option value="48">48</option>
                        <option value="49">49</option>
                        <option value="50">50</option>
                        <option value="51">51</option>
                        <option value="52">52</option>
                        <option value="53">53</option>
                        <option value="54">54</option>
                      </select> 
                  </p>
              </div>
          </div>
          <div class="col">
              <div class="p-1 border bg.light text-end">
                  <p class="card-text">
                      <strong>Dia de registro:</strong> 
                      <select required v-model="caseta_local.diaRegistro" class="form-select" aria-label="Default select example" name="semana" id="semana"
                      :class="{'alert-danger' : ban,}">
                        <option value="Lunes">Lunes</option>
                        <option value="Martes">Martes</option>
                        <option value="Miercoles">Miercoles</option>
                        <option value="Jueves">Jueves</option>
                        <option value="Viernes">Viernes</option>
                        <option value="Sabado">Sabado</option>
                        <option value="Domingo">Domingo</option>
                      </select>
                  </p>
              </div>
          </div>          
      </div>
  <div class="row mt-5">
    <div class="col-2"></div>
    <div class="col-8">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="text-start">Producto</th>
            <th scope="col" class="text-end">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-start" scope="row">Cajas</th>
            <td class="text-end col-2"><input type="number" class="form-control" min="0" v-model.number.trim="caseta_local.cajas"></td>
          </tr>
          <tr>
            <th class="text-start" scope="row">Huevo grande</th>
            <td class="text-end"><input type="number" class="form-control" min="0" v-model.number.trim="caseta_local.huevoGrande"></td>
          </tr>
          <tr>
            <th class="text-start" scope="row">Huevo chico</th>
            <td class="text-end"><input type="number" class="form-control" min="0" v-model.number.trim="caseta_local.huevoChico"></td>
          </tr>
          <tr>
            <th class="text-start" scope="row">Huevo frágil</th>
            <td class="text-end"><input type="number" class="form-control" min="0" v-model.number.trim="caseta_local.huevoFragil"></td>
          </tr>
          <tr>
            <th class="text-start" scope="row">Huevo sucio</th>
            <td class="text-end"><input type="number" class="form-control" min="0" v-model.number.trim="caseta_local.huevoSucio"></td>
          </tr>
          <tr>
            <th class="text-start" scope="row">Huevo roto</th>
            <td class="text-end"><input type="number" class="form-control" min="0" v-model.number.trim="caseta_local.huevoRoto"></td>
          </tr>
          <tr>
            <th class="text-start" scope="row">Huevo blando</th>
            <td class="text-end"><input type="number" class="form-control" min="0" v-model.number.trim="caseta_local.huevoBlando"></td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th class="text-start" scope="row">Huevo total recolectado</th>
            <td class="text-end">{{ total }}</td>
          </tr>
        </thead>
      </table>
    </div>
    <div class="col-2"></div>
  </div>
  <div class="row botones">
    <div class="col">
      <div >
        
      <button @click="close" class="btn col-3" type="submit" :disabled="bloquearBoton">
        Guardar
      </button>
      </div>
</div>
  </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data(){
  return  {
    ban: false,
    vali: true,
  }
  },
  props: {
    caseta_local: Object
  },
  created(){
    // this.setCaseta(this.$route.params.id)
  },
  computed:{
    bloquearBoton() {
      this.ban = false;
      this.vali = false;
      this.produccionDiaria.forEach(element => {
        if(element.diaRegistro == this.caseta_local.diaRegistro && 
          element.semana == this.caseta_local.semana){
            if(this.caseta_local.id != element.id && this.$route.params.id == element.idCaseta){
              this.ban = true
            }
          }
      });
      if(this.total <= 0  || this.ban){
        this.vali = true;
      }
      return this.vali;
    },
    total() {            
      return this.caseta_local.huevoTotal = parseInt(this.caseta_local.cajas * 360) + parseInt(this.caseta_local.huevoGrande) + parseInt(this.caseta_local.huevoChico) + parseInt(this.caseta_local.huevoFragil) + parseInt(this.caseta_local.huevoSucio) + parseInt(this.caseta_local.huevoRoto) + parseInt(this.caseta_local.huevoBlando)
    },     
    ...mapState(['produccionDiaria'])
  },
  methods: {
    checkForm:function(e) {
      if( this.cajas) return true;
      this.errors = [];
      if(!this.cajas) this.errors.push("Age required.");
      e.preventDefault();
    }
  },
}
    

</script>

<style scoped>
strong{
    color: #00ADB5;
}
p{
    color: black;
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
strong{
    color: #00ADB5;
}
p{
    color: black;
}
#semana{
  transition: 1s;
}

</style>