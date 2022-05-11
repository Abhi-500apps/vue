<template>
  <div>
    <p>Hi</p>
  </div>
</template>


<script>
export default {
  name: "AbhI",

  data() {
    return {};
  },
  beforemounted() {
    console.log("beforemounted");
  },

  mounted() {
    console.log("mounted");
  },

  beforeCreate() {
    console.log("beforecreated", 1);
  },

  created() {
    console.log("created");
  },
};
</script>