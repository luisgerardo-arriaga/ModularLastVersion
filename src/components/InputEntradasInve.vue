<template>
    <div id="pr">
        <select name="color" id="color">
            <option value="r">Rojo</option>
        </select>
        <!-- <div class="form-floating mb-3 mt-3 col-12">
            <input required type="number" class="form-control" id="floatingEtapaCaseta" placeholder="Cantidad" v-model.trim="inventario.cantidad">
            <label for="floatingEtapaCaseta">Cantidad</label>
        </div> -->
        
        <button @click="close" class="btn col-3" type="submit" :disabled="bloquearBoton">Agregar Producto</button>
    </div>
</template>

<script>
export default {
    props: {
        inventario: Object
    },
    
    computed: {
        bloquearBoton() {
            if(this.inventario.cantidad.trim() == "" || this.inventario.cantidad <= 0) {
                return true
            }
            else{
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