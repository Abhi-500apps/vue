<template>
<div>
    <button @click="fun()" >clickme</button>
</div>
  
</template>

<script>
export default {
    name:"ChilD1",
    component:{
    },
    methods:{
        fun(){
        this.$emit("login");
        }
    }

}
</script>



