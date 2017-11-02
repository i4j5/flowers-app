import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const apiUrl = '/api/'

export default new Vuex.Store({
  state: {
    catalog: {},
    day: [],
    loading: true,
    cart: {}
  },
  getters: {},
  mutations: {
    set(state, { type, items }) {
      state[type] = items
    },
    addCart(state, {id, count}) {
      let item = state.cart[id]
      if (item != undefined) {
        item.count =  item.count + count
      } else {
        state.cart[id] = {
          count
        }
      }
    },
    removeCart(state, {id, count}) {
      let item = state.cart[id]
      if (item != undefined) {
        if (item.count <= 1 ||  item.count < cout) {
          delete state.cart[id]
        } else {
          item.count =  item.count - count        
        }
      }
    }
  },
  actions: {
    cart({ commit }, data) {
      
      let id = data.id || 0
      let action = data.action || "add"
      let count = data.count || 1

      if (action === 'add') {
        commit('addCart', { id, count })
      }
      if (action === 'remove') {
        commit('removeCart', { id, count })        
      }
    },
    getCatalog({ commit }) {
      axios.get(apiUrl)
      .then( response => {
        let data = response.data

        const catalog = data.catalog
        const day = data.day

        commit('set', { type: 'catalog', items: catalog })
        commit('set', { type: 'day', items: day })
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