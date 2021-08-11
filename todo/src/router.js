import Vue from 'vue'
import Router from 'vue-router'
import PageOne from './components/PageOne' // ルートの定義
import PageTwo from './components/PageTwo' // ルートの定義


Vue.use(Router)

export default new Router({
  mode: 'history', // historyモード
  base: process.env.BASE_URL,
  routes: [ // 配列でルートの定義
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
