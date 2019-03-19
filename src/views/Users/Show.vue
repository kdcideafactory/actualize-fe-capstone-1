<template>
  <div class="users-show">
    Name: <input type="text" v-model="newUserName">
    Email: <input type="email" v-model="newUserEmail">
    Password: <input type="password" v-model="newUserPassword">
    Address: <input type="text" v-model="newUserAddress">
    Bio: <input type="text" v-model="newUserBio">
    Avatar: <input type="te" v-model="newUserBio">
    <h1>{{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
    <p>Bio: {{ user.bio }}</p>
    <p>Avatar: {{ user.avatar }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {}
};
</script>
