d<template>
  <div id="app">


    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <div class="container">
        <router-link class="navbar-brand js-scroll-trigger" to="/">Watchewgot!</router-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/categories">Categories</router-link>
            </li>
            <li v-if="!isLoggedIn()" class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/signup">Signup</router-link>
            </li>
            <li  v-if="!isLoggedIn()" class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/login">Login</router-link>
            </li>
            <li v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/users/me">Profile</router-link>
            </li>
            <li  v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/products/new">List Product</router-link>
            </li>
            <li  v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/conversations">My Conversations</router-link>
            </li>
            <li  v-if="isLoggedIn()" class="nav-item">
              <router-link class="nav-link js-scroll-trigger" to="/logout">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <router-view/>


    <!-- Footer -->
    <footer class="bg-black small text-center text-white-50">
      <div class="container">
        Copyright &copy; Kelly
      </div>
    </footer>


  </div>
</template>

<style>
nav#mainNav {
  background-color: #161616;
}
li.nav-item a.nav-link:hover {
  color: #ffc107 !important;
}
h4.text-uppercase {
  color: #ffc107;
}
h4.text-uppercase:hover {
  color: #e0a800;
}
</style>


<script>
export default {
  methods: {
    isLoggedIn: function() {
      return localStorage.getItem("jwt");
    }
  }
};
</script>
