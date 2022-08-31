<template>
    <div class="registro container">
        <h1>Registro</h1>
        <div class="alert alert-danger" v-if="error.tipo != null">
            {{ error.mensaje }}
        </div>
        <form @submit.prevent="procesarFormulario">
            <div class="form-floating mb-3 mt-3 col-12">
                <input required type="email" class="form-control" v-model.trim="email" id="floatingEmail" placeholder="Email" :class="[error.tipo == 'email' ? 'is-invalid' : '']">
                <label for="floatingEmail">Correo</label>
            </div>
            <div class="form-floating mb-3 mt-3 col-12">
                <input required type="password" class="form-control" v-model.trim="password" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Contraseña</label>
            </div>
            <div class="form-floating mb-3 mt-3 col-12">
                <input required type="password" class="form-control" v-model.trim="passwordConfirm" id="floatingPasswordConfirm" placeholder="Password">
                <label for="floatingPasswordConfirm">Confirmar contraseña</label>
            </div>
            <button class="btn btn-primary col-12" type="submit" :disabled="bloquearBoton">Registrar</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            email: '',
            password: '',
            passwordConfirm: ''
        }
    },
    computed: {
            bloquearBoton() {
                if(!this.email.includes('@')) {
                    return true
                }
                if(this.password.length > 5 && this.password == this.passwordConfirm) {
                    return false
                }
                return true
            },
            ...mapState(['error'])
        },
        methods: {
            ...mapActions(['registrarUsuario']),
            async procesarFormulario(){
                await this.registrarUsuario({email: this.email, password: this.password})
                if(this.error.tipo != null) {
                    return
                }
                this.email = '';
                this.password = '';
                this.passwordConfirm = '';
            }
        }
}
</script>

<style scoped>
.registro{
    background-color: #c0c0c0;
    padding: 10px;
    margin-top: 10px;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

</style>