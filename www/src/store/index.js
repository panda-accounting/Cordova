import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  title: '熊猫记账',
  user: false
}

const modules = { }
const mutations = { }
const getters = { }
const actions = { }

export default new Vuex.Store({
  state,
  modules,
  mutations,
  getters,
  actions
})
