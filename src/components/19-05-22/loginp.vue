<template>
  <div>
      <nav><h1 style="background-color: DodgerBlue"><b>Grocery</b></h1></nav>
    <br /><br />
     <center>
      <b-navbar
        type="success"
        variant="success"
        style="width: 20rem; heigth: 600px"
        class="w-25"><b-navbar-nav>
          <b-nav-item-dropdown text="Home" right>
            <b-dropdown-item href="#">Show All</b-dropdown-item>
            <b-dropdown-item href="#">Clear All</b-dropdown-item>
            <b-dropdown-item href="#">logout</b-dropdown-item>

            
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </center>

    <center>
      <b-card style="width: 30rem; heigth: 600px" class="w-25"><br /><br /><br />
             
         <b>Email:</b><b-form-input type="email"  v-model="form.Email" id="Email"  placeholder= "Enter your Email" required class="w-75"></b-form-input><br><br><br /><br />
        <b>Password:</b><b-form-input type="text" v-model="form.password" id="password" placeholder="Password"  required class="w-75"></b-form-input><br /><br /><br />
        <router-link to='/login1'>
        <b-button type="sumbit" @click="fun()" valriant = "success"  >Login</b-button><br /><br /> 
        </router-link>
       
      </b-card>
      </center>
  </div>
</template>

<script>
export default {
  name: "GrocreyData",
  data() {
    return {
      form:{
      Email:' ',
      password:' '
      }
    
    }
  },
  methods: {
    fun() {
      alert("Are you sure you want to save your credentials")
    let username = document.getElementById("Email");
      let password = document.getElementById("password");
      let date = new Date();
      var expire = new Date();
      expire.setTime(date.getTime() + 24 * 60 * 60 * 1000);
      document.cookie = "username=" + username.value + ";path=/" + ";expires" + expire.toUTCString();
      document.cookie = "password=" + encodeURI(password.value) + ";path=/" + ";expires" + expire.toUTCString();
      localStorage.setItem("username", this.form.Email);
      localStorage.setItem("pasword", this.form.password);
      sessionStorage.setItem("userName", this.form.Email);
      sessionStorage.setItem("password", this.form.password);
    },
  
  },
};
</script>


<style>

</style>