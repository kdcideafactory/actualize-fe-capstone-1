<template>
  <div class="conversations-index">

    <!-- Projects Section -->
    <section class="projects-section">
      <div class="container">

       <div class="col-md-10 col-lg-8 mx-auto text-center pt-100">

         <h2 class="mb-5">Your Conversations</h2>

       </div>

       <div class="row">

         <div v-for="conversation in conversations" class="col-md-4 mb-3 mb-md-0">
           <router-link v-bind:to="'/conversations/'+ conversation.id">
             <div class="card py-4 h-100">
               <div class="card-body text-center">
                 <h4 class="text-uppercase m-0">{{ conversation.product_name }}</h4>
                 <hr class="my-4">
                 <div class="small text-black-50">With: {{ conversation.partner.name }}</div>
               </div>
             </div>
           </router-link>
         </div>

       </div>


      </div>
    </section>


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
