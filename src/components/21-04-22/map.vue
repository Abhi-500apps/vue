<template>
    <div>
        <h1>MAP() function</h1>
        <button @click="fun()">try it</button>
    </div>
</template>
<script>
export default{
    name:"KiraN",
    data(){
        return{
            array:[{name:"abhishek",phone:69266262768},
            {name:"lokesh",phone:"6816369167"},
            {name:"mantra",phone:"54875476597"},
            {name:"matrix"}],
          
        }
        
    },
    methods:{
        fileds:["name","phone"],
        fun(){
            var s=this.array.map(j=>{
                return j.phone,j.name
                });
            console.log(s);

        }

    }
}
</script>
