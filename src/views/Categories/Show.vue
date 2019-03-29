<template>
  <div class="categories-show">


    <!-- Projects Section -->
    <section class="projects-section">
      <div class="container">

       <div class="col-md-10 col-lg-8 mx-auto text-center pt-100">

         <h2 class="mb-5">{{category.name}}</h2>

       </div>

       <div class="row">

         <div v-for="product in category.products" class="col-md-4 mb-3">
           <div class="card py-4 h-100">
             <div class="card-body text-center">
               <img class="card-img-top" :src="product.images[0].url" alt="Card image cap">
               <h4 class="text-uppercase m-0">{{ product.name }}</h4>
               <hr class="my-4">
               <div class="small text-black-50">Price: {{ product.price }}</div>
               <div class="small text-black-50">Quantity on Hand: {{ product.qoh }}</div>
               <div class="small text-black-50">Lister: {{ product.user_name }}</div>
                <hr class="my-4">
               <button  class="btn btn-warning" v-on:click="setProduct(product)" data-toggle="modal" data-target="#messageNew">Contact Lister</button>
             </div>
           </div>
         </div>

       </div>


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
            <div class="form-group">
              <label>Message</label>
            <textarea class="form-control" v-model="message" rows="4"></textarea>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-warning" v-on:click="sendMessage(product,message)" data-dismiss="modal">Send Message</button>
          </div>
        </div>
      </div>
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
      message: "",
      errors: []
    };
  },
  created: function() {
    axios.get("/api/categories/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.category = response.data;
    });
  },
  methods: {
    setProduct: function(product) {
      this.product = product;
    },

    sendMessage: function(product, message) {
      console.log(product, message);
      var params = {
        product_id: product.id,
        recipient_id: product.user_id,
        body: message
      };
      console.log(params);
      axios
        .post("/api/conversations", params)
        .then(response => {
          console.log(response.data);
        })
        .catch(
          function(error) {
            this.errors = error.response.data.errors;
          }.bind(this)
        );
    }
  }
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
