import 'babel-polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import './mixin'
import App from './App.vue'
import Cordova from './Cordova.js'

import store from './store'
import router from './router'
import { sync } from 'vuex-router-sync'
import ToastComponent from './components/alerts.vue'

Vue.use(Vuetify)
sync(store, router)

const Toast = Vue.extend(ToastComponent)

Vue.mixin({
  methods: {
    $toast (option) {
      const toast = new Toast({
        store: this.$store,
        router: this.$router,
        propsData: {
          option
        }
      }).$mount()
      this.$root.$el.appendChild(toast.$el)
    }
  }
})

// Load Vue instance
export default new Vue({
  router,
  store,
  el: '#app',
  render: (h) => h(App),
  mounted () {
    Cordova.initialize()
  }
})
