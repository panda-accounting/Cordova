<template>
  <v-container fluid>
    <v-layout row wrap>
    <v-flex xs12>
      <v-text-field
        label="用户名"
        :rules="[(v) => v.length <= 25 || '最长 25 个字符']"
        :counter="25"
        v-model="username"
      ></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        label="密码"
        :rules="[(v) => v.length <= 50 || '最长 50 个字符']"
        :counter="50"
        v-model="password"
        :append-icon="showPassword ? 'visibility_off' : 'visibility'"
        :append-icon-cb="() => (showPassword = !showPassword)"
        :type="showPassword ? 'text' : 'password'"
      ></v-text-field>
    </v-flex>
    <v-layout>
      <v-flex xs6>
        <v-btn block color="secondary" @click="register">注册</v-btn>
      </v-flex>
      <v-flex xs6>
        <v-btn block color="primary" @click="login">登录</v-btn>
      </v-flex>
    </v-layout>
    <v-flex xs12>
       <v-btn block outline @click="skip" color="primary">离线模式</v-btn>
    </v-flex>
  </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      showPassword: false,
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log('try login')
      this.$toast({text: '密码错误'})
    },
    register () {},
    skip () {
      this.$store.dispatch('skipRegister')
      this.$router.push('/password')
    }
  }
}
</script>

<style lang="less"  scoped>
.layout {
  .xs6 {
    background: white;
  }
  .xs6:nth-child(1) {
    padding-right: 5px;
  }
  .xs6:nth-child(2) {
    padding-left: 5px;
  }
}

</style>
