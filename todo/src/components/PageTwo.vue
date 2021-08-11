<template>
  <div>
    <h3>PageTwo</h3>
    <router-link to="/">PageOne</router-link>
    <button v-on:click="toPageOne()">ToPageOne</button>
  </div>
</template>

<script>
export default {
  methods: {
    toPageOne() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
</style>
