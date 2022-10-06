<template>
    
  <form @submit.prevent="updateProduccion(caseta_local)">
      <ProduccionCaseta :caseta_local="caseta_local"/>
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ProduccionCaseta from '../components/ProduccionCaseta'
export default {
    components: {
        ProduccionCaseta
    },
    computed: {
        ...mapState(['caseta_local']),        
    },
    methods:{
        ...mapActions(['setTareaProduccion', 'updateProduccion'])        
    },
    created(){
        this.setTareaProduccion(this.$route.params.id)
    }
}
</script>

<style scoped>

</style>