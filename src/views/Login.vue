<template>
    <div class="login container">
        <div class="blanco">
            <div class="blancodelblanco">
                <h1>
                    EGG DB
                    <span class="material-icons">egg</span>
                </h1>
                <h2>
                    Inicio de sesion               
                </h2>
            </div>
        </div>
        <div class="negro">
            <!-- <div class="alert alert-danger" v-if="error.tipo != null">
                {{ error.mensaje }}
            </div> -->
            <form @submit.prevent="procesarFormulario">
                <div class="form-floating mb-3 mt-3 col-12">
                    <input required type="email" class="form-control" v-model.trim="email" id="floatingEmail" placeholder="Email" :class="[error.tipo == 'email' ? 'is-invalid' : '']">
                    <label class="labelFormulario" for="floatingEmail">Correo</label>
                </div>
                <div class="form-floating mb-3 mt-3 col-12">
                    <input required type="password" class="form-control" v-model.trim="password" id="floatingPassword" placeholder="Password" :class="[error.tipo == 'password' ? 'is-invalid' : '']">
                    <label class="labelFormulario" for="floatingPassword">Contraseña</label>
                </div>            
                <button class="btn btn-primary col-12" type="submit" :disabled="bloquearBoton">Ingresar</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: '',            
        }
    },
    computed: {
            bloquearBoton() {
                if(!this.email.includes('@')) {
                    return true
                }
                if(this.password.length > 5 ) {
                    return false
                }
                return true
            },
            ...mapState(['error'])            
        },
        methods: {
            ...mapActions(['ingresoUsuario']),
            async procesarFormulario(){
                await this.ingresoUsuario({email: this.email, password: this.password})
                if(this.error.tipo != null) {
                    return
                }
                this.email = '';
                this.password = '';                
            }
        }
}
</script>

<style scoped>

/* primera (Azul, azul obscuro, rosa rojo, gris claro2)
color 1: #08D9D6
color 2: #252A34
color 3: #FF2E63
color 4: #EAEAEA
Segunda (Negro, gris, azul, gris claro)
color 5: #222831
color 6: #393E46
color 7: #00ADB5
color 8: #EEEEEE */

:root{
    /* /* primera (Azul, azul obscuro, rosa rojo, gris claro2) */
    --color1: #08D9D6;
    --color2: #252A34;
    --color3: #FF2E63;
    --color4: #EAEAEA;
    /* Segunda (Negro, gris, azul, gris claro) */
    --color5: #222831;
    --color6: #393E46;
    --color7: #00ADB5;
    --color8: #EEEEEE; 
}
.labelFormulario{
    color: white;
}
.blancodelblanco {
  margin-top: 10%;
}
.login {    
    display: flex;    
    height: 50vh;
    width: 40vw;
    min-height: 300px;
    margin-top: 10vh;  
    /* height: 50vh;
    width: 40vw;  */
    
}

.blanco {
    padding: 20px;
    background-color: #FFFFFF;  
    width: 20vw;
    height: 19vh;
    min-height: 250px;
    min-width: 300px;
    max-height: 350px;  
    margin-top: auto;
    margin-bottom: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}
.negro {
    padding: 15px;
    background-color: #252A34;
    width: 20vw;
    margin-top: auto;
    margin-bottom: auto;
    height: 22vh;
    min-height: 300px;
    min-width: 300px; 
    max-height: 400px;  
    box-shadow: 26px 28px 28px 3px rgba(0,0,0,0.65);
    -webkit-box-shadow: 26px 28px 28px 3px rgba(0,0,0,0.65);
    -moz-box-shadow: 26px 28px 28px 3px rgba(0,0,0,0.65);
}
button[type="submit"]{
    background-color:#252A34;
    border: 0;
    color: white;
    margin-top:3vh;
    /* margin-top */
    border-radius: 4px;
    padding: 7px;
    transition: 1s;
}
button[type="submit"]:hover{
    background-color:#393E46;
}

h2{
    margin-top: 40px;
}
.input{
        /* background-color:royalblue; */
        padding: 5px;
        color: white;
        margin-top: 13px;
    }
input[type="email"], input[type="password"]{
    background-color: #252A34;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1.5px solid gray;
    padding: 4px;
    width: 20vw;
    min-width: 255px;  
    color: white;
    outline: none;
    transition: 1s;
    max-width: 300px;
}
input[type="email"]:focus, input[type="password"]:focus{
    background-color: #393E46;
    border-bottom: 0px;
}
h5{
    text-align: left;
    margin: 6px;
    color: white;
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
  opacity: 10;
  -webkit-text-fill-color: white;
  -webkit-box-shadow: 0 0 0px 1000px #393E46 inset;
  /* transition: background-color 5000s ease-in-out 0s; */
}
    
</style>