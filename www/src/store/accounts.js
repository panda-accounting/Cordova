const state = {
  accounts: [],
  ids: {}
}

const modules = { }
const mutations = {
  changeTitle (state, newTitle) {
    state.title = newTitle
  }
}
const getters = { }
const actions = {
  create ({ state }, account) {
    state.accounts.push(account)
    state.ids[account.id] = account
  }
}

export default {
  state,
  modules,
  mutations,
  getters,
  actions
}
