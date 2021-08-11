<template>
  <div >
  <input v-bind:value="changeResult" v-on:change="onChange($event)" placeholder="change"> <!-- v-bind:valueに初期値 -->
    {{ changeResult }}
  <br>
  <input v-bind:value="inputResult" @input="onInput($event)" placeholder="input">
    {{ inputResult }}
  <br>
  <input v-bind:value="keyupResult" @keyup="onKeyup($event)" placeholder="keyup">
    {{ keyupResult }}
  <br>
  <input v-model="vmodelResult" placeholder="v-model">
    {{ vmodelResult }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      changeResult: "change default value", // 初期値
      inputResult: "input default value",
      keyupResult: "keyup default value",
      vmodelResult: "vmodel default value"
    }
  },
  methods: {
    onChange(e) { // 引数（e）でイベントオブジェクトを参照可能
      this.changeResult = e.target.value;
    },
    onInput(e) {
      this.inputResult = e.target.value;
    },
    onKeyup(e) {
      this.keyupResult = e.target.value;
    }
  }
}
</script>

<style>
</style>
