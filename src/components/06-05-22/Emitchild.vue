<template>
  <div><p @click="fun()">login</p></div>
</template> 
<script>
export default {
  name: "emitEvent",
  components: {
  },
  methods: {
    fun() {
      this.$emit("login");
    },
  },
};
</script>
