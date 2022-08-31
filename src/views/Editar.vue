<template>
  <div class="editar container">
      <h1>Editar</h1>
      <form @submit.prevent="updateCaseta(caseta)">
          <Input :caseta="caseta" />
      </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Input from '../components/Input.vue'
export default {
    components: {
        Input
    },
    computed: {
        ...mapState(['caseta'])
    },
    methods: {
        ...mapActions(['setCaseta', 'updateCaseta'])
    },
    created(){
        this.setCaseta(this.$route.params.id)
    }
}
</script>

<style scoped>

</style>