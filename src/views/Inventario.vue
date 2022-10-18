<template>
  <div class="inicio container">      
      <Modal @close="toggleModal" :modalActive="modalActive">      
        <div class="ingresocaseta container">
            <Input />
        </div>      
    </Modal>
    <div class="boton">
      <button title="Nuevo producto" @click="toggleModal" type="button" class="btn btnCrearCaseta">
        <span class="material-icons AgregarC">add</span>
      </button> 
    </div>
  </div>

  <div class="container">
    <tInventario/>
  </div>
</template>

<script>
import Modal from "@/components/Modal.vue";
import tInventario from "../components/TablaInventario.vue";
import Input from "../components/InputInventario.vue";
import InputEntradasInve from "../components/InputEntradasInve.vue";
import { mapActions, mapState } from 'vuex'
import { ref } from "vue";
const shortid = require('shortid');

export default {
  components: {
    Modal,
    Input,
    tInventario,
    InputEntradasInve
},
  
  data() {
    return {
      
    }        
  },
  computed: {
    // ...mapState([''])
  },
  methods: {
    ...mapActions(['setInventario', 'cargarDBinventario']),
   
  },
  
  created(){
    this.cargarDBinventario()
  },

  setup() {
    const modalActive = ref(false);

    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };

    return { modalActive, toggleModal };
  },
  
}
</script>

<style scoped>

.ingresocaseta{
  padding: 10px;
}
.AgregarC{
    font-size: 40px;    
    border-radius: 5px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
}
.AgregarC:hover{
    color: black;
    box-shadow: 0px 0px 4px #00ADB5;
}
.btnCrearCaseta{
  border-radius: 5px;
  padding: 0;
  margin: 10px;
  width: 43px;
  height: 40px;
}
.btnCrearCaseta:focus{
    outline: none;
  box-shadow: none;
  color: #00ADB5;
}

</style>