<template>
  <div class="products-show">
    <div v-for="product in products">

    Category: <input type="text" v-model="newProductCategoryId">
    Name: <input type="text" v-model="newUserName">
    Description: <input type="email" v-model="newProductDescription">
    Price: <input type="text" v-model="newProductPrice">
    QOH: <input type="text" v-model="newProductQoh">
    
<!--     User Id: <input type="text" v-model="newUserBio"> ###this needs to pull the current user over something current user =) -->

    <h1>{{ product.name }}</h1>
    <p>Description: {{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Price: {{ product.price }}</p>
    <p>QOH: {{ product.qoh }}</p>
    <p>QOH: {{ product.qoh }}</p>
  </div>

  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      products: []
    };
  },
  created: function() {
    axios.get("/api/products/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.product = response.data;
    });
  },
  methods: {}
};
</script>
