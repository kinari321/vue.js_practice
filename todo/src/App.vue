<template>
  <div>
    <todo-form v-on:add="addTodo($event)"></todo-form>
    <todo-list v-bind:todos="todos" v-on:delete="deleteTodo($event)"></todo-list>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

export default {
  data() {
    return {
      todos: [],
    }
  },
  components: {
    'todo-form': TodoForm,
    'todo-list': TodoList
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
    },
    deleteTodo(i) {
      this.todos.splice(i, 1);
    }
  }
}
</script>