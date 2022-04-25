// Display current time for every 5 sec using Settimeout and SetInterval (JAVASCRIPT)
<template>
  <div>
    <h1>Set Time Out</h1>
    <p>{{ time }}</p>
    <button @click="fun()">click</button>
  </div>
</template>
<script>
export default {
  name: "SrutHi",
  data() {
    return {
      time: "",
    };
  },
  methods: {
    fun() {
      setTimeout(() => {
        this.time = new Date();
      }, 5000);
      setInterval(() => {
        this.time = new Date();
      }, 6000);
    },
  },
};
</script>