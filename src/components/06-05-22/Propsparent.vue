<template>
  <div class="hello">
   
   <PropsChild 
      :name="name"
        ref="ref" 
      :number="number"
      :Items="Items"></PropsChild>
      <!-- <PropsChild   ref="refo"  ></PropsChild> -->
    <button @click="click()">Ref</button>
  </div>
</template> 
<script>
import PropsChild from './Propschild.vue'
export default {
  name: "HelloWorld",
  components: { 
    PropsChild
    },
  data() {
    return {
      name: "PropsConcept",
      
      Items:[
        {name:'500apps',id:1},
{name:'Technologies',id:2},
{name:'Agile',id:3},
{name:'Mantra',id:4},
{name:'Clockly',id:5},
{name:'CRM',id:6},
{name:'500apps',id:7}
      ]
    };
  },
//   methods: {
//     click() {
//       this.$refs.refo.fun();
//       this.$refs.refo.fun1();
//       alert("Parent");
//     },
//   },
// };
</script> 

