<template>
<nav v-if="usuarioAutenticado" class="navbar-dark bg-dark p-3 nava" type="dark">
  <ul class="nav justify-content-center">
            <li class="nav-item mt-2">
                <router-link to="/inicio" class="nav-link navbar-brand">
                    <span class="material-icons">egg</span>
                </router-link>
            </li>
            <li class="nav-item mt-2">
                <router-link to="/alimento" class="nav-link navbar-brand">
                Alimento
                </router-link>
            </li>
            <li class="nav-item mt-2">
                <router-link to="/produccion" class="nav-link navbar-brand">
                Producción
                </router-link>
            </li>
            <li class="nav-item mt-2">
                <router-link to="/inventario"  class="nav-link navbar-brand">
                    Inventario
                </router-link>
            </li>
            <li class="nav-item mt-2 settings">
                <div class="dropdown">
                <button class="btn botonSettings nav-link navbar-brand" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" >
                    <span class="material-icons">
                        settings
                    </span>
                </button>
                <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a class="dropdown-item" href="/formulas">Formulas</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#" v-if="usuarioAutenticado" @click="cerrarSesion">Cerrar sesión</a></li>
                </ul>
                </div>
            </li>
        </ul>
</nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['usuarioAutenticado'])
    },
    methods: {
        ...mapActions(['cerrarSesion'])
    }
}
</script>

<style scoped>
.nav{
    z-index: -10;
}
.linkInicio{
    background: none;
}
.nav-link:hover{
    color: #00ADB5;
}
.botonSettings{
    color:white;
    border: none;
}
.botonSettings:focus {
  outline: none;
  box-shadow: none;
  color: #00ADB5;
}
a {
    text-decoration: none;
    background-image: linear-gradient(#00ADB5, #00ADB5);
    background-position: 50% 100%;
    background-repeat: no-repeat;
    background-size: 0% 2px;
    transition: background-size .3s;
}
a:hover {
    background-size: 100% 2px;
}
.settings{
    position: absolute;
    margin-left: 90%;    
}

nav{
    position: -webkit-sticky;
    position: sticky;
}
.nava{
    color: red;
}
button{
    margin: 0;
    padding: 0;
}


</style>