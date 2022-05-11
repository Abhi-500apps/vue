<template>
  <div>
      <p>setTimeout</p>
      <button @click="fun()">clickme</button><br><br>
      <button @click="fun1()">clickme</button>
      {{sting}}
      
  </div>
</template>
<script>
export default {
    name:"AbhI",
    data(){
        return{
            sting:'',
            arr1:[5,5,8,8,7,9,2,6],
            arr2:[8,9,8,4,6,1,4,3],
            sum:[]
        }
    },
    methods:{
        fun(){
            setTimeout(()=>{
             return this.sting="mantra technology"
            },3000);
       
        },
        fun1(){
            this.sum=[...this.arr1].map((e,i)=>e +this.arr2[i]);
            document.write(this.sum);
          
        }
    }

}
</script>

