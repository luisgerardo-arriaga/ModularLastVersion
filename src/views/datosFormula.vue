<template>
  <div class="container">
    <InputFormulas/>
  </div>
</template>


<script>
import InputFormulas from "../components/InputFormulas.vue"
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    InputFormulas,
  },
  
}
</script>

<style scoped>
*{
  margin-top: 26px;
  margin-bottom: 55px;
}
</style>