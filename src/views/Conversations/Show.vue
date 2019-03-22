<template>
  <div class="conversations-show">
    <div v-for="conversation in conversations">
    <h1>{{ conversation.product.id }}</h1>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      conversations: []
    };
  },
  created: function() {
    axios.get("/api/conversations").then(response => {
      console.log(response.data);
      this.conversations = response.data;
    });
  },
  methods: {}
};
</script>
