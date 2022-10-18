<template>
  <div class="container text-center">
  <div class="row">
    <div class="col paisesCSS">
      <h1>Paises API</h1>
      <CardList />  
    </div>
    <div class="col alimentoCSS">
      <h1>Alimento API</h1>
      <CardAlimento />  
    </div>
  </div>
</div>
</template>

<script>
import CardList from '../components/CardList.vue'
import CardAlimento from '../components/CardAlimento.vue'
export default {
  components: {
    CardList, CardAlimento
  }

}
</script>

<style scoped>
.paisesCSS{
  background-color: lightblue;
}
.alimentoCSS{
  background-color: lightcoral;
}

</style>