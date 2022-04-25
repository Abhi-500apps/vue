<template>
  <div>
    <h4>using promises</h4>

    <button @click="fun3()">click</button>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "PromisE1",

  data() {
    return {};
  },

  methods: {
    fun3() {
      let mypromise = new Promise((myResolve, myReject) => {
        let response = axios.get("https://jsonplaceholder.typicode.com/todos/");

        myResolve(response);

        myReject("error");
      });

      mypromise.then((response) => {
        console.log(response.data);

        return;
      });

      mypromise.then(function (error) {
        if (error.response) {
          console.log(error.response.data);
        }
      });
    },
  },
};
</script>


<style>
</style>




