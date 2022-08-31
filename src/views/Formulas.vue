<template>
  <div class="inicio container">      
      <Modal @close="toggleModal" :modalActive="modalActive">      
        <div class="ingresocaseta container">
          <h1 style="color: white">Registro de Formulas</h1>    
          <form @submit.prevent="procesarFormulario">
            <InputFormula :formula="formula"/>        
          </form>
        </div>      
    </Modal>
    <div class="boton">
      <button title="Agregar Formula" @click="toggleModal" type="button" class="btn btnCrearCaseta"><span class="material-icons AgregarC">add</span></button>
    </div>
      <ListarFormulas /> 
  </div>
</template>

<script>
import InputFormula from '../components/InputFormula.vue'
const shortid = require('shortid');
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import { mapActions } from 'vuex'
import ListarFormulas from '../components/ListarFormulas.vue'
export default {
  components: {
    ListarFormulas, Modal, InputFormula
  },
  data() {
        return {
            formula: {                
                nombreFormula: '',
                etapaFormula: '',
            }
        }        
    },
  methods: {
    ...mapActions(['cargarDBFormulas', 'setFormulas']),
    procesarFormulario() {
                this.formula.id = shortid.generate()
                this.setFormulas(this.formula)
                this.formula = {
                  nombreFormula: '',
                  etapaFormula: '',            
                }                
            },
  },
  computed: {
            bloquearBoton() {
                if(this.formula.nombreFormula.trim() == "" || this.formula.etapaFormula.trim() == "") {
                    return true
                }else{
                    return false
                }
            }
        },
  created() {
    this.cargarDBFormulas()
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

.btnCrearCaseta:focus{
    outline: none;
  box-shadow: none;
  color: #00ADB5;
}

</style>