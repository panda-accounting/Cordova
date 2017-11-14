<template>
  <v-container fluid>
    <v-layout row wrap>
      <fab-simple @click.native="createNewAccount" icon="add" />
    </v-layout>
  </v-container>
</template>

<script>
import fabSimple from '../components/fab-simple.vue'
export default {
  components: {
    fabSimple
  },
  mounted () {
    this.$store.commit('changeTitle', '账户管理')
  },
  methods: {
    createNewAccount () {
      this.$router.push('/accounts/new')
    }
  }
}
</script>

<style>

</style>
