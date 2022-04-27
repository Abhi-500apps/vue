<template>
<div>
  <h1>props</h1>
  <h3> name:{{name}}</h3>
  <h3> age:{{age}}</h3>
  <p>phone:{{phone}}</p> -->
</div>
</template>

<script>
export default {
    name:"PropS",
    components:{},
        props:{
            name:String,
            age:Number,
            phone:{default:9515656088,
            type:Number}
        }
    

}
</script>

<style>

</style>