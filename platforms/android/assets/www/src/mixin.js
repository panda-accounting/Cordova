import Vue from 'vue'

Vue.mixin({
  async mounted () {
    await this.$store.dispatch('boot')
  }
})
