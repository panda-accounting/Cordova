<template>
  <v-snackbar
    :timeout="option.timeout || 5000"
    :bottom="true"
    v-model="snackbar"
  >
    {{option.text}}
    <v-btn v-if="option.closeable" dark flat @click.native="close"> 关闭 </v-btn>
  </v-snackbar>
</template>

<script>

export default {
  props: ['option'],
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
