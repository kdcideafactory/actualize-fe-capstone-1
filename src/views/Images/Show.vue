<template>
  <div class="images-show">
    <div v-for="image in images">
    Image Id: <input type="text" v-model="image.id">
    <h1>{{ image.id }}</h1>
<!--     Name: <input type="text" v-model="newCategoryName"> #### need to work on calling up current user items-->
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      images: []
    };
  },
  created: function() {
    axios.get("/api/images").then(response => {
      console.log(response.data);
      this.image = response.data;
    });
  },
  methods: {}
};
</script>
