<template>
  <div>
    <cEmit :name="name" :id="id" :phone="phone" @action="click1" :list="list"  ></cEmit>
     <day1/>   
  </div>
</template>

<script>
import cEmit from "./cEmit.vue";
// import day1 from '../18-05-22/day1.vue';
import axios from "axios";
export default {
  name: "Emit_Parent",
  //mixins:[cEmit,day1],

  components: {
    cEmit,
  },

  data() {
    return {
      name:"abhi",
      id:33456,
      phone:35547,
      list:[],
      
    };
  },
//   mounted(){
//       setTimeout(()=>{this.click1()},10000);
      
//   },
  methods: {
    async click1(change) {
      console.log(change)
         this.id=change.id;
         this.name=change.name;
      let response = await axios.get("https://api.wazirx.com/sapi/v1/tickers/24hr");
      this.list = await response.data;
             
    }

  },
};
</script>

