<template>
  <div class="users-show">



    <!-- Projects Section -->
    <section id="projects" class="projects-section">
      <div class="container">

        
        <div class="row">
          <div class="col-6">
            <img class="user-avatar" :src="user.avatar"><br>
            <router-link class="btn btn-warning" to="/users/me/edit">Edit User Profile</router-link>
          </div>
          <div class="col-6">
            <p>Email: {{ user.email }}</p>
            <p>Address: {{ user.address }}</p>
            <p>Bio: {{ user.bio }}</p>
          </div>
        </div>
      

        <div class="col-md-10 col-lg-8 mx-auto text-center pt-100">

          <h2 class="mb-5">Your Products</h2>

        </div>

        <div class="row">

          <div v-for="product in products" class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <img class="card-img-top" :src="product.images[0].url" alt="Card image cap">
                <h4 class="text-uppercase m-0">{{ product.name }}</h4>
                <hr class="my-4">
                <div class="small text-black-50">Price: {{ product.price }}</div>
                <div class="small text-black-50">Quantity on Hand: {{ product.qoh }}</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>
</template>

<style>
.user-avatar {
  width: 100px;
  border-radius: 2px;
}

.pt-100 {
  padding-top: 100px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      products: [],
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
    axios.get("/api/products").then(response => {
      console.log(response.data);
      this.products = response.data;
    });
  },
  methods: {}
};
</script>
