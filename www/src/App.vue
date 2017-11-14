<template>
  <v-app id="inspire">
    <v-navigation-drawer
      persistent
      v-model="drawer"
      enable-resize-watcher
      app
    >
      <div class='sidebar__header'>
        <template v-if="user">
          <img class='sidebar__user-icon' src="dist/img/logo.png" />
          <span class='sidebar__username'>{{this.user.email}}</span>
          <div class='sidebar__icons'>
          </div>
        </template>
        <button v-else class="sidebar__button">请注册/登录</button>
      </div>
      <v-list dense>
        <v-list-tile @click="$router.push(action.path)"  v-for="action in actions" :key="action.path">
          <v-list-tile-action>
            <v-icon>{{action.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{action.name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app v-show="user">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        {{title}}
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <router-view />
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    name: 'Root',
    data: () => ({
      drawer: false,
      actions: [
        {icon: 'home', name: '仪表盘', path: '/dashboard'},
        {icon: 'folder_shared', name: '账户管理', path: '/accounts'},
        {icon: 'build', name: '设置', path: '/settings'},
        {icon: 'person_outline', name: '关于', path: '/about'}
      ]
    }),
    computed: {
      user () {
        return this.$store.getters['users/current']
      },
      title () {
        return this.$store.state.title
      }
    },
    props: {
      source: String
    }
  }
</script>
