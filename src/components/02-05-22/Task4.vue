<template>
  <div>
      <h1>Question-4</h1>
      <button @click="fun()">click</button>
      </div>
</template>
<script>
export default {
    name:"AbhI",
    data(){
        return{
            res:" ",

        }
    },
    methods:{
        fun(){
            function isArray(input){

            return !!input.pop;
            }
            this.res=
            // console.log(isArray(''));
            console.log(isArray([1, 2, 4, 0]));

        }
    }

}
</script>
