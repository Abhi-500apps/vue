<template>
    <div>
        <h1>facabook</h1>
        <form name="form" @submit="click()">
        Username:<input type="text" placeholder="= enter the username" name="fusername" required><br><br>
        Email:<input type="email" placeholder="enter the email" name="gmail" required><br><br><br>
        password:<input type="password" placeholder= " enter the password" name="fpsw " required><br><br>
        phone:<input type="number" placeholder =" enter the phone " name="name" required><br><br><br>
        Alternative_phone:<input type="number" placeholder="Enter the Alternative phone" required><br><br>
        OTP:<input type = "number" placeholder= "Enter the 4-digit code" required><br><br><br>
        <button type = "submit" @click="click()" value = "Login">login</button>
        </form>
    </div>
</template>
<script>
export default{
    name:"lokEsh",
    data(){
        return{
 array:[1,2,3,4],
        }
    },
    methods:{
        click(){
            let a=[1,2,3,4,5]
            console.log(this.array);
            console.log(a[0])
            // document.write("username"+document.form.fusername.value+"<br> "+"Email"+
            // document.form.gmail.value+"<br>"+"password"+document.form.fpsw.value+"<br>"+
            // "phone"+document.form.name.value+"<br>"+"alternative phone"+
            // document.form.value+"<br>"+"otp"+document.form.value);
        },
    },
};
</script>
