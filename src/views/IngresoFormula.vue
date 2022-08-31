<template>
<div class="ingresocaseta container">
    <h1>Registro de casetas</h1>    
    <form @submit.prevent="procesarFormulario">
        <Input :caseta="caseta"/>        
    </form>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import Input from '../components/Input.vue'
const shortid = require('shortid');
export default {
    components: {
        Input
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
        ...mapActions(['setCasetas']),
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
        }
}
</script>

<style scoped>
.ingresocaseta{
    background-color: #c0c0c0;
    padding: 10px;
    margin-top: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
</style>