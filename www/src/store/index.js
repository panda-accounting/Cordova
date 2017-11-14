import Vue from 'vue'
import Vuex from 'vuex'

import feathers from '@feathersjs/client'
import feathersVuex from 'feathers-vuex'
import router from '../router'
import axios from 'axios'
import { get } from 'lodash'

const remote = process.env.NODE_ENV !== 'production' ? 'http://localhost:3030' : 'http://api.accouting.pandada8.me'

window.feathers = feathers
const app = feathers()
  .configure(feathers.rest(remote).axios(axios))
  .configure(feathers.authentication({storage: window.localStorage}))

const { service, auth } = feathersVuex(app, {idField: '_id'})
Vue.use(Vuex)

const state = {
  title: '熊猫记账',
  user: false
}

const modules = { }
const mutations = { }
const getters = { }
const actions = {
  boot ({state, dispatch}) {
    if (state._booting) return state._booting
    state._booting = new Promise(async (resolve, reject) => {
      const token = window.localStorage.getItem('feathers-jwt')
      if (token) {
        console.log(token)
        await dispatch('auth/authenticate', {strategy: 'jwt', token: token})
        const userId = get(state, 'auth.payload.userId')
        console.log(userId)
        if (userId) {
          await dispatch('users/get', userId)
          router.push('/dashboard')
          return
        }
      }
      router.push('/login')
    })
  },
  setMaster ({ state }, password) {
    state.master = password
    localStorage.setItem('master', password)
  }
}

export default new Vuex.Store({
  plugins: [
    service('vault'),
    service('users'),
    auth()
  ],
  state,
  modules,
  mutations,
  getters,
  actions
})
