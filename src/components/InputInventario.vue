<template>
   <section>
        <input type="radio" v-model="selectB" value=0 name="add" > Agregar entrada
        <br>
        <input type="radio" v-model="selectB" value=1 name="add" > Nuevo producto
        <!-- <span>value: {{selectB}}</span> -->
    </section>
    <div id="pr">
        <div v-if="show">
            <div reg-c class="form-floating mb-3 mt-3 col-12">
                <input required type="number" class="form-control" id="floatingNombreCaseta" placeholder="Codigoa"
                v-model.trim="inventario.codigo">
                <label for="floatingNombreCaseta">Codigo</label>
            </div>
            <div class="form-floating mb-3 mt-3">
                <input required type="text" class="form-control" id="floatingNumeroGallinas" placeholder="Nombre del producto" v-model.trim="inventario.nomProducto">
                <label for="floatingNumeroGallinas">Nombre del producto</label>
            </div>
            <div class="form-floating mb-3 mt-3 col-12">
                <input required type="number" class="form-control" id="floatingEtapaCaseta" placeholder="Cantidad" v-model.trim="inventario.cantidad">
                <label for="floatingEtapaCaseta">Cantidad</label>
            </div>
        </div>
        <div v-else>
            <div id="pr">
                <p>{{option}}</p>
                <select v-model="option" name="color" id="color">
                    <option v-for="item in inventarios" :key="item.id" v-bind:value="item.id">
                        {{item.nomProducto}}
                    </option>
                </select>
                

                <div class="form-floating mb-3 mt-3 col-12">
                    <input required type="number" class="form-control" id="floatingEtapaCaseta" placeholder="Cantidad" v-model.trim="inventario.cantidad">
                    <label for="floatingEtapaCaseta">Cantidad</label>
                </div>
            
        <!-- <button @click="close" class="btn col-3" type="submit" :disabled="bloquearBoton">Agregar Producto</button> -->
            </div>
        </div>
        <button @click="close" class="btn col-3" type="submit" :disabled="bloquearBoton">Agregar Producto</button>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return{
            selectB: null,
            option: "",
            productoN: null,
            ban: true
        }
    },
    props: {
        inventario: Object
    },
    
    computed: {
        bloquearBoton() {
            if(this.inventario.codigo.trim() == "" || this.inventario.nomProducto.trim() == "" || this.inventario.cantidad.trim() == "" || this.inventario.cantidad <= 0) {
                return true
            }
            else{
                return false
            }
        },
        show(){
            if(this.selectB == 0){
                return false
            }
            else{
                return true
            }
        }, 
        ...mapState(['inventarios'])
    }, 
    methods:{
        ...mapActions(['deleteInventario'])
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
section{
    color: white;
    margin: auto;
    background-color: #393E46;
    width: 180px;
    border-radius: 5px;
    transition: 1s;
    padding: 1%;
    margin-bottom: 30px;
}
input[type="radio"]{
    margin-top: 8px;
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