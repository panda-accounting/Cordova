<template>
<v-layout row justify-center>
    <v-dialog :value="true" fullscreen transition="dialog-bottom-transition" :overlay=false>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon @click.native="back" dark>
            <v-icon>arrow_back</v-icon>
          </v-btn>
          <v-toolbar-title>创建新账户</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click.native="save"><v-icon>done</v-icon>保存</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-layout column wrap>
            <v-flex>
              <v-select
                :items="items"
                v-model="account.type"
                label="账户类型"
                single-line
                bottom
                required
                item-text="name"
                item-value="type"
              ></v-select>
            </v-flex>
            <component :is="'import-' + account.type" v-if="account.type" :account="account" />
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
  <!-- <v-container fluid>

  </v-container> -->
</template>

<script>
import ImportMisc from '../components/import-misc.vue'
import ImportSpdbcc from '../components/import-spdbcc.vue'
import ImportUestc from '../components/import-uestc.vue'

export default {
  components: {
    ImportMisc,
    ImportUestc,
    ImportSpdbcc
  },
  data () {
    return {
      account: {
        id: '',
        name: '',
        type: ''
      },
      items: [{ type: 'spdbcc', name: '浦发银行信用卡' }, { type: 'uestc', name: '电子科技大学饭卡' }, { type: 'misc', name: '其他' }]
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    save () {
      console.log(this.account)
      this.$store.dispatch('accounts/create', this.account)
    }
  }
}
</script>

<style>

</style>
