<template>


  <div class="users-show">
    <h1>{{ user.name }} +'s Profile Page</h1>
    <h3>Update Profile</h3>
    <p>Email: {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
    <p>Bio: {{ user.bio }}</p>
    <img :src="user.avatar">


    <div>
      <button><router-link to="/users/me/edit">Edit User Profile</router-link></button>
      <button class="btn btn-danger" v-on:click="destroyUser()">Delete User</button>
    </div>
    <div class="row">
    <div v-for="product in products" class="col-md-4">
      <div class="card" style="border: none">d
        <div class="card-body">
        <h6>{{ product.name }}</h6>
        <p>Description: {{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <p>Quantity on Hand: {{ product.qoh }}</p>
        </div>
      </div>
    </div>
    </div>
    <button class="btn btn-success"><router-link style="color: white" to="/products/new">List New Product</router-link></button>
  </div>

</template>

<style>
img {
  width: 150px;
  border-radius: 2px;
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
  methods: {
    destroyUser: function() {
      axios.delete("/api/users/" + this.user.id).then(response => {
        console.log("Sorry to see you go.", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>
