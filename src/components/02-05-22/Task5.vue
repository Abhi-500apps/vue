<template>
  <div>
    <h1>question-5</h1>
    <button @click="fun()">click</button>
  </div>
</template>

<script>
export default {
  name: "AbhI",
  data() {
    return {
      myColor: ["Red", "Green", "White", "Black"],
      res:" "
    };
  },
  methods: {
    fun() {
      this.res=console.log(this.myColor.toString())+console.log(this.myColor.join(' '))+console.log(this.myColor.join('+'));
    },
  },
};
</script>
