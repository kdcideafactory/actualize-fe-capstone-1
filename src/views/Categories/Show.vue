<template>
  <div class="categories-show">
    <h1>{{ category.name }}</h1>
    <p>Category Id: {{ category.id }}</p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      category: {}
    };
  },
  created: function() {
    axios.get("/api/categories/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.category = response.data;
    });
  },
  methods: {}
};
</script>
