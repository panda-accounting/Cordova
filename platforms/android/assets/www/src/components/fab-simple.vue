<template>
  <div >
    <div class="default-fab">
      <v-fab-transition>
        <v-btn
          color="pink"
          dark
          absolute
          bottom
          right
          fab
        >
          <v-icon>{{icon}}</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ['icon', 'color']
}
</script>

