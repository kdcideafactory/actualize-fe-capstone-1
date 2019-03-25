d<template>
  <div class="images-new">
    <div class="container">
      <h1> Add Image URL</h1>
      

      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      
      <div class="form-group">
        <label>Product Id:</label> 
        <input type="text" class="form-control" v-model="product_id">
      </div>
      <div class="form-group">
        <label>Image URL:</label> 
        <input type="text" class="form-control" v-model="url">
      </div>
      <div class="form-group">
        <label for="url">Image URL</label>
        <input
          v-model="product.url"
          type="url"
          class="form-control"
          id="url"
          placeholder="Enter URL to an image">
      </div>
      <div>
       <button v-on:click="createImage()">Add Image URL</button> 
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  data: function() {
    return {
      url: "",
      product_id: "",
      images: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/api/images").then(response => {
      this.images = response.data;
    });
  },
  methods: {
    createImage: function() {
      var params = {
        url: this.url
      };
      axios
        .post("/api/images", params)
        .then(response => {
          this.$router.push("/images/" + response.data.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
      // },
      // destroyImage: function() {
      //   axios.delete("/api/images/" + this.image.id).then(response => {
      //     console.log("Picture burned with fire.", response.data);
      //     this.$router.push("/");
      //   });
    }
  }
};
</script>
