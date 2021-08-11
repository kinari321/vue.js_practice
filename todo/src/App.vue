<template>
  <child v-bind:pval="parentValue" v-on:add="addValueParent($event)"></child>
  <!-- childはカスタム要素として。v-bind:pvalは親→子。propsで受け取っている。 -->
  <!-- v-on:add="addValueParent($event) はaddイベントでaddValueParentメソッドを呼び出す。 -->
</template>

<script>
import Child from './components/Child'

export default {
  data () {
    return {
      parentValue: 100
    }
  },
  components :{
    'child': Child // 'child'でコンポーネントの登録
  },
  methods: {
    addValueParent(value) { // 子から発火させられるイベント
      this.parentValue += value;
    }
  }
}
</script>

<style>
</style>
