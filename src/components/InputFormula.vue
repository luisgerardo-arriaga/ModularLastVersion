<template>
    <div id="pr">
        <div reg-c class="form-floating mb-3 mt-3 col-12">
            <input required type="text" class="form-control" id="floatingNombreFormula" placeholder="Nombre de la formula" v-model.trim="formula.nombreFormula">
            <label for="floatingNombreFormula">Nombre de la formula</label>
        </div>
        <div class="form-floating mb-3 mt-3">
            <input type="text" class="form-control" id="floatingEtapaFormula" placeholder="Etapa de la formula" v-model.trim="formula.etapaFormula">
            <label for="floatingEtapaFormula">Etapa de la formula</label>
        </div>
        
        <button @click="close" class="btn col-3" type="submit" :disabled="bloquearBoton">Agregar Formula</button>
    </div>
</template>

<script>
export default {
    props: {
        formula: Object
    },    
    computed: {
            bloquearBoton() {
                if(this.formula.nombreFormula.trim() == "" || this.formula.etapaFormula.trim() == "") {
                    return true
                }else{
                    return false
                }
            }
        }
}
</script>

<style scoped>
input[type="text"], input[type="number"]{
    background-color: #252A34;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    color: white;
    transition: 0.7s;
}
input[type="text"]:focus, input[type="number"]:focus{
    border: 0;
    background-color: #393E46;
}
label{
    color: white;
}
button{
    background-color: #393E46;
    /* width: 200px; */
    transition: 0.7s;
    color: white;
    
}
button:hover{
    background-color: #00b347;
    /* width: 200px; */
    color: white;
    box-shadow: 0px 0px 5px #252A34;
}
input:-webkit-autofill{
    caret-color: white;
    -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 999px #252A34 inset;
  transition: 1s;
}
/* input:-webkit-autofill:hover,   */
input:-webkit-autofill:focus{
  border: 1px solid #0d6efd;
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px #393E46 inset;
  /* transition: background-color 5000s ease-in-out 0s; */
}

</style>