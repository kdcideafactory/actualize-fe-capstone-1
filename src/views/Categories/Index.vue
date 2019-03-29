<template>
  <div class="categories-index">



    <!-- Projects Section -->
    <section class="projects-section">
      <div class="container">

       <div class="col-md-10 col-lg-8 mx-auto text-center pt-100">

         <h2 class="mb-5">Categories</h2>

       </div>

       <div class="row">

         <div v-for="category in categories" class="col-md-4 mb-3">
           <router-link v-bind:to="'/categories/' + category.id">
             <div class="card py-4 h-100">
               <div class="card-body text-center">
                 <h4 class="text-uppercase m-0">{{ category.name }}</h4>
               </div>
             </div>
           </router-link>
         </div>

       </div>


      </div>
    </section>


  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      categories: []
    };
  },
  created: function() {
    axios.get("/api/categories").then(response => {
      console.log(response.data);
      this.categories = response.data;
    });
  },
  methods: {}
};
</script>
