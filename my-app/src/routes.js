import Vue from 'vue'
import Router from 'vue-router'
import LocationsPage from '@/pages/LocationsPage.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Locations',
      component: LocationsPage
    },
  ]
})