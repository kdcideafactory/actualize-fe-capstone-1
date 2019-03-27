<template>
  <div class="categories-show">
    <h1>{{ category.name }}</h1>

    <div class="row">
    <div v-for="product in category.products" class="col-md-4">
      <div class="card" style="border: none">d
        <div class="card-body">
        <h6>{{ product.name }}</h6>
        <p>Description: {{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <p>Quantity on Hand: {{ product.qoh }}</p>
        <p>Lister: {{ product.user_name }}</p><br>
        <button  class="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target="#messageNew">Contact Lister</button>
        </div>
      </div>
    </div>
    </div>

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
          <button type="button" class="btn btn-primary">Send Message</button>
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
  methods: {}
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
