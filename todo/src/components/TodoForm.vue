<template>
  <div>
    <h3>My Todo</h3>
    <input v-model="newTodo" placeholder="Input here...">
    <!-- v-modelで双方向データバインディング -->
    <button v-on:click="addTodo()">ADD</button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods:{
      addTodo(){
        if(this.newTodo==='')return;
        const todos=JSON.parse(localStorage.getItem('todos'))||[];
        todos.push(this.newTodo);
        localStorage.setItem('todos',JSON.stringify(todos));
        this.newTodo='';
      }
    }
  }
</script>