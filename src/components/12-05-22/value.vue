<template>
<div>
    <b>filter</b>
    <input type="text" v-model="value">
    <button @click="fun()">click me</button>
</div>
  
</template>

<script>
export default {
    name:"AbhI",
    data(){
        return{
            array:["Abhishek","limit","elite","mantra","life","file"],
            
        }
    },
    methods:{
        fun(){
        var res=this.array.filter((abhi)=>abhi!="Abhishek"+this.value);
        document.write(res)
        
    
        
        }
    }

}
</script>



