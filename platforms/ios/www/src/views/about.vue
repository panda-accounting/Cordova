<template>
  <v-container fluid class="about">
    <v-layout column wrap>
      <img class="logo" src="dist/img/logo.png" alt="">
      <h2 class="text--center">熊猫记账</h2>
      <p>本项目依据 MIT 协议开源</p>
      <div class="grey--text">
        <p>Github: <br> <a href="https://github.com/panda-accounting/Cordova">https://github.com/panda-accounting/Cordova</a></p>
        <p>Logo 来自 <a href="https://dribbble.com/shots/3067287-Shy-Panda-App"> Alfrey Davilla </a> 在 Dribbble 上的投稿 </p>
      </div>
      </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'about'
}
</script>

<style scoped>
.about {
  text-align: center
}
</style>
