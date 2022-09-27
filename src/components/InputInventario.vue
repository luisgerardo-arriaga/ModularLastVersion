<template>
   <section>
        <input type="radio" v-model="selectB" value = 0 name = "add" > Agregar entrada
        <br>
        <input type="radio" v-model="selectB" value = 1 name = "add" checked> Nuevo producto
        <!-- <span>value: {{selectB}}</span> -->
    </section>
    <div id="pr">
        <!-- div input Add producto -->
        <div v-if="show">
            <form id="app" @submit.prevent="procesarFormulario">
                <div id="alert-nuevo" class="alert-danger" v-show="lenCodigo">
                    {{this.show_error}}
                </div>

                <div reg-c class="form-floating mb-3 mt-3 col-12">
                    <input required type="number" class="form-control" id="floatingNombreCaseta" placeholder="Codigoa"
                    v-model.trim="inventario.codigo"
                    :class="{'is-invalid' : lenCodigo,}">
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
                <button @click="close" class="btn col-3" type="submit" :disabled="bloquearBoton">
                    Agregar Producto
                </button>
            </form>
        </div>

        <div v-else>
            <form @submit.prevent="updateInventarioIn(inventario), clean">
                <div id="pr">
                    <div>
                        <label for="">Elige un producto:</label>
                        <select v-model="option" >
                            <option v-for="(item, index) in inventarios" :key="item" v-bind:value="index">
                                {{item.nomProducto}}
                            </option>
                        </select>
                    </div>


                    <div class="form-floating mb-3 mt-3 col-12">
                        <input required type="number" class="form-control" id="floatingEtapaCaseta" placeholder="Entrada" v-model.trim="entrada">
                        <label for="floatingEtapaCaseta">Entrada</label>
                    </div>

                    <button v-on:click="asignar" class="btn col-3" type="submit"
                    :disabled="bloquearBotonAddEntrada">
                        Añadir entrada
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    const shortid = require('shortid');
export default {
    data(){
        return{
            entrada:'',
            selectB: null,
            option: null,
            productoN: null,
            ban: true,
            valiCodigo: false,
            inventario: {
                codigo: '',
                nomProducto: '',
                cantidad: '',
                entrada: ''
            },
            show_error: "",
            ban_error: true
        }
    },
    props: {
        // inventario: Object
    },

    computed: {
        showError(){

        },
        asignar(){
            if(this.option!= null){
                const aux = this.entrada
                const x = this.option
                this.inventario.id = this.inventarios[x].id
                this.inventario.codigo = this.inventarios[x].codigo
                this.inventario.nomProducto = this.inventarios[x].nomProducto
                this.inventario.cantidad = this.inventarios[x].cantidad
                this.inventario.entrada = parseInt(aux) + parseInt(this.inventarios[x].entrada)
            }
            
        },
        clean(){
            return this.entrada = ""
        },
        prueba(){
            if(this.option != null){
                const x = this.option
                const aux = this.inventarios[x]
                // console.log(aux)
                return aux
            }
        },

        bloquearBoton() {
            this.ban_error = false
            if(this.inventario.codigo.trim() == "" || this.inventario.nomProducto.trim() == "" || this.inventario.cantidad.trim() == "" || this.inventario.cantidad <= 0 || this.inventario.codigo.length > 6 ) {
                this.valiCodigo = true
            }
            else{
                this.valiCodigo = false
            }
            this.inventarios.forEach(element => {
                if(element.codigo == this.inventario.codigo){
                    this.valiCodigo = true
                    this.ban_error = true
                    this.show_error = "Este codigo ya esta registrado"
                }
            });
            return this.valiCodigo
        },
        bloquearBotonAddEntrada() {
            if(this.entrada.trim() == "" || this.entrada <= 0 || this.option == null) {
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
        lenCodigo(){
            this.ban_error = false
            if(this.inventario.codigo.length > 6){  
                this.show_error = "Ingrese un codigo con una longitud maxima de 6 carateres"
                this.ban_error = true
                return true
            }
            this.inventarios.forEach(element => {
                if(element.codigo == this.inventario.codigo){
                    this.valiCodigo = true
                    this.ban_error = true
                    this.show_error = "Este codigo ya esta registrado"
                    return true
                }
            });
            return this.ban_error
        },
        completeCodigo(){
            for(i = 1; i <= 6; i++){
                    this.inventario.codigo = '0' + this.inventario.codigo
                }
        },
        ...mapState(['inventarios', 'inventario'])
    },
    methods:{
        ...mapActions(['deleteInventario', 'updateInventarioIn', 'setInventario', 'cargarDBinventario']),
        procesarFormulario() {
            this.inventario.entrada = '0'
            this.inventario.id = shortid.generate()
            this.setInventario(this.inventario)
            console.log(this.inventario)
            this.inventario = {
                id: '',
                codigo: '',
                nomProducto: '',
                cantidad: '',
                entrada: ''
            }
        },
        created(){
            this.cargarDBinventario()
        },
    }
}
</script>

<style scoped>
p{
    color: white;
}
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
    margin-top: 20px;
    margin-bottom: 15px;

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

option{
    background-color: #393E46;
    color: white;
}
select{
    background-color: #393E46;
    width: auto;
    margin: auto;
    color: white;
    border-radius: 5px;
    padding: 4px;
}
label{
    margin-right: 15px;
}

#alert-nuevo{
    border-radius: 5px;
}
</style>