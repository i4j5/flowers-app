import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const apiUrl = '/api/'

export default new Vuex.Store({
  state: {
    catalog: {},
    day: [],
    loading: true
  },
  getters: {},
  mutations: {
    set(state, { type, items }) {
      state[type] = items
    }
  },
  actions: {
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
        }, 2500)
      })
      .catch( error => { throw error });
    }
  }
})

//this.$store.dispatch('getCatalog')
//this.$store.getters.results