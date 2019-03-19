import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import UsersShow from "./views/Users/Show.vue";
import UsersEdit from "./views/Users/Edit.vue";
import CategoriesIndex from "./views/Categories/Index.vue";
import CategoriesShow from "./views/Categories/Show.vue";


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: "/", 
      name: "home", 
      component: Home 
    },
    { 
      path: "/signup", 
      name: "signup", 
      component: Signup 
    },
    { 
      path: "/login", 
      name: "login", 
      component: Login 
    },
    { 
      path: "/logout", 
      name: "logout", 
      component: Logout 
    },
    {
      path: "/users/:id", 
      name: "users-show", 
      component: UsersShow
    },
    {
      path: "/users/:id/edit",
      name: "users-edit",
      component: UsersEdit
    },
    {
      path: "/categories",
      name: "categories-index",
      component: CategoriesIndex
    },
    {
      path: "/categories/:id",
      name: "categories-show",
      component: CategoriesShow
    }
  ]
});