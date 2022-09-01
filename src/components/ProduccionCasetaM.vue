<template>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
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
        ...mapState(['produccionDiaria'])
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
    color: #00ADB5;
}
p{
    color: black;
}

</style>