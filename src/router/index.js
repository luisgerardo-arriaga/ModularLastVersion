import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import { createLogger } from 'vuex'

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
{
  path: '/',
  redirect:'/login'
},
{
  path: '/login',
  name: 'Login',
  component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
},
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/alimento',
    name: 'Alimento',
    component: () => import(/* webpackChunkName: "about" */ '../views/Alimento.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/produccion',
    name: 'Produccion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Produccion.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/inventario',
    name: 'Inventario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inventario.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/configuracion',
    name: 'Configuracion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracion.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/ingresocaseta',
    name: 'IngresoCaseta',
    component: () => import(/* webpackChunkName: "about" */ '../views/IngresoCaseta.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/producciondiaria/:id',
    name: 'Producciondiaria',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producciondiaria.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editarproduccion/:id',
    name: 'EditarProduccion',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarProduccion.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editarformulas/:id',
    name: 'EditarFormulas',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarFormulas.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/ingresocasetaproduccion/:id',
    name: 'IngresoCasetaProduccion',
    component: () => import(/* webpackChunkName: "about" */ '../views/IngresoCasetaProduccion.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/datosFormula/:id',
    name: 'datosFormula',
    component: () => import(/* webpackChunkName: "about" */ '../views/datosFormula.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
  },
  {
    path: '/PruebaModal',
    name: 'PruebaModal',
    component: () => import(/* webpackChunkName: "about" */ '../views/PruebaModal.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/formulas',
    name: 'Formulas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Formulas.vue'),
    meta: {rutaProtegida: true}
  },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const logged = store.getters.usuarioAutenticado
  const rutaPro = to.meta.rutaProtegida
  
  if(!rutaPro && logged && to.path == '/login'){
    next('/inicio')
    console.log('Esta es la ruta', rutaPro)
  }
  if(!rutaPro && logged && to.path != '/inicio'){
    next('/inicio')
    console.log('Esta es la ruta', rutaPro)
  }
  if(rutaPro && !logged){
    next('/login')
    console.log('Esta es la ruta', rutaPro)
  }else{
    next()
    console.log('Esta es la ruta', rutaPro)
  }
})

export default router

