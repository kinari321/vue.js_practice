<template>
    <b-container>
      <b-input-group>
        <b-form-input type="text" v-model="value"/>
        <b-input-group-append>
          <b-button variant="success" @click="handlerAddTodo()">送信</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-container>
</template>

<script>
  export default {
    name: 'TodoForm',
    data() {
      return {
        value: '',
      };
    },
    methods: {
      handlerAddTodo() {
        this.$emit('handleParentAddTodo', this.value);
        this.value = '';
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>