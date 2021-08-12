<template> 
  <div>
    <v-toolbar dark color="indigo">
      <router-linkto="/">
        <v-icon>arrow_back</v-icon>
      </routerlink>
        <v-toolbar-title class="white--text">MyTodo</v-toolbar-title>
    </v-toolbar>
      <v-text-field v-model="newTodo" placeholder="Inputhere..."></v-text-field>
    <v-btn dark color="indigo" v-on:click="addTodo()"class="white--text">ADD</v-btn>
  </div>
</template>

<script>
export default {
  data(){
    return{
      newTodo:''
    }
  },
  methods: {
    addTodo() {
      if(this.newTodo==='')return;
        const todos=JSON.parse(localStorage.getItem('todos'))||[];
      todos.push(this.newTodo);
      localStorage.setItem('todos',JSON.stringify(todos));
      this.newTodo='';
      this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration:none;
  }
</style>
