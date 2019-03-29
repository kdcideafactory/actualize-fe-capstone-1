<template>

  <div class="products-show">
    <div v-for="product in products">
      <h1>{{ product.id }}</h1>
    </div>

    <h1>{{ user.name }} +'s Products Profile Page</h1>

    <p>Product Name: {{ product.name }}</p>
    <p>Description: {{ product.description }}</p>
    <p>Price: {{ product.price }}</p>
    <p>Quantity on Hand: {{ product.qoh }}</p>
  </div>

</template>

<style>
img {
  width: 50px;
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
