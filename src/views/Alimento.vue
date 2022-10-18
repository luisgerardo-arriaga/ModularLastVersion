<template>
  <div class="alimento">
    <tablaAlimento></tablaAlimento>
  </div>  
</template>

<script>
  import { mapState } from 'vuex'
  import tablaAlimento from "../components/TablaAlimento.vue"
export default {
  components:{
    tablaAlimento
  },
  computed: {
    ...mapState(['inventarios']),    
  },
}
</script>

<style scoped>

</style>
