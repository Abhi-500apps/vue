<template>
  <div>
    <p>name:{{ name }}</p>
    <p>number:{{ number }}</p>
    <p>message:{{message}}</p>
      </div>
</template>
<script>
export default {
  name: "ProP",
  components: {},
  props: {
    name: String,
    number: Number,
    Message: { default:"hello everyone" , type: String}
  },
};
</script>