<template>
    <input 
        type="text"
        placeholder="Ingrese País"
        class="form-control my-3"
        v-model="texto"
        @keyup="procesarInput"
    >
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const texto = ref('')
        const store = useStore()

        const procesarInput = () => {
            // console.log(texto.value)
            store.dispatch('filtroNombre', texto.value)
        }

        return {texto, procesarInput}
    }
}
</script>
