import Vue from 'vue'
import Router from 'vue-router'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

// import Vuetify from 'vuetify/lib'
// import 'vuetify/src/stylus/app.styl'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: TodoList
    },
    {
      path: '/todos/add',
      component: TodoForm
    }
  ]
})
