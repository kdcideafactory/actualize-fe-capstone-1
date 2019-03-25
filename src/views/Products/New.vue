<template>
  <div class="products-new">
    
    <div class="container">

      <h1>New Product</h1>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Category Id:</label> 
        <input type="text" class="form-control" v-model="category_id">
      </div>
      <div class="form-group">
        <label>Name:</label> 
        <input type="text" class="form-control" v-model="name">
      </div>
      <div class="form-group">
        <label>Description:</label> 
        <input type="text" class="form-control" v-model="description">
      </div>
      <div class="form-group">
        <label>Price:</label> 
        <input type="text" class="form-control" v-model="price">
      </div>
      <div class="form-group">
        <label>Quantity on Hand:</label> 
        <input type="text" class="form-control" v-model="qoh">
      </div>
      <div class="form-group">
        <label>Image Url:</label> 
        <input type="text" class="form-control" v-model="url">
      </div>
        <div>
          <button v-on:click="createProduct()">Create Product</button>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      category_id: "",
      name: "",
      description: "",
      price: "",
      qoh: "",
      url: "",
      categories: [],
      images: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/api/categories").then(response => {
      this.categories = response.data;
    });
  },

  methods: {
    createProduct: function() {
      var params = {
        category_id: this.category_id,
        name: this.name,
        description: this.description,
        price: this.price,
        qoh: this.qoh,
        url: this.url
      };
      axios
        .post("/api/products", params)
        .then(response => {
          this.$router.push("/products/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
