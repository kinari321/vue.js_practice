<template>
  <div>
    <h3>PageOne</h3>
    <router-link to="/pagetwo">PageTwo</router-link>
    <button v-on:click="toPageTwo()">ToPageTwo</button>
  </div>
</template>

<script>
export default {
  methods: {
    toPageTwo() {
      this.$router.push('/pagetwo');
    }
  },
  created() {
    alert("PageOne created!");
  },
  destroyed() {
    alert("PageOne destroyed!");
  }
}
</script>
