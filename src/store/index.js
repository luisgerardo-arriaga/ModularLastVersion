import { createStore } from 'vuex'
import router from '../router'

export default createStore({
  state: {
    casetas: [],
    caseta: {
      id: '',
      nombreCaseta: '',
      numeroGallinas: '',
      etapaCaseta: '',
      encargadoCaseta: '',
    },

    formulas: [],
    infoformulas:[],
    formula:{
      id: '',
      infoFormula:{
        id:'',
        productos:'',
        toneladas:'',
        fecha:''
      },
      nombreFormula: '',
      etapaFormula:'',   
    
    },

    datosFormulas:[],
    formula_local: {
      id:'',
      idFormula: '',
      productos:'',
      toneladas:'',
      fecha:'',
      nombreFormulaDat: '',
      etapaFormulaDat:'',   
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
      salida:'',
      saldo_act:''
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
    cargarDatosFormulas(state, payload) {
      state.datosFormulas = payload
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

    //datosformula
    setDatosF(state, payload){
      state.datosFormulas.push(payload)
    },

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
    updateInventarioSalida(state, payload){
      console.log(1)
      state.inventarios = state.inventarios.map(item => item.id == payload.id ? payload : item)
      router.push('/formulas')
    },
    
    updateInfoFormu(state, payload){
      console.log(1)
      state.infoformulas = state.infoformulas.map(item => item.id == payload.id ? payload : item)
      router.push('/formulas')
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
    setInfoForm(state, payload) {
      state.infoformulas.push(payload)      
      router.push('/datosFormula')
    },
    eliminar(state, payload) {
      state.casetas = state.casetas.filter(item => item.id != payload)      
    },
    eliminarFormula(state, payload) {
      state.formulas = state.formulas.filter(item => item.id != payload)      
    },
    eliminarFormulaDatos(state, payload) {
      state.datosFormulas = state.datosFormulas.filter(item => item.id != payload)      
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

    async cargarDBDatosFormulas({ commit, state }){
      if(localStorage.getItem('usuario')) {
        commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      }else{
        return commit('setUser', null)
      }
      try {
        const res = await fetch (`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/datosFormulas/${state.user.localId}.json?auth=${state.user.idToken}`)    
        const dataEGGDB = await res.json()
        const array = []
        
        for(let id in dataEGGDB){
          array.push(dataEGGDB[id])          
        }  
        commit('cargarDatosFormulas', array)
        
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
    async updateInventarioOut({commit, state}, inventario){
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/inventario/${state.user.localId}/${inventario.id}.json?auth=${state.user.idToken}`,{
          method: 'PATCH',
          body: JSON.stringify(inventario)
        })
        
        const EGGDB = await res.json()  
        console.log(EGGDB) 
        commit('updateInventarioSalida', EGGDB)
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
    // ################# Formulas info
    // ########## Informacion Formula ######33333
    async setInfoFormulas({ commit, state }, formula) {
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/formulas/${state.user.localId}/${formula.id}/infoformulas/${formula.infoFormula.id}.json?auth=${state.user.idToken}`, {
        // const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/formulas/${state.user.localId}/${formula.id}/ ${formula.infoFormula.id}.json?auth=${state.user.idToken}`, {
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
    // #################### FIin formulas info
    //PRUEBA PARA INGRESAR DATOS A LAS FORMULAS
    async setDatosFormula({commit, state}, formula_local){
      try {
        const res = await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/datosFormulas/${state.user.localId}/${formula_local.id}.json?auth=${state.user.idToken}`, {
          method: 'PUT',
          header: {
            'Content-Type': 'aplication/json'
          },
          body: JSON.stringify(formula_local)
        })
        
        const dataEGGDB = await res.json() 
        
      } catch (error) {
        console.log(error)
      }
      commit('setDatosF', formula_local)
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
    async deleteFormulasDatos({ commit, state }, id){
      try {
        await fetch(`https://eggdb-5e1e1-default-rtdb.firebaseio.com/granja/datosFormulas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
          method: 'DELETE'
        })
        commit('eliminarFormulaDatos', id)
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
