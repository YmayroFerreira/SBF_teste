import Vue from 'vue'
import Router from 'vue-router'
import Locations from '@/pages/Locations.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Locations',
      component: Locations
    },
  ]
})