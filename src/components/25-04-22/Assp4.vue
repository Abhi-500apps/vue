<template>
<div>
<child :name="name" :number="number" :message="message" ></child>
</div>
</template>
<script>
import child from "./Assc4.vue";
export default {
  name: "ParenT",
  components: { child },
  data() {
    return {
      name: "Abhishek",
      number: "22 ",
      message: ""
    

    };
  },
};
</script>