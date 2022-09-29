<template>
    <div class="InicioC listarCasetas container ">        
        <div class="row ">
            <div class="col-sm-6 col-md-3 " v-for="item in formulas" :key="item.id" :to="{name:'datosFormula', params:{id: item.id}}">
                  <div class="card mb-5 tarjetaCaseta" style="max-width: 20rem; min-width: 10rem;" :to="{name:'datosFormula', params:{id: item.id}}">
                  <router-link class="router-casPo" :to="{name:'datosFormula', params:{id: item.id}}">
                      <div  class="card-header card text-white bg-dark tarjetaTitulo">
                          <h5 class="fw-bold text-center">{{ item.nombreFormula }}</h5>
                      </div>                  
                    </router-link>
                      <div class="card-body tarjetaBody">   
                          <router-link class="router-casPo" :to="{name:'datosFormula', params:{id: item.id}}">
                        
                          <p class="card-text fw-bold text-start"><strong>Etapa: </strong>{{ item.etapaFormula }}</p>
                        
                              </router-link>    
                          <div class="divBotones">                              
                              <router-link class="btn btnEdit btn-warning ml-2 btn-sm buttonEdit" :to="{name:'EditarFormulas', params:{id: item.id}}"><span class="material-icons">edit</span></router-link>
                              <button class="btn btnDelete btn-danger ml-2 btn-sm buttonDelete" @click="deleteFormulas(item.id)"><span class="material-icons btnDeletespan">delete</span></button>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
</template>

<script >
import {mapActions, mapState} from 'vuex'
export default {
    computed: {
        ...mapState(['formulas'])
    },
    methods: {
        ...mapActions(['deleteFormulas'])
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
.buttonDelete{
    float: left;  
    border: none; 

    transition: .5s;
}
.divBotones{
    padding-bottom: 50px;
}
.buttonEdit{
    border: none; 
    float: right;
    transition: .5s;
}
.btnDelete:hover{
    color: red;  
    background: none;  
}
.btnEdit:hover{           
    background: none;  
    color: #d66000;        
}

.tarjetaTitulo{
    border-top-left-radius: 15px;
    border-top-right-radius: 12px;
}
strong{
    color: #00ADB5;
}
</style>

