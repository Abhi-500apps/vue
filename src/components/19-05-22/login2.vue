<template>
  <div>
    <b-form @submit="save">
      <div>
        <b-button class="button1" type="submit">save</b-button><br />
        <b-button class="button" v-b-toggle.sidebar-1>home</b-button>
        <b-sidebar id="sidebar-1" title="Menu" shadow>
          <div class="px-3 py-2">
            <br /><br /><br /><br />
            <b-button @click="retrieve()">Reteieve</b-button>&nbsp;
            <b-button @click="clearAll()">ClearAll</b-button><br /><br />
            <button>
              <router-link to="/loginp">logout</router-link></button><br />
            <br />
          </div>
        </b-sidebar>
      </div>
      <br />
      <b-form-textarea
        :maxlength="25"
        v-model="form.text"
        rows="5"
        placeholder="enter your text here"
        required
      ></b-form-textarea>
    </b-form>
  </div>
</template>
<script>
export default {
  name: "textArea",
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
    retrieve() {
      var x = localStorage.getItem("text");
      this.result = x;
      console.log(x);
    },
  },
};
</script>
<style scoped>
.button {
  position: absolute;
  top: 0;
  left: 0;
}
.button1 {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
