<template>
  <div>
    {{ pval }} // 親からのデータ
    <button v-on:click="addValueChild()">Add</button>
  </div>
</template>

<script>
export default {
  props: ['pval'], // 親から受け取ったデータ
  methods: {
    addValueChild() {
      this.$emit('add', 10); // 親のメソッドを発火
    }
  }
}
</script>

<style>
</style>
