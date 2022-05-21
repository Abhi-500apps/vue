<template>
  <div>
  
    <center>
     
      <b-navbar
        type="success"
        variant="success"
        style="width: 20rem; heigth: 600px"
        class="w-25"
       
      >
        <b-navbar-nav>
          <b-nav-item-dropdown text="Home" right>
            <b-dropdown-item href="#">Show All</b-dropdown-item>
            <b-dropdown-item href="#">Clear All</b-dropdown-item>
            <b-dropdown-item href="#">logout</b-dropdown-item>
             </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </center>
    <center>
      <b-card style="width: 90rem; heigth: 600px" class="w-25" id="card"
        ><br /><br /><br />
        <b-card-text> New tabs add </b-card-text><br><br><br/><br><br/><br/><br/><br><br><br><br>
<router-link to=/login2>
<b-button type="submit" @click="fun1()" variant="success" id="#mybutton" ><b>+</b></b-button>&nbsp;
</router-link>
      </b-card>
    </center>
  </div>
</template>
<script>
export default {
  name: "Grocrey-Data",
  data() {
    return {
      link: "/login1",
    };
  },
  methods: {
    fun1() {},
  },
};
</script>

<style>
#mybutton {
  position: fixed;
  bottom: -4px;
  right: 10px;
}
</style>