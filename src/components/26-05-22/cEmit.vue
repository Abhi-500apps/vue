<template>
  <div>
      <h1>{{name}}</h1>
      <h1>{{id}}</h1>
      <h1>{{phone}}</h1>
    <b-button @click="Task()">$Emit</b-button>
    <b-table striped hover  sticky-header :items="list" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: "Emit_Child",
  
  props: {
      name:String,
      id:Number,
      phone:Number,
    list: {
      type: Object,
    },
  },
  data() {
    return {
      fields: [
        "symbol",
        "baseAsset",
        "quoteAsset",
        "openPrice",
        "lowPrice",
        "highPrice",
        "lastPrice",
        "bidPrice",
      ],
      items: [],
    };
  },
  methods: {
    Task() {
      this.$emit("action");
       this.$emit("action",{id:1185,name:"Abhishek"});
    },
  },
};
</script>

