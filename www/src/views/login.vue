<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 style="text-align: center">
        <img class="logo" src="dist/img/logo.png" alt="">
      </v-flex>
      <v-flex xs12>
        <h3 style="text-align: center">熊猫记账</h3>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="用户名"
          :rules="[(v) => v.length <= 25 || '最长 25 个字符']"
          :counter="25"
          v-model="username"
          :required="true"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="密码"
          :rules="[(v) => v.length <= 50 || '最长 50 个字符']"
          :counter="50"
          :required="true"
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
        <v-btn block outline @click="skip" color="primary" disabled>离线模式（即将上线）</v-btn>
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
    async login () {
      try {
        await this.$store.dispatch('auth/authenticate', {strategy: 'local', email: this.username, password: this.password})
        this.$router.push('/password')
      } catch (e) {
        if (e.code === 401) {
          return this.$toast({text: '错误的密码与用户名组合'})
        }
        this.$toast({ text: e.message || e })
      }
    },
    async register () {
      try {
        await this.$store.dispatch('users/create', {email: this.username, password: this.password})
        this.$toast({'text': '创建账户成功'})
        await this.$store.dispatch('auth/authenticate', {strategy: 'local', email: this.username, password: this.password})
        this.$router.push('/password')
      } catch (e) {
        if (e.code === 500 && e.data && e.data.code === 11000) {
          return this.$toast({'text': '用户名已存在'})
        }
        this.$toast({text: e.message || e})
      }
    },
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
