import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const apiUrl = '/api/'

export default new Vuex.Store({
  state: {
    catalog: {
      categories: [],
      products: []
    },
    loading: true,
    cart: []
  },
  getters: {},
  mutations: {
    set(state, { type, items }) {
      state[type] = items
    },
    addCart(state, {id, quantity}) {
      const record = state.cart.find( p => p.id === id )

      if (!record) {
        state.cart.push({
          id,
          quantity: 1
        })
      } else {
        record.quantity = record.quantity + quantity
      }
    },
    removeCart(state, {id, quantity}) {
      const record = state.cart.find(p => p.id === id)
      if (record) {
        if (record.quantity === 1 || record.quantity <= quantity) {
          state.cart.splice(state.cart.indexOf(record), 1)
        } else {
          record.quantity = record.quantity - quantity  
        }
      }
    }
  },
  actions: {
    cart({ commit }, data) {
      let action = data.action || "add"
      let quantity = data.quantity || 1
      let id = data.id || 0

      if (action === 'add') {
        commit('addCart', { id, quantity })
      }
      if (action === 'remove') {
        commit('removeCart', { id, quantity })        
      }
    },
    getCatalog({ commit }) {
      axios.get(apiUrl)
      .then( response => {
        commit('set', { type: 'catalog', items: response.data.catalog })
        setTimeout(()=>{
          commit('set', { type: 'loading', items: false })
        }, 500)
      })
      .catch( error => { throw error });
    }
  }
})

//this.$store.dispatch('getCatalog')
//this.$store.getters.results