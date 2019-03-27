<template>
  <div class="users-edit">
    <h1> Logged in as: {{ user.name }}!</h1>
    
  <form v-on:submit.prevent="submit()">
        <h1>Update User Profile</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-model="user.name">
        </div>
        <div class="form-group">
          <label>Password:</label> 
          <input type="password" class="form-control" v-model="user.password">
        </div>
        <div class="form-group">
          <label>Password Confirmation:</label> 
          <input type="password" class="form-control" v-model="user.password_confirmation">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="user.email">
        </div>
        <div class="form-group">
          <label>Bio:</label>
          <input type="text" class="form-control" v-model="user.bio">
        </div>
        <div class="form-group">
          <label>Avatar:</label>
          <input type="text" class="form-control" v-model="user.avatar">
        </div>
        
        
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>

<!--   <button v-on:click="destroyUser()">Burn with Fire</button><br> -->
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
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.user.name,
        password: this.user.password,
        password_confirmation: this.user.password_confirmation,
        email: this.user.email,
        address: this.user.address,
        bio: this.user.bio,
        avatar: this.user.avatar
      };
      console.log(params);

      axios
        .patch("/api/users/" + this.user.id, params)
        .then(response => {
          console.log(response.data);
          this.$router.push("/users/me");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },

    destroyUser: function() {
      axios.delete("/api/users/" + this.user.id).then(response => {
        console.log("Sorry to see you go.", response.data);
        this.$router.push("/");
      });
    }
  }
};
</script>


<!-- This process works great and and the user signs up, they are pushed to the login vue. -->




<!--   <div class="users-edit">
    <h1>{{ user.name }}</h1>
    <p>Password: {{ user.password }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
    <p>Bio: {{ user.bio }}</p>
    <p>Avatar: {{ user.avatar }}</p>
  </div> -->
