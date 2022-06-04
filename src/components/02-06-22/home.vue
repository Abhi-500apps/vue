<template>
  <div>
    <sideview></sideview>
    <h2>welcome</h2>
  </div>
</template>
<script>
import sideview from "./sideview.vue"
export default {
  name: "side_view", //snake case
  components: { sideview },
  data() {
    return {};
  },
};
</script>

<style>
</style>