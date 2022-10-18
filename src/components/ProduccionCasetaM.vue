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
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    computed: {
        ...mapState(['produccionDiaria', 'casetas'])
    },
    methods: {
        ...mapActions(['deleteProduccionCaseta', 'cargarDB'])
    },
    created(){
        this.cargarDB()
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