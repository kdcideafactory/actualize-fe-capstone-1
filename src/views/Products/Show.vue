<template>
  <div class="products-show">
    <h1>{{ product.name }}</h1>
  </div>
</template>

<style>
</style>

<script>
export default {
  data: function() {
    return {
      products: {},
      name: "",
      description: "",
      price: "",
      qoh: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        address: this.address,
        bio: this.bio,
        avatar: this.avatar
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>


data: function() {
  return {
    products: {},
    name: "",
    description: "",
    price: "",
    qoh: "",
    errors: []
  };
},

