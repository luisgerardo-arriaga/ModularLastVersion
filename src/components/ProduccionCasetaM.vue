<template> 
<div class="container text-center">
  <div class="row align-items-start">
    <div class="col">
      One of three columns1      
    </div>
    <div class="col">
      One of three columns2
    </div>
  </div>
</div>
    <div class="InicioC listarCasetas container ">        
        <div class="row ">
            <div class="col" v-for="item in casetas" :key="item.id">
                  <div class="card col" style="max-width: 40rem; min-width: 20rem;">                      
                      <div  class="card-header card text-white bg-dark tarjetaTitulo">
                          <h5 class="fw-bold text-center">{{ item.nombreCaseta }}</h5>
                      </div>      
                      <!-- <div class="card-body tarjetaBody">                   
                          <p class="card-text fw-bold text-start"><strong>Gallinas: </strong>{{ item.numeroGallinas }}</p>
                          <p class="card-text fw-bold text-start"><strong>Etapa: </strong>{{ item.etapaCaseta }}</p>
                          <p class="card-text fw-bold text-start"><strong>Encargado: </strong>{{ item.encargadoCaseta }}</p>
                          <div class="divBotones">                              
                              <button class="btn btnDelete btn-danger ml-2 btn-sm buttonDelete" @click="deleteCasetas(item.id)"><span class="material-icons btnDeletespan">delete</span></button>
                              <router-link class="btn btnEdit btn-warning ml-2 btn-sm buttonEdit" :to="{name:'Editar', params:{id: item.id}}"><span class="material-icons">edit</span></router-link>
                          </div>
                      </div> -->
                  </div>                   
              </div>              
        </div>
    </div>
<table class="table table-striped">
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
</table>  
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
#buttons{
    display:flex;
}
.buttonDelete{
    float: left;  
    transition: .5s;
    border: none;     
}
.buttonEdit{
    float: right;
    transition: .5s;
    border: none; 

}
.buttonDelete:hover{
    color: red;  
    background: none;  
}
.buttonEdit:hover{           
    background: none;  
    color: #d66000;        
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