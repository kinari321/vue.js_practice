<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
    <router-view></router-view>
    <div style="height: 1400px;"></div>
      <router-link
        id="next-user"
        :to="{ name: 'users-id-profile', params: { id: Number(id) + 1 }, query: { lang: 'ja', page: 2 }, hash: '#next-user' }"
      >次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>
