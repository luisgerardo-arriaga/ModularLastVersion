<template>    
    <div class="InicioC listarCasetas container">        
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
                              <Modal2 @close="toggleModal2" :modalActive="modalActivee">
                                <div class="ingresocaseta container">
                                <h4 style="color: white">
                                    Se eliminara la formula {{this.deleteNCaseta}}
                                    ¿Desea continuar?
                                </h4>
                                <span class="material-symbols-outlined" id="icon-delete">
                                    delete_forever
                                </span>

                                <div id="con-btdt">
                                    <button id="" class="delete-m btn btnSi btn-danger ml-2 btn-sm buttonDelete" @click="deleteFormulas(this.deleteId),toggleModal2()">
                                    <span id ="" class="icon-palo material-symbols-outlined">task_alt</span>
                                    </button>
                                    <button id="no" class="delete-m btn btnDelete btn-danger ml-2 btn-sm buttonDelete" @click="toggleModal2">
                                        <span class="icon-palo material-symbols-outlined">close</span>
                                    </button>
                                </div>
                                </div>
                            </Modal2>
                            <div >
                                    <button @click="prDelete(item.id, item.nombreFormula)" class="btn btnDelete btn-danger ml-2 btn-sm buttonDelete" ><span  @click="toggleModal2" class="material-icons btnDeletespan">delete</span></button>
                            </div>
                              <!-- <button class="btn btnDelete btn-danger ml-2 btn-sm buttonDelete" @click="deleteFormulas(item.id)"><span class="material-icons btnDeletespan">delete</span></button> -->
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
</template>

<script >
import {mapActions, mapState} from 'vuex'
import Modal2 from "@/components/Modal2.vue";
import { ref } from "vue";

export default {
    data(){
        return  {
            deleteId:"",
            deleteNCaseta:"",
        }
    },
    components: {
        Modal2,
    },
    computed: {
        ...mapState(['formulas', 'datosFormulas'])
    },
    methods: {
        prDelete(dId, dNCaseta){
            this.deleteId = dId
            this.deleteNCaseta = dNCaseta
        },
        ...mapActions(['deleteFormulas', 'deleteFormulasDatos']),
    },
    
    setup() {
        const modalActivee = ref(false);

        const toggleModal2 = () => {
        modalActivee.value = !modalActivee.value;
        };

        return { modalActivee, toggleModal2 };
    },
}
</script>

<style scoped>
.router-casPo{
    color: black;
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
/* style buttons  */
#icon-delete{
    color: greenyellow;
    font-size: 100px;
}
.divBotones{
    padding-bottom: 50px;
    padding-top: 10px;
}
#con-btdt{
    height: 40px;
    max-width: 540px;
    width: 40%;
    min-width: 2em;
    padding: 0;
    margin-left: 24%;
    margin-bottom: 8px;
    /* background-color: red; */
    display:flex;
}
.icon-palo{
    font-size: 2.5em;
}

.delete-m{
    /* background: none;
    border: 1;
    transition: 0.8s;
    border-color: #252A34;
    margin: auto; */
    background: none;
    border-radius: 40px;
    width: 0px;
    height: 0px;
    margin-left: auto;
    margin-right: auto;
}
.btnSi:hover{
    color: green;
    background: none;
}
/* ################## */
</style>

