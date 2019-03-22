<template>
  <div class="categories-index">
    <div v-for="category in categories">
<!--     Name: <input type="text" v-model="newCategoryName"> -->
    <h1><a v-bind:href="'/categories/' + category.id"> {{ category.name }}</a></h1>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      categories: []
    };
  },
  created: function() {
    axios.get("/api/categories").then(response => {
      console.log(response.data);
      this.categories = response.data;
    });
  },
  methods: {}
};
</script>
