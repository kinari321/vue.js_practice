<template>
  <div>
    <h1>Todoリスト</h1>
    <todo-form />
  </div>
</template>

<script>
import TodoForm from "@/components/TodoForm";
export default {
  name: 'Todo',
  components: {
    TodoForm,
  }
};
</script>

<style lang="scss" scoped>

</style>