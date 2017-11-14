<template>
  <v-container fluid :fill-height="loading">
    <v-layout column justify-center align-center v-if="loading">
      <v-progress-circular :size="70" indeterminate color="primary"></v-progress-circular>
      <p class="grey--text">{{loadingText}}</p>
    </v-layout>
    <v-layout row wrap v-if="!loading">
      <h3>配置你的主密码</h3>
      <v-flex xs12>
        <v-text-field
          label="主密码"
          :rules="[(v) => v.length <= 50 || '最长 50 个字符']"
          v-model="master"
          hint="我们使用主密码来加密你的所有记录，即便服务受到入侵，在没有主密码的情况下，也无法获取到你的账户和密码。请注意妥善保存主密码，目前尚无找回手段"
          persistent-hint
          :required="true"
          :append-icon="showPassword ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (showPassword = !showPassword)"
          :type="showPassword ? 'text' : 'password'"
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-btn block outline @click="submit" color="primary">继续</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { wait } from '../utils/'
export default {
  data () {
    return {
      master: '',
      showPassword: false,
      loading: true,
      loadingText: ''
    }
  },
  async mounted () {
    this.loadingText = '砍一点竹子'
    await wait(this.$store.dispatch('vault/find'))
    this.loadingText = '造一个窝'
    await wait(this.$store.dispatch('unlock'))
    this.loading = false
  },
  methods: {
    submit () {
      console.log(this.master)
      this.$store.dispatch('setMaster')
    }
  }
}
</script>
