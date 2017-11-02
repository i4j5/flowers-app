import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'

Vue.use(VueAgile)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
})
