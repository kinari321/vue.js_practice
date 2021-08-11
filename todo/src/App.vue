<template>
  <div >
  <button v-on:click="onClick()">click</button>
    {{ clickResult }}
  <br>
  <input v-on:change="onChange($event)" placeholder="change"> <!-- $eventを使ってイベントオブジェクトを渡す -->
    {{ changeResult }}
  <br>
  <input @input="onInput($event)" placeholder="input">
    {{ inputResult }}
  <br>
  <input @keyup="onKeyup($event)" placeholder="keyup">
    {{ keyupResult }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      clickResult: "", // 空文字の設定
      changeResult: "",
      inputResult: "",
      keyupResult: ""
    }
  },
  methods: {
    onClick() {
      this.clickResult = "clicked"
    },
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
