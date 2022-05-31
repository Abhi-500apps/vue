<template>
  <div>
      <P>4 question</P>
      <center>
        <b>Enter the TextBox:1</b>
        <input type="text" v-model="s1" />&nbsp;
        <b>Enter the TextBox:2</b>
        <input type='text' v-model="s2"  small class='w-25'/>
        </center>
      <button @click="fun()" >clickme</button>
      <button @click="fun1()">do it</button>
      <p>{{ s3 }}</p>
  </div>
</template>
<script>
export default {
    name:"AbhI",
    data(){
        return{
            s1:' ',
            s2:' ',
            s3: ' '
            
        }
    },
    methods:{
    // fun(){
    //     this.s3=this.s1.length === this.s2.length &&
    //     this.s1.split(this.s1).sort().join() == this.s2.split(this.s2).sort().join()
    //     document.write(this.s3)
    // },
    fun1(){
        this.s3= this.s1.length === this.s2.length &&
        this.s1.includes(this.s1) == this.s2.includes(this.s2)
        document.write(this.s3)
    
    }
    }

}
</script>

