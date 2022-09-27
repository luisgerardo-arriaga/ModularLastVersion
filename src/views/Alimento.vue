<template>
  <div class="alimento">
    {{casetas}}
    <h1>Alimento</h1>
    <Grafica/>
  </div>  
</template>

<script>
  import Grafica from "../components/Grafica.vue"
  import {mapActions, mapState} from 'vuex'

  export default {
    components:{
      Grafica,
    },
    computed:{
      ...mapState(['casetas'])
    }
  }
</script>

<style scoped>

</style>
