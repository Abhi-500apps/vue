<template>
  <div>
    <h1>CRUD OPERATIONS</h1>
    <b-form id="form">
      <b-form-input id="s1" v-model= "value1"  placeholder="Enter your first name" required ></b-form-input>
      <b-form-input id="s2" v-model= "value2" placeholder="Enter your last name" required ></b-form-input>
      <button @click="fun1()" >Add</button>
      <button @click="fun2()" >Delete</button>
      <button @click="fun3()">Update</button>
      <b-table striped hover :items="items" :fields="fields"></b-table>
     
    </b-form>
  </div>
</template>
<script>
export default {
    name:"AbhI",
    data(){
        return{

            fields:["FirstName","lastName"],
            items: [{FirstName:" ",SecondName:" "}],
            value:" ",

        }
    },
    methods:{
        fun1(){
        this.items.push({
          FirstName:document.getElementById("s1").value1,
          lastName:document.getElementById("s2").value2,

        
        });
        },
        fun2() {
          this.items.pop();

        },
        fun3(){
          
        }
                   
        },
    
}

</script>
