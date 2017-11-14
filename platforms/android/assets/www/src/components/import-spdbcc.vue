<template>
  <v-layout column wrap>
      <v-flex xs12>
        <v-text-field
          label="银行卡号"
          v-model="account.name"
          counter
          max="15"
          required
        ></v-text-field>
      </v-flex>
    </v-layout>
</template>

<script>
import { randomId } from '../utils'

// const http = cordova.plugin.http
// const loginUrl = 'https://cardsonline.spdbccc.com.cn/icard/login.do'
// const loginTokenUrl = 'https://cardsonline.spdbccc.com.cn/icard/icardlogin.do?_locale=zh_CN'
// const headers = {
//   "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
//   "Accept-Encoding": "gzip, deflate, br",
//   "Accept-Language": "zh,en-US;q=0.8,en;q=0.6",
//   "Cache-Control": "max-age=0",
//   "Connection": "keep-alive",
//   "Upgrade-Insecure-Requests": "1",
//   "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
// }
// const get = function () {
//   const args = Array.from(arguments)
//   return new Promise((resolve, reject) => {
//     args.push(response => resolve(response))
//     args.push(response => reject(response))
//     http.get.apply(http, args)
//   })
// }

export default {
  props: ['account', 'edit'],
  mounted () {
    if (!this.edit) {
      this.account.id = 'misc_' + randomId()
    }
  },
  data () {
    return {
      log: ''
    }
  },
  methods: {
    async Faking () {

    },

    async promptForToken (image) {
    }
    // async start () {
    //   for(var i in headers){
    //     http.setHeader(i, headers[i])
    //   }
    //   const page = await get(loginTokenUrl)
    //   page.text
    // }
  }
}
</script>

<style>

</style>
