<template>
  <div>
      <b-form name="form" @submit="fun()">
        Name:<b-form-input type="text" name="fname" placeholder="Enter your name"   required></b-form-input><br><br>
        Email:<b-form-input type="email" name= "femail"  placeholder= "Enter your Email"  required></b-form-input><br><br>
        phone:<b-form-input type="number" name="phone"  placeholder=" Enter your phone" required></b-form-input><br><br>
        Age:<b-form-input type= "number" name="age" placeholder="Enter you Age"  required></b-form-input><br>
        <b-button type="sumbit" value="Login">Click</b-button> 
      </b-form>      
  </div>
</template>
<script> 
export default{
    name:'FoO',
    data(){
        return{

        }
    },
    methods:{
        fun(){
            document.write("Name:"+document.form.fname.value+"<br> "+"Email:"+
            document.form.femail.value+"<br>"+"phone:"+document.form.phone.value+"<br>"+"Age:"+document.form.age.value);
        },

    },
};
</script>
