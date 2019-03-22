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
      product: {}
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
