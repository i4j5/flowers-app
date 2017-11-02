import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//store.dispatch('getCatalog')

// window.aaa = store

// console.log(store)

new Vue({
  el: '#app',
  router,
  store,
  beforeMount: () => {
    //this.$store.dispatch('getCatalog')
    //console.log('Store', this.$store)
  },
  template: '<App/>',
  components: { App },
})
