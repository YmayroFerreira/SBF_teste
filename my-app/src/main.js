import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store.js'
import './registerServiceWorker'
import router from './routes'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
