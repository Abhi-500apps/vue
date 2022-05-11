<template>
<div>
    <h4> watch Question</h4>
<center>
<b>Enter the TextBox:1</b>
<input type="text" v-model="tb1" />&nbsp;
<b>Enter the TextBox:2</b>
<input type='text' v-model="tb2"  small class='w-25'/>
</center>
</div>
</template>
<script>
export default {
  name: "AbhI",
  data() {
    return {
      tb1: " ",
      tb2: " ",
    };
  },
  watch: {
    tb1: function (value) {
      this.tb1 = value;
      this.tb2 = this.tb1.toUpperCase();
    },
  },
};
</script>