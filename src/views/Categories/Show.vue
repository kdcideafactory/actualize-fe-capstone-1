<template>
  <div class="categories-show">
    <h1>{{ category.name }}</h1>

    <div v-for="product in category.products">
      <h3>{{ product.name }}</h3>
    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      category: {},
      product: {},
      errors: []
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


<!-- 
  created: function() {
    axios.get("/api/products").then(response => {
      this.products = response.data;
    });
  },
  methods: {
    createImage: function() {
      var params = {
        product_id: this.product_id,
        url: this.url
      };
      axios
        .patch("/api/images/" + this.image.id, params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/images/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
 -->

<!-- <ul id="example-1">
  <li v-for="item in items">
    {{ item.message }}
  </li>
</ul> -->
