<template>
  <div class="conversations-show">


    <!-- Projects Section -->
    <section class="projects-section">
      <div class="container">

       <div class="col-md-10 col-lg-8 mx-auto text-center pt-100">

         <h2 class="mb-5">Conversation about {{conversation.product_name}} between {{ conversation.sender.name }} and {{ conversation.recipient.name }}</h2>

       </div>


       <div v-for="message in conversation.messages" class="mb-3 mb-md-0">
          <p>{{ formatDate(message.created_at) }}</p>
          <p>{{ message.user }}: {{ message.body }}</p>
          <hr>
       </div>


       <button class="btn btn-warning" data-toggle="modal" data-target="#messageNew">New Message</button>


      </div>
    </section>


    <div class="modal" id="messageNew" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">New Message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <form class="text-center" v-on:submit.prevent="submit()">
              <div class="form-group">
                <textarea class="col-12" v-model="newMessageBody" rows="4" placeholder="Write a message"></textarea>
              </div>
              <input type="submit" class="btn btn-warning" value="Send">
            </form>
          </div>

        </div>
      </div>
    </div>
    


  </div>
</template>

<script>
/* global $ */
import axios from "axios";
import moment from "moment";

export default {
  data: function() {
    return {
      conversation: {},
      newMessageBody: ""
    };
  },
  created: function() {
    axios.get("/api/conversations/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.conversation = response.data;
    });
  },
  methods: {
    formatDate: function(date) {
      return moment(date).fromNow();
    },
    submit: function() {
      var params = {
        body: this.newMessageBody,
        conversation_id: this.conversation.id
      };
      axios
        .post("/api/messages", params)
        .then(response => {
          console.log(response.data);
          $("#messageNew").modal("hide");
          this.conversation.messages.push(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
