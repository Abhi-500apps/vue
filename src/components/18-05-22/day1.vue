<template>
  <div>
    <b> forEach </b>
    <button @click="fun()" >click</button>
    <!-- <p>{{ food }}</p>
    <p>{{ res }}</p> -->
  </div>
</template>

<script>
export default {
    name:"ForEach",
    data(){
        return{
            food :[ 'mango','rice','pepper','pear'],
           cars:[ { id: 1, name: "RangeRover" },
            { id: 2, name: "LandRover" },
            { id: 3, name: "Jeep" },
            { id: 4, name: "volvo" },],

             res:' '
           

        }
    },
    methods:{
        fun(){
           this.res = this.food.forEach((item)=>{
                document.write("I want to eat "+item+ "<br>")
        });
          
        },
        fun1(){

        }
          


    }

}
</script>

