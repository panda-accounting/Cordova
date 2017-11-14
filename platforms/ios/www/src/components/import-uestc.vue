<template>
  <v-layout column wrap>
      <v-flex xs12>
        <v-text-field
          label="学号"
          v-model="account.name"
          counter
          @change="updateId"
          required
        ></v-text-field>
      </v-flex>
      <v-flex xs12>
        <v-text-field
          label="查询密码"
          v-model="account.password"
          counter
          required
          :append-icon="showPassword ? 'visibility_off' : 'visibility'"
          :append-icon-cb="() => (showPassword = !showPassword)"
          :type="showPassword ? 'text' : 'password'"
        ></v-text-field>
      </v-flex>
      <v-btn block>导入</v-btn>
    </v-layout>
</template>

<script>

export default {
  props: ['account', 'edit'],
  data () {
    return {
      showPassword: false
    }
  },
  methods: {
    updateId () {

    }
  }
}
</script>

<style>

</style>
