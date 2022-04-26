<template>
  <div>
      <h1>-----CRUD OPERATION----</h1>
<b-row>
<b-col md="6">
<b-card>
<b-form id="form">
      firstname<input type="text" id="demo" v-model="value1" placeholder="Enter your firstname" required>
      secondname<input type="text" id="demo1" v-model="value2" placeholder="Enter your secondname" required><br/><br/>
      <button @click="Add()" >Add</button>
      <button @click="Delete()">Delete</button>
      <button @click="update()">Update</button>
      </b-form>
<b-table striped hover :items="items" :fields="fields"></b-table>
</b-card>
</b-col>
</b-row>
     </div>
</template>
<script>
export default {
  name: "AbhI",
  data() {
    return {
      items: [{ firstname: " ", secondname: " " }],
      fields: ["firstname", "secondname"],
      value: " ",
    };
  },
  methods: {
    Add() {
      this.items.push({
        firstname: document.getElementById("demo").value,
        secondname: document.getElementById("demo1").value,
      });
    },
    Delete() {
      this.items.pop();
    },
    Update(){
        this.items.update();
    }
  },
};
</script>

<style>
</style>