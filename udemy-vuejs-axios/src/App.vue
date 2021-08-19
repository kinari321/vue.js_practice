<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <h3>掲示板に投稿する</h3>
      <label for="name">ニックネーム:</label>
      <input
        id="name"
        type="text"
        v-model="name"
      >
      <br><br>
      <button @click="createComment">コメントをサーバーに送る</button>
      <label for="comment">コメント：</label>
      <textarea
        id="comment"
        v-model="comment"
      >
      </textarea>
      <h2>掲示板</h2>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      comment: '',
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
