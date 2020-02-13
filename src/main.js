import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false
const opts = {}
const vuetify = new Vuetify(opts)
new Vue({
  el: '#app',
  vuetify,
  router,
  render: h  => h(App)
})