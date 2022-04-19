<template>
<div>
<form name="form" @submit="fun()">
Name:<input type="text" placeholder="Enter the name"  name="fname" required><br><br>
password<input type="password" placeholder="Enter the name"  name="fpsw" required><br><br>
Email:<input type="Email" placeholder= "Enter the email" name="Email"><br><br>
<button type="sumbit"  @click="fun()" value="Login">Click</button>
</form>
</div>
</template>
<script>
export default{
    name:"AbHi",
    data(){
        return {

        }
    },
    methods:{
        fun(){
            document.write(document.form.fname.value+"  "+document.form.fpsw.value+" "+document.form.Email.value);

        },
    },
};
</script>


