<template>
  <div>
      <P>4 question</P>
      <button @click="fun()" >clickme</button>
      <p>{{ s3 }}</p>
  </div>
</template>
<script>
export default {
    name:"AbhI",
    data(){
        return{
            s1:"file",
            s2:"life",
            s3: ' '
        }
    },
    methods:{
    fun(){
        this.s3=this.s1.length === this.s2.length 
        this.s1.split(this.s1).sort().join() == this.s2.split(this.s2).sort().join()
        document.write(this.s3)
    }
    }

}
</script>

