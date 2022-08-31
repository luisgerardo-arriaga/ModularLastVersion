<template>

  <div class="inicio container">
      <Modal @close="toggleModal" :modalActive="modalActive">
        <div class="ingresocaseta container">
          <h1 style="color: white">Registro de casetas</h1>
          <form id="app" @submit.prevent="procesarFormulario">
            <Input :caseta="caseta"/>
          </form>
        </div>
    </Modal>
    <div class="boton">
      <button title="Agregar Caseta" @click="toggleModal" type="button" class="btn btnCrearCaseta">
        <span id = "add" class="material-icons AgregarC">add</span>
      </button>
    </div>
      <ListarCasetas />
  </div>
</template>

<script>
import Input from '../components/Input.vue'
const shortid = require('shortid');
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import { mapActions } from 'vuex'
import ListarCasetas from '../components/ListarCasetas.vue'


export default {
  components: {
    ListarCasetas, Modal, Input
  },
  data() {
    return {
      caseta: {
        nombreCaseta: '',
        numeroGallinas: '',
        etapaCaseta: '',
        encargadoCaseta: ''
      }
    }
  },
  methods: {
    ...mapActions(['cargarDB', 'setCasetas']),

    procesarFormulario() {

      this.caseta.id = shortid.generate()
      this.setCasetas(this.caseta)
      this.caseta = {
        id: '',
        nombreCaseta: '',
        numeroGallinas: '',
        etapaCaseta: '',
        encargadoCaseta: ''
      }
    },
  },
  computed: {
            bloquearBoton() {
                if(this.caseta.nombreCaseta.trim() == "" || this.caseta.numeroGallinas.trim() == "" || this.caseta.etapaCaseta.trim() == "" || this.caseta.encargadoCaseta.trim() == "") {
                    return true
                }else{
                    return false
                }
            }
  },
  created() {
    this.cargarDB()
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
    /* border-radius: 35px; */
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
}



</style>