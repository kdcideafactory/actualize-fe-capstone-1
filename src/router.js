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

import ConversationsIndex from "./views/Conversations/Index.vue";
import ConversationsShow from "./views/Conversations/Show.vue";

import ProductsNew from "./views/Products/New";
import ProductsShow from "./views/Products/Show.vue";


import MessagesIndex from "./views/Messages/Index.vue";
import MessagesShow from "./views/Messages/Show.vue";

import ImagesIndex from "./views/Images/Index.vue";
import ImagesShow from "./views/Images/Show.vue";

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
    },
    {
      path: "/products/new",
      name: "products-new",
      component: ProductsNew
    },
    {
      path: "/products/:id",
      name: "products-show",
      component: ProductsShow
    },
    {
      path: "/conversations",
      name: "conversations-index",
      component: ConversationsIndex
    },
    {
      path: "/conversations/:id",
      name: "conversations-show",
      component: ConversationsShow
    },
    {
      path: "/messages",
      name: "messages-index",
      component: MessagesIndex
    },
    {
      path: "/messages/:id",
      name: "messages-show",
      component: MessagesShow
    },
    {
      path: "/images",
      name: "images-index",
      component: ImagesIndex
    },
    {
      path: "/images/:id",
      name: "images-show",
      component: ImagesShow
    }
  ]
});