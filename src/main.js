import 'regenerator-runtime'
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

router.beforeEach(async (to, from, next) => {
  console.log(to)
  if (to.meta.private) {
    if (localStorage.getItem('user')) {
      try {
        let user = await axios.post('http://localhost:3000/auth/facebook', {
          UID: localStorage.getItem('user')
        })
        console.log('user', user)
        if (user.data.id) {
          return next()
        } else {
          return next({ path: '/' })
        }
      } catch (e) {
        alert()
        return next({ path: '/' })
      }
    }
    return next({ path: '/' })
  }
  next()
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