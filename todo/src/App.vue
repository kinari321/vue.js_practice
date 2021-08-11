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
  created() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    // ローカルストレージからデータ取得（複数のためkeyあり）。todosのキーがなかれば空[]になる。
  },
  components: {
    'todo-form': TodoForm,
    'todo-list': TodoList
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(newTodo);
      localStorage.setItem('todos', JSON.stringify(this.todos)); // ローカルストレージへデータ保存（複数のためkeyあり）
    },
    deleteTodo(i) {
      this.todos.splice(i, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos)); // ローカルストレージへデータ保存
    }
  }
}
</script>