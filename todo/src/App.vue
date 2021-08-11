<template>
  <div>
    <h3>My Todo</h3>
    <input v-model="newTodo" placeholder="Input here...">
    <!-- v-modelで双方向データバインディング -->
    <button v-on:click="addTodo()">ADD</button>

    <h5>Todo List</h5>
    <ul>
       <li v-for="(todo, i) in todos" v-bind:key="i">  <!-- リスト表示。keyにはindexを使用 -->
        {{ todo }}
        <button v-on:click="deleteTodo(i)">DEL</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: '' // 入力データの管理
    }
  },
  methods: {
    addTodo() { // newTodoプロパティの値をtodoプロパティに追加している。
      if(this.newTodo ==='') return;
      this.todos.push(this.newTodo);
      this.newTodo = ''; // 追加後は空文字に戻す。
    },
    deleteTodo(i) {
      this.todos.splice(i, 1); // JSのspliceメソッドでデータの削除
    }
  }
}
</script>