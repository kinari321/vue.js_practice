import Vue from 'vue'
import Router from 'vue-router'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: PageOne
    },
    {
      path: '/pagetwo',
      component: PageTwo
    }
  ]
})
