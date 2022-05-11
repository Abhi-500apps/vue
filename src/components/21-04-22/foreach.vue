<template>
    <div>
        <h1> Example foreach</h1>
        <button @click="func()">forEach</button>
        

    </div>
</template>
<script>
export default{
    name:"eXamplE",
        data(){
            return{
                array:["Hi","This","is","Abhi"],
                // array1:[1,2,3,4,5,6]
            }
        },
        methods:{
              func() {
                this.array.forEach((row) =>{
                   console.log(row);
               })
              },
                          
                          
             
        }

}
</script>
