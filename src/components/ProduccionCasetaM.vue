<template> 
    <div class="InicioC listarCasetas container mt-3">        
        <div class="row ">
            <div class="col-sm-6 col-md-3 " v-for="item in casetas" :key="item.id">
                <router-link class="btn btnEdit buttonEdit" :to="{name:'Producciondiaria', params:{id: item.id}}">
                  <div class="card mb-5 tarjetaCaseta" style="max-width: 20rem; min-width: 10rem;">
                      <div  class="card-header card text-white bg-dark tarjetaTitulo">
                          <h5 class="fw-bold text-center">{{ item.nombreCaseta }}</h5>
                      </div>
                      <div class="card-body tarjetaBody">   
                            <p class="card-text fw-bold text-start"><strong>Gallinas: </strong>{{ item.numeroGallinas }}</p>
                            <p class="card-text fw-bold text-start"><strong>Etapa: </strong>{{ item.etapaCaseta }}</p>
                            <p class="card-text fw-bold text-start"><strong>Encargado: </strong>{{ item.encargadoCaseta }}</p>
                        </div>
                    </div>
                </router-link>      
              </div>
        </div>
    </div>
    <!-- PRODUCCION -->
<!-- <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nombre de caseta</th>
      <th scope="col">Cajas de huevo</th>
      <th scope="col">Huevo grande</th>
      <th scope="col">Huevo chico</th>
      <th scope="col">Huevo fragil</th>
      <th scope="col">Huevo sucio</th>
      <th scope="col">Huevo roto</th>
      <th scope="col">Huevo blando</th>
      <th scope="col">Dia</th>
      <th scope="col">Semana</th>
      <th scope="col">Total</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in produccionDiaria" :key="item.id">
      <th scope="row">{{item.nombreCaseta}}</th>
      <td>{{item.cajas}}</td>
      <td>{{item.huevoGrande}}</td>
      <td>{{item.huevoChico}}</td>
      <td>{{item.huevoFragil}}</td>
      <td>{{item.huevoSucio}}</td>
      <td>{{item.huevoRoto}}</td>
      <td>{{item.huevoBlando}}</td>
      <td>{{item.diaRegistro}}</td>
      <td>{{item.semana}}</td>
      <td>{{item.huevoTotal}}</td>    
      <td>
        <div id="buttons">
            <button class="btn btn-danger me-2 btn-sm buttonDelete" @click="deleteProduccionCaseta(item.id)">
            <span class="material-icons btnDeletespan">delete</span>
        </button>
        <router-link
            class="btn btn-warning btn-sm buttonEdit"
            :to="{
                name: 'EditarProduccion',
                params: {
                    id: item.id
                }
            }"
            >
            <span class="material-icons">edit</span>
        </router-link>
        </div>
      </td>  
    </tr>
  </tbody>
</table>   -->
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['produccionDiaria', 'casetas'])
    },
    methods: {
        ...mapActions(['deleteProduccionCaseta'])
    }
}

</script>


<style scoped>
.router-casPo{
    text-decoration: none;
}
.tarjetaCaseta{
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;   
    border-radius: 15px;
    transition: 1s;
}
.tarjetaCaseta:hover{
        cursor: pointer;
        box-shadow: 0px 9px 18px 7px rgba(0,0,0,0.33);
        -webkit-box-shadow: 0px 9px 18px 7px rgba(0,0,0,0.33);
        -moz-box-shadow: 0px 9px 18px 7px rgba(0,0,0,0.33);
    }
.tarjetaTitulo{
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
}
.tarjetaTitulo{
    border-top-left-radius: 15px;
    border-top-right-radius: 12px;
}
strong{
    color: #00ADB5;
}
p{
    color: black;
}

#buttons{
    display:flex;
}
.buttonDelete{
    float: left;  
    transition: .5s;
    border: none;     
}
.buttonEdit{
    transition: .5s;
    border: none;     
    width: 100%;
    margin-top: 5px;       
}
.buttonDelete:hover{
    color: red;  
    background: none;  
}
.buttonEdit:hover{           
    background: none;  
    color: green;     
}

strong{
    color: #00adb5;
}
p{
    color: black;
}
.divcontenedorT{
    background-color: red;
    
}

</style>