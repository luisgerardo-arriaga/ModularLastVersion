import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    casetas: [],
    formulas: [],    
    caseta: {
      id: '',
      nombreCaseta: '',
      numeroGallinas: '',
      etapaCaseta: '',
      encargadoCaseta: '',
    },
    formula:{
      nombreFormula: '',
      etapaFormula:'',
    },
    produccionDiaria: [],
    caseta_local: {
      id: '',
      idCaseta:'',
      cajas: 0,
      huevoGrande: 0,
      huevoChico: 0,
      huevoFragil: 0,
      huevoSucio: 0,
      huevoRoto: 0,
      huevoBlando: 0,
      huevoTotal: 0,
      semana: 0,
      diaRegistro: 0,     
      nombreCaseta: '',   
    },
    inventarios: [],
    inventario: {               
      codigo: '',
      nomProducto: '',
      cantidad: '',
      entrada: '',
    },
    user: null,
    error: {tipo: null, mensaje: null}
  },
  mutations: {
    //datos inventario inicio
    setInventario(state, payload){
      state.inventarios.push(payload)
    },
    eliminarInventario(state, payload) {
      state.inventarios = state.inventarios.filter(item => item.id !== payload)
    },
    cargarInventario(state, payload) {
      state.inventarios = payload
    },
    updateInventario(state, payload){
      state.inventarios = state.inventarios.map(item => item.id == payload.id ? payload : item)
      router.push('/inventario')
    },
    inventario(state, payload){
      if(!state.inventarios.find(item => item.id == payload)){
        router.push('/inventario')
        return
      }
      state.inventario = state.inventarios.find(item => item.id == payload)
    },
    //datos inventario fin

    //Aqui comienza todo lo relacionado con la produccion de huevo diario
    setProduccion(state, payload){
      state.produccionDiaria.push(payload)
    },
    eliminarProduccion(state, payload) {
      state.produccionDiaria = state.produccionDiaria.filter(item => item.id !== payload)
    },
    cargarProduccion(state, payload) {
      state.produccionDiaria = payload
    },
    updateProduccionCaseta(state, payload){
      state.produccionDiaria = state.produccionDiaria.map(item => item.id == payload.id ? payload : item)
      router.push('/produccion')
    },
    produccion(state, payload){
      if(!state.produccionDiaria.find(item => item.id == payload)){
        router.push('/produccion')
        return
      }
      state.caseta_local = state.produccionDiaria.find(item => item.id == payload)
    },
    //Aqui Termina todo lo relacionado con la produccion de huevo diario
    updateInventarioEntrada(state, payload){
      console.log(1)
      state.inventarios = state.inventarios.map(item => item.id == payload.id ? payload : item)
      router.push('/inventario')
    },

    setError(state, payload) {
      if(payload == null) {
        return state.error = {tipo: null, mensaje: null}
      }
      if(payload == "EMAIL_NOT_FOUND") {
        return state.error = {tipo: 'email', mensaje: 'Email no registrado'}
      }
      if(payload == "INVALID_PASSWORD") {
        return state.error = {tipo: 'password', mensaje: 'Contraseña incorrecta'}
      }
      if(payload == "EMAIL_EXISTS") {
        return state.error = {tipo: 'email', mensaje: 'Email registrado'}
      }
      if(payload == "INVALID_EMAIL") {
        return state.error = {tipo: 'email', mensaje: 'Email incorrecto'}
      }
    },
    setUser(state, payload) {
      state.user = payload
    },
    cargar(state, payload) {
      state.casetas = payload
    },
    cargarFormulas(state, payload) {
      state.formulas = payload
    },
    set(state, payload) {
      state.casetas.push(payload)      
      router.push('/inicio')
    },
    setForm(state, payload) {
      state.formulas.push(payload)      
      router.push('/formulas')
    },
    eliminar(state, payload) {
      state.casetas = state.casetas.filter(item => item.id != payload)      
    },
    eliminarFormula(state, payload) {
      state.formulas = state.formulas.filter(item => item.id != payload)      
    },
    caseta(state, payload) {
      if(!state.casetas.find(item => item.id == payload)){
        router.push('/inicio')        
        return
      }
      state.caseta = state.casetas.find(item => item.id == payload)
    },
    formula(state, payload) {
      if(!state.formulas.find(item => item.id == payload)){
        router.push('/formulas')        
        return
      }
      state.formula = state.formulas.find(item => item.id == payload)
    },
    update(state, payload) {
      state.casetas = state.casetas.map(item => item.id == payload.id ? payload : item)      
      router.push('/inicio')
    },
    updateFormula(state, payload) {
      state.formulas = state.formulas.map(item => item.id == payload.id ? payload : item) 
      localStorage.setItem('produccionDiaria', JSON.stringify(state.produccionDiaria))     
      router.push('/formulas')
    },
  },
  
  actions: {

    //Actions inventarios inicio
    async cargarDBinventario({ commit, state }){
      if(localStorage.getItem('usuario')) {
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      }else{
        return commit('setUser', null)
      }
      try {
        const res = await fetch (`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/inventario/${state.user.localId}.json?auth=${state.user.idToken}`)    
        const dataEGGDB = await res.json()
        const arrayInventario = []
        
        for(let id in dataEGGDB){
          arrayInventario.push(dataEGGDB[id])          
        }  
        commit('cargarInventario', arrayInventario)
        
      } catch (error) {
        console.log(error)        
      }
    },
    async updateInventario({commit, state}, inventario){
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/inventario/${state.user.localId}/${inventario.id}.json?auth=${state.user.idToken}`,{
          method: 'PATCH',
          body: JSON.stringify(inventario)
        })                
        const EGGDB = await res.json()        
        commit('updateInventario', EGGDB)
      } catch (error) {
        console.log(error)
      }
    },
    // #############################################################
    async updateInventarioIn({commit, state}, inventario){
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/inventario/${state.user.localId}/${inventario.id}.json?auth=${state.user.idToken}`,{
          method: 'PATCH',
          body: JSON.stringify(inventario)
        })
        
        const EGGDB = await res.json()  
        console.log(EGGDB) 
        commit('updateInventarioEntrada', EGGDB)
      } catch (error) {
        console.log(error)
      }
    },
    // #############################################################
    setTareaInventario({commit}, id){
      commit('inventario', id)
    },
    async deleteInventario({ commit, state }, id) {
      try {
        await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/inventario/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE'
        })        
        commit('eliminarInventario', id)
      } catch (error) {
        console.log(error)
      }
    },
    async setInventario({commit, state}, inventario){
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/inventario/${state.user.localId}/${inventario.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT',
          header: {
            'Content-Type': 'aplication/json'
          },
          body: JSON.stringify(inventario)
        })
        
        const dataEGGDB = await res.json() 
        console.log(dataEGGDB)
        
      } catch (error) {
        console.log(error)
      }
      commit('setInventario', inventario)
    },
    //Actions inventarios fin  

    //Actions Produccion inicio
    async cargarDBProduccion({ commit, state }){
      if(localStorage.getItem('usuario')) {
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      }else{
        return commit('setUser', null)
      }
      try {
        const res = await fetch (`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/produccion/${state.user.localId}.json?auth=${state.user.idToken}`)    
        const dataEGGDB = await res.json()
        const arrayInventario = []
        
        for(let id in dataEGGDB){
          arrayInventario.push(dataEGGDB[id])          
        }  
        commit('cargarProduccion', arrayInventario)
        
      } catch (error) { 
        console.log(error)        
      }
    },
    async updateProduccion({commit, state}, caseta_local){
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/produccion/${state.user.localId}/${caseta_local.id}.json?auth=${state.user.idToken}`,{
          method: 'PATCH',
          body: JSON.stringify(caseta_local)
        })
        const EGGDB = await res.json()   
        commit('updateProduccionCaseta', EGGDB)
      } catch (error) {
        console.log(error)
      }
    },
    setTareaProduccion({commit}, id){
      commit('produccion', id)
    },
    async deleteProduccionCaseta({ commit, state }, id) {
      try {
        await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/produccion/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE'
        })        
        commit('eliminarProduccion', id)
      } catch (error) {
        console.log(error)
      }
    },
    async setProduccionCasetas({commit, state}, caseta_local){
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/produccion/${state.user.localId}/${caseta_local.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT',
          header: {
            'Content-Type': 'aplication/json'
          },
          body: JSON.stringify(caseta_local)
        })
        
        const dataEGGDB = await res.json() 
        console.log(dataEGGDB)
        
      } catch (error) {
        console.log(error)
      }
      commit('setProduccion', caseta_local)
    },
    //Actions Produccion fin 

    cerrarSesion({ commit }) {
      commit('setUser', null)
      router.push('/')
      localStorage.removeItem('usuario')
    },
    async ingresoUsuario({ commit }, usuario){
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTF35Zw-VrMNU8fBMI8PfGZUJwgMrHS-Q',{
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })
        })
        const userDB = await res.json()
        if(userDB.error) {
          return commit('setError', userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError', null)
        router.push('/inicio')
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }      
    },
    async registrarUsuario({ commit }, usuario){
      try {
        const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTF35Zw-VrMNU8fBMI8PfGZUJwgMrHS-Q', {
          method: 'POST',
          body: JSON.stringify({
            email: usuario.email,
            password: usuario.password,
            returnSecureToken: true
          })       
        }) 
        const userDB = await res.json() 
        if(userDB.error) {
          return commit('setError', userDB.error.message)
        }
        commit('setUser', userDB)
        commit('setError', null)
        router.push('/inicio')
        localStorage.setItem('usuario', JSON.stringify(userDB))
      } catch (error) {
        console.log(error)
      }
    },

    //cargarDB
    async cargarDB({ commit, state }) {
      if(localStorage.getItem('usuario')) {
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      }else{
        return commit('setUser', null)
      }
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/casetas/${state.user.localId}.json?auth=${state.user.idToken}`)
        const dataDB = await res.json() 
        const arrayCasetas = []    
        
        for(let id in dataDB){
          arrayCasetas.push(dataDB[id])          
        }
        commit('cargar', arrayCasetas)

      } catch (error) {
        console.log(error)                       
      }
    },
    async cargarDBFormulas({ commit, state }) {
      if(localStorage.getItem('usuario')) {
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      }else{
        return commit('setUser', null)
      }
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/formulas/${state.user.localId}.json?auth=${state.user.idToken}`)
        const dataDB = await res.json() 
        const arrayFormulas = []    
        
        for(let id in dataDB){
          arrayFormulas.push(dataDB[id])          
        }
        commit('cargarFormulas', arrayFormulas)

      } catch (error) {
        console.log(error)                       
      }
    },    
    async setCasetas({ commit, state }, caseta) {
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/casetas/${state.user.localId}/${caseta.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(caseta)
        })
        
        const dataDB = await res.json()
        commit('set', dataDB)

      } catch (error) {
        console.log(error)        
      }
    },
    async setFormulas({ commit, state }, formula) {
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/formulas/${state.user.localId}/${formula.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formula)
        })
        
        const dataDB = await res.json()
        commit('setForm', dataDB)

      } catch (error) {
        console.log(error)        
      }
    },
    async deleteCasetas({ commit, state }, id){
      try {
        await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/casetas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE'
        })
        commit('eliminar', id)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteFormulas({ commit, state }, id){
      try {
        await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/formulas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE'
        })
        commit('eliminarFormula', id)
      } catch (error) {
        console.log(error)
      }
    },
    setCaseta({ commit }, id) {
      commit('caseta', id)
    },
    setFormula({ commit }, id) {
      commit('formula', id)
    },
    async updateCaseta({ commit, state }, caseta) {
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/casetas/${state.user.localId}/${caseta.id}.json?auth=${state.user.idToken}`, {
          method: 'PATCH',
          body: JSON.stringify(caseta)
        })
        const dataDB = await res.json()
        commit('update', dataDB)

      } catch (error) {
        console.log(error)        
      }
    },
    async updateFormula({ commit, state }, formula) {
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/formulas/${state.user.localId}/${formula.id}.json?auth=${state.user.idToken}`, {
          method: 'PATCH',
          body: JSON.stringify(formula)
        })
        const dataDB = await res.json()
        commit('updateFormula', dataDB)

      } catch (error) {
        console.log(error)        
      }
    }
  },
  getters: {
    usuarioAutenticado(state){
      return !!state.user
    }
  },

  modules: {
  }
})
