<template>
  <div>
      <p>{{array1}}</p>
  <button @click="func()">click</button>
  </div>
</template>

<script>
export default {
name:"ArraY",
data(){
    return{
    array1:[1,2,3,1],
    }
    },
    methods:{
        func(){
            this.array1.pop()
            return this.array1
        }
    }
}
</script>
