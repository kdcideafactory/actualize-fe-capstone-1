<template>
  <div class="conversations-show">
    <h1>New Convo</h1>
    <div>
      Subject: <input type="text" v-model="newConversationProductId">

      <button v-on:click="createConversation()">Create Conversation</button>
    </div>
    <h1>All Convos</h1>
    <div v-for="conversation in conversations">
      <h2>{{ conversation.product.id }}</h2>
      <img v-bind:src="product.image.url">
      <button v-on:click="showConversation(conversation)">Show more</button>
      <div v-if="currentConversation === conversation">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      converstaions: [],
      currentConversation: {},
      newConversationProductId: "",
      newConversationSenderId: "",
      newConversationRecipientId: ""
    };
  },
  created: function() {
    axios.get("/api/conversations/" + this.$route.params.id).then(response => {
      this.conversation = response.data;
    });
  },
  methods: {
    createConversation: function() {
      var params = {
        product.id: this.newPhotoName,
        width: this.newPhotoWidth,
        height: this.newPhotoHeight
      };
      axios.post("/api/photos", params).then(response => {
        this.photos.push(response.data);
        this.newPhotoName = "";
        this.newPhotoWidth = "";
        this.newPhotoHeight = "";
      });
    },
    showPhoto: function(photo) {
      if (this.currentPhoto === photo) {
        this.currentPhoto = {};
      } else {
        this.currentPhoto = photo;
      }
    }
  }
};
</script>








<!-- 

<template>
  <div class="conversations-show">
    
  </div>
  
</template> -->


 -->
<script>












// import axios from "axios";

// export default {
//   data: function() {
//     return {
//       conversation: {},
//       errors: [],
//       sender: {},
//       recipient: {},
//       product: {}
//   };
