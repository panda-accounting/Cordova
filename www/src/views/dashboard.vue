<template>
  <v-container fluid>
    <v-container fluid justify-center align-center fill-height v-if="accounts.length == 0">
      <p class="grey--text">还没有任何账户呢，快添加账户吧！</p>
    </v-container>
    <v-layout row wrap v-else>

    </v-layout>
    <fab />
  </v-container>
</template>

<script>
import fab from '../components/fab.vue'
export default {
  components: {
    fab
  },
  computed: {
    accounts () {
      return this.$store.state.accounts.accounts
    }
  },
  mounted () {
    this.$store.commit('changeTitle', '熊猫记账')
  }
}
</script>
