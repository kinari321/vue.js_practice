<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id"> <!-- v-forでリスト表示 -->
      {{ todo.text }}
      <button v-on:click="deleteTodo(todo.id)">x</button>
    </li>
  </ul>

</template>

<script>
export default {
  data () {
    return {
      todos: [
        {id: "1", text: "todo 1"},
        {id: "2", text: "todo 2"},
        {id: "3", text: "todo 3"}
      ]
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
    }
  }
}
</script>

<style>
</style>
