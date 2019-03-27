<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/logout">Logout</router-link> |

      <router-link to="/users/me">My Profile</router-link> |

      <router-link to="/categories">Product Categories</router-link> |

<!--       <router-link to="/conversations">Conversations Index</router-link> |
      <router-link to="/conversations/:id">Conversations Show</router-link> | -->

<!--       <router-link to="/products/new">Products New</router-link> |
      <router-link to="/products/:id">Products Show</router-link> | -->

<!--       <router-link to="/messages">Messages Index</router-link> |
      <router-link to="/messages/:id">Messages Show</router-link> | -->
<!-- 
      <router-link to="/images/new">Images New</router-link> |
      <router-link to="/images">Images Index</router-link> |
      <router-link to="/images/:id">Images Show</router-link> | -->

    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

