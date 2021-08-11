<template>
  <div>
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
  props:['todos'],
  methods: {
    deleteTodo(i) {
      this.$emit('delete', i); // JSのspliceメソッドでデータの削除
    }
  }
}
</script>