<template>
  <div>
    <p>new Months</p>
    <button @click="keyy()">click me</button>
  </div>
</template>

<script>
export default {
  name: "AbhI",
    data() {
        return{
            value:""
        }
    },
  methods: {
    // fun() {
    //   var date = new Date();
    //   document.writeln(date.getMonth() + 1);
    // },

  keyy() {
    let mobile = {
      // an object
      name: "BlackBerry", // property
      color: "black",
      price: 40000,
    };

    // Traversing object
    for (this.value in mobile) {
      document.write(mobile[this.value] + "<br>")
    }
  },
  }
};
</script>

<style>
</style>