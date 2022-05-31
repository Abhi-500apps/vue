<template>
  <div>
      <center>
      <b-card class="w-25">
        <h1 style="color:green">create web page</h1>  
        <b>Password:</b><input type = "password" id = "pswd1"> <br><br>  
        <b>Re-Password:</b><input type = "password" id = "pswd2"> <br><br>  
        <button type = "submit" @click="match()">Submit</button>  
        
      </b-card>
      </center>
      </div>

</template>
<script>
export default {
  name: "Password_Check",
  data() {
    return {

    }
  },
  methods: {
    match( ) {
      var pw1 = document.getElementById("pswd1").value;
      var pw2 = document.getElementById("pswd2").value;
      if (pw1 == pw2) {
        alert("Password created successfully");
      } else{
        alert("Passwords did not match");
      }
    },
  },
};
</script>




  
