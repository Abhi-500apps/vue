<template>
  <div> 
      <p> filter types</p>
      <input type="text" v-model="res" placeholder="Enter the text">
      <button @click="filter()">click me</button>
  </div>
</template>

<script>
export default {
    name:"FilterTypes",
    data(){
        return{
            array:["Abhishek","limit","mantra","venky","mahesh","mantra","Abhishek"],
            res: ' '
        }
    },
    methods:{
        filter(){
            this.res = this.array.filter((abhi)=>{
                return abhi.includes(this.res)
            })
        }
    }

}
</script>

