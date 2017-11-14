<template>
  <v-snackbar
    :timeout="timeout"
    :bottom="true"
    v-model="snackbar"
  >
    {{text}}
    <v-btn dark flat @click.native="close"> 关闭 </v-btn>
  </v-snackbar>
</template>

<script>

export default {
  props: {
    text: String,
    timeout: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {
      snackbar: true
    }
  },
  methods: {
    close () {
      this.snackbar = false
      this.$nextTick(() => {
        this.$destroy()
      })
    }
  }
}
</script>
