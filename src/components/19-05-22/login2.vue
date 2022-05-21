<template>
  <div>
    <center>
      <b-card style="width: 90rem; heigth: 600px" class="w-25">  
        <b-navbar
        type="success"
        variant="success"
        style="width: 20rem; heigth: 600px"
        class="w-100"><b-navbar-nav>
          <b-nav-item-dropdown text="Home" right class="button" v-b-toggle.sidebar-1>
           
            <b-dropdown-item >Show All</b-dropdown-item>
            <b-dropdown-item >Clear All</b-dropdown-item> 
            <b-dropdown-item >Save</b-dropdown-item>
            <b-dropdown-item >logout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    <b-form @submit="save" >
      <div>
         
        <b-button class="button1" type="submit">Save</b-button>&nbsp;
       
        <b-sidebar id="sidebar-1" title="Home" shadow>
          <div class="px-3 py-2">
            <br /><br /><br /><br />
            <b-button @click="retrieve()">Reteieve</b-button>&nbsp; 
            <b-button @click="clearAll()">ClearAll</b-button><br /><br />
            <button>
              <router-link to="/login3">logout</router-link></button><br /> 
            <br />
          </div>
        </b-sidebar> 
        
      </div><br />
      <b-form-textarea
        :maxlength="25"
        v-model="form.text"
        rows="5"
        placeholder="Enter your text details here"
        required
      ></b-form-textarea>
    </b-form>
    </b-card>
    </center>
  </div>
</template>
<script>
export default {
  name: "TextArea",
  data() {
    return {
      form: {
        text: "",
      },
      result: "",
    };
  },
  methods: {
    save() {
      alert("do you want to save");
      localStorage.setItem("text", this.form.text);
    },
    clearAll() {
      console.log("hello");
      localStorage.clear();
    },
    Retrieve() {
      var x = localStorage.getItem("text");
      this.result = x;
      console.log(x);
    },
  },
};
</script>
<style scoped>
#button {
  position: fixed; // using  css
  right: 10px;
}
#button1 {
  position: fixed;
  left:100px;
}
</style>
