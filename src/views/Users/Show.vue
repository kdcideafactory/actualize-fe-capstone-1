xc<template>
  <div class="users-show">
    <h1>{{ user.name }}</h1>
    <p>Email: {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
    <p>Bio: {{ user.bio }}</p>
    <img :src="user.avatar">
  </div>
</template>

<style>
img {
  width: 150px;
  border-radius: 2px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      errors: []
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
