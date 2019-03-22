<template>
  <div class="products-index">
    <div v-for="product in products">
<!--     Name: <input type="text" v-model="newCategoryName"> -->
    <h1><a v-bind:href="'/products/' + product.id"> {{ product.name }}</a></h1>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      products: []
    };
  },
  created: function() {
    axios.get("/api/products").then(response => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {}
};
</script>
