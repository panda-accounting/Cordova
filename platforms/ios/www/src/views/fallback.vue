<template>
  <v-container fluid justify-center align-center fill-height>
    <p class="grey--text">面包会有的 <br> 设置也会有的</p>
  </v-container>
</template>
<script>
export default {
  mounted () {
    this.$store.commit('changeTitle', '熊猫记账')
  }
}
</script>
