<template>
  <div class="overflow-auto">
      <h1>welcome to upl,pagination & fetch</h1>
     
 
      <button @click="fun()">urlp1</button>
      
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
      

    <p class="mt-3">Current Page: {{ currentPage }}</p>
    <b-table id="my-table" striped hover 
    :items="posts" 
    :fields="fields" 
    :per-page="perPage" 
    :current-page="currentPage"
     small>
     </b-table>

              
  </div>
</template>

<script>
import axios from 'axios'
  export default {
      name:"AbhI",
    data() {
      return {
        perPage: 10,
        currentPage: 1,
        fields: ["userId","id","title","completed"],
        posts:" "
        
      }
    },
    methods:{
        async fun(){
        let response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        this.posts = await response.data;

        }
    },
    computed: {
      rows() {
        return this.posts.length
        
      }
    }
  }
</script>