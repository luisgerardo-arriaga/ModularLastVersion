<template>
  <div class="editar container">
      <h1>Editar</h1>
      <form @submit.prevent="updateFormula(formula)">
          <InputFormula :formula="formula" />
      </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import InputFormula from '../components/InputFormula.vue'
export default {
    components: {
        InputFormula
    },
    computed: {
        ...mapState(['formula'])
    },
    methods: {
        ...mapActions(['setFormula', 'updateFormula'])
    },
    created(){
        this.setFormula(this.$route.params.id)
    }
}
</script>

<style scoped>

</style>