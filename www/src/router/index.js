import Vue from 'vue'
import Router from 'vue-router'

// const Foo = resolve => require(['../views/hello.vue'], resolve);
// import hello from '../views/hello.vue';

import main from '../views/main.vue'
import about from '../views/about.vue'
import login from '../views/login.vue'
import password from '../views/password.vue'
import dashboard from '../views/dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { name: 'home', path: '/', component: main },
    { name: 'about', path: '/about', component: about },
    { name: 'login', path: '/login', component: login },
    { name: 'password', path: '/password', component: password },
    { name: 'dashboard', path: '/dashboard', component: dashboard }
  ]
})
