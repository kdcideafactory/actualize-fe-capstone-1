<template>
  <div class="messages-index">
    <p>Test</p>
    <div v-for="message in messages">
<!--       Message Id: <input type="text" v-model="newMessageId"> -->
    <h1>{{ message.id }}</h1>
<!--     Name: <input type="text" v-model="newCategoryName"> #### need to work on calling up current user items-->
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      messages: []
    };
  },
  created: function() {
    axios.get("/api/message").then(response => {
      console.log(response.data);
      this.message = response.data;
    });
  },
  methods: {}
};
</script>
