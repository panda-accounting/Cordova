<template>
  <v-layout column wrap>
      <v-flex xs12>
        <v-text-field
          label="学号"
          v-model="account.name"
          counter
          required
        ></v-text-field>
      </v-flex>

    </v-layout>
</template>

<script>
import { randomId } from '../utils'

export default {
  props: ['account', 'edit'],
  mounted () {
    if (!this.edit) {
      this.account.id = 'misc_' + randomId()
    }
  }
}
</script>

<style>

</style>
