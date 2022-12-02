<template>
  <div id="error" class="col-lg-5 col-md-6 col-sm-6 col-xs-10 alert alert-danger" role="alert">
        <h1>ERROR 404</h1>
    </div>
    
    <button type="button" class="btn btn-success">
        <router-link id="bt-e" to="/login">Regresar</router-link>
    </button>

</template>

<script>
export default {

}
</script>

<style scoped> 
#error{
    margin-top: 10%;
    /* margin:auto; */
    margin-left: auto;
    margin-right: auto;
}
h1{
    text-align: center;
}
.btnd{
    margin: auto;
}
#bt-e{
    text-decoration: none;
    color: white;
}
</style>