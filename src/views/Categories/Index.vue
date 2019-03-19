<template>
  <div class="categories-index">
    <h1>All Categories</h1>
      <h2>{{ category.name }}</h2>
      <img v-bind:src="image.url">
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      category: []
    };
  },
  created: function() {
    axios.get("/api/categories").then(response => {
      this.categories = response.data;
    });
  },
  methods: {}
};
</script>
