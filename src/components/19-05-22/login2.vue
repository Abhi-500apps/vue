<template>
  <div>
    <center>
      <b-card style="width: 90rem; heigth: 600px" class="w-25">
        <b-navbar
          type="success"
          variant="success"
          style="width: 20rem; heigth: 600px"
          class="w-100"
          ><b-navbar-nav>
            <b-nav-item-dropdown
              text="Home"
              right
              class="button"
              v-b-toggle.sidebar-1
            >
              <b-dropdown-item @click="Retrieve()">Retrive</b-dropdown-item>
              <b-dropdown-item @click="clearAll()">Clear All</b-dropdown-item>
              <b-dropdown-item @click="save()">Save</b-dropdown-item>
              <b-dropdown-item @click="logout()">logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
        <b-form >
        
          <b-form-textarea
            :maxlength="25"
            v-model="form.text"
            rows="5"
            placeholder="Enter your text details here"
            required
          ></b-form-textarea>
          <b-button type="submit" @click="fun1()" variant="success" id="#mybutton" ><b>+</b></b-button>&nbsp;
          <b-card>{{result}}</b-card>
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
      this.result = localStorage.removeItem("text");
      return this.result
    },
    Retrieve() {
      this.result = localStorage.getItem("text");
      return this.result;
    },
    logout() {
      this.$router.push("/login1");
    },
  },
};
</script>
<style scoped>
#button {
  position: fixed;
  right: 10px;
}
#button1 {
  position: fixed;
  left: 100px;
}
#mybutton {
  position: fixed;
  bottom: -4px;
  right: 10px;
}
</style>

