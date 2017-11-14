<template>
  <div >
    <div class="fullscreen" @click="toggle" v-show="isActive" v-ripple>
        <div class="flex-spacer"></div>
        <div class="action" v-for="action in actions" :key="action.action" :class="action.size">
          <v-fab-transition >
            <v-btn
              @click="goto(action.action)"
              :color="action.color"
              dark
              absolute
              bottom
              right
              fab
              v-show="isActive"
              :small="action.size == 'small'"
            >
              <v-icon>{{action.icon}}</v-icon>
            </v-btn>
          </v-fab-transition>
          <span class="text">{{action.name}}</span>
        </div>
    </div>
    <div class="default-fab">
      <v-fab-transition>
        <v-btn
          @click="toggle"
          color="pink"
          dark
          absolute
          bottom
          right
          fab
          v-show="!isActive"
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActive: false,
      actions: [
        {name: '新建账户', action: 'account', icon: 'content_paste', color: 'orange', size: 'small'},
        {name: '记一笔账', action: 'record', icon: 'create', color: 'green'}
      ]
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    },
    goto (action) {
      this.isActive = false
      switch (action) {
        case "account":
          this.$router.push('/account/new')
        case "record":
          this.$router.push('/record/new')
      }
    }
  }
}
</script>

<style lang="less">
.default-fab {
  position: absolute;
  bottom: 57px;
  left: -10px;
  width: 100%;
}
.fullscreen  {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 57px;
  padding-right: 10px;
  .action {
    flex-basis: 70px;
    flex-shrink: 0;
    flex-grow: 0;
    position: relative;
    width: 100%;
    span.text {
      position: absolute;
      right: 100px;
      background: rgba(0, 0, 0, 0.8);
      padding: 6px;
      border-radius: 2px;
      color: white;
      top: 50px;
      right: 100px;
    }
    &.small {
      right: 6px;
      flex-basis: 40px;
      span.text {
        top: 25px;
        right: 90px;
      }
    }
  }
}
.flex-spacer {
  flex: 1;
}
</style>
