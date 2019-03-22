<template>
  <div class="images-index">
    <div v-for="image in images">
      Image Id: <input type="text" v-model="newImageId">
      <p>Image Id: {{ image.id }}</p>
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
    axios.get("/api/image").then(response => {
      // console.log(response.data);
      this.image = response.data;
    });
  },
  methods: {}
};
</script>
