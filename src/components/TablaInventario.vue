<template>
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Codigo</th>
        <th scope="col">Producto</th>
        <th scope="col">Saldo inicial</th>
        <th scope="col">Entradas</th>
        <th scope="col">Total</th>
        <th scope="col">Salidas</th>
        <th scope="col">Saldo actual</th> 
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in inventarios" :key="item.id">
      <!-- <tr> -->
        <th scope="row">{{item.codigo}}</th>
        <td>{{item.nomProducto}}</td>
        <td>{{item.cantidad}}</td>
        <td>{{item.entrada}}</td>
        <td>{{parseInt(item.entrada) + parseInt(item.cantidad)}}</td>
        <td>{{item.salida}}</td>
        <td :class="{'bg-dange' : this.valiSaldo(parseInt(item.saldo_act)),}">{{item.saldo_act}}</td>
        <td>
          <!-- <button class="btn btn-danger me-2 btn-sm buttonDelete" @click="deleteInventario(item.id)" >
            <span class="material-icons btnDeletespan">delete</span>
          </button> -->
          <Modal2 @close="toggleModal2" :modalActive="modalActivee">
            <div class="ingresocaseta container">
              <h4 style="color: white">
                  Se eliminara el producto {{item.nomProducto}}
                  ¿Desea continuar?
              </h4>
              <span class="material-symbols-outlined" id="icon-delete">
                  delete_forever
              </span>

              <div id="con-btdt">
                <button id="" class="delete-m btn btnSi btn-danger ml-2 btn-sm buttonDelete" @click="deleteInventario(item.id),toggleModal2()">
                  <span id ="" class="icon-palo material-symbols-outlined">task_alt</span>
                </button>
                  <button id="no" class="delete-m btn btnDelete btn-danger ml-2 btn-sm buttonDelete" @click="toggleModal2">
                    <span class="icon-palo material-symbols-outlined">close</span>
                  </button>
              </div>
            </div>
          </Modal2>
          <div >
                <button class="btn btnDelete btn-danger ml-2 btn-sm buttonDelete" ><span  @click="toggleModal2" class="material-icons btnDeletespan">delete</span></button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>  
  </template>
  
<script>
import Modal2 from "@/components/Modal2.vue";
import { ref } from "vue";
import { mapActions, mapState } from 'vuex'

export default {
  components: {
        Modal2,
    },
 computed: {
    ...mapState(['inventarios']),
    
  },
  methods:{
    
    ...mapActions(['deleteInventario']),
    valiSaldo(saldo){
      if(saldo <= 7){
        return true
      }
      return false
    }
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
.bg-dange{
  background-color: rgba(255, 1, 1, 0.7);
  border-radius: 5px;
}
.buttonDelete{
    float: left;  
    transition: .5s;
    border: none;     
}
.buttonDelete:hover{
    color: red;  
    background: none;  
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