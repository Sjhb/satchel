import Vue from 'vue'
import Router from 'vue-router'
import home from '@/home.vue'
import infiniteScroll from '@/example/infiniteScroll.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: home,
    name: 'home'
  }, {
    path: '/infiniteScroll',
    component: infiniteScroll,
    name: 'infiniteScroll'
  }]
})
