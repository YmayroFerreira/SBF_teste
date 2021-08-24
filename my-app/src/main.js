import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store.js'
import './registerServiceWorker'
import router from './routes'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBAPug2nvPL-iG90vcW_2mGMRhzEmh-x5k',
    library: 'places'
  }
})
new Vue({
  vuetify,
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
