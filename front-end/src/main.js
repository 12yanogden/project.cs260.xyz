import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  voter: null
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
