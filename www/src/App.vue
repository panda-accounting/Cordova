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
          <img class='sidebar__user-icon' src={`/api/avatar/${this.user.username}`} />
          <span class='sidebar__username'>{{this.user.username}}</span>
          <div class='sidebar__icons'>
          </div>
        </template>
        <button class="sidebar__button">请注册/登录</button>
      </div>


      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
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
    data: () => ({
      drawer: false
    }),
    mounted () {
      if (!this.user) {
        this.$router.push('/login')
      }
    },
    computed: {
      user () {
        return this.$store.state.user
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
