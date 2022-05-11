<template>
  <div>
    <h4>map,filter,foreach,find</h4>
    <button @click="fun()" >click</button>
    <p items="age">{{age}}</p>
  </div>
</template>

<script>
export default {
  name: "AbhiShek",
  data() {
    return {
      students: [
        { name: "lokesh", age: 22 },
        { name: "abhishek", age: 22 },
        { name: "Ravi", age: 20 },
        { name: "Bhanu", age: 25 },
        { name: "mantra", age: 21 },
      ],
     age: " ",

    };
  },
  methods:{
    fun(){
      this.age = this.students.map(
        (student)=> student.age==21
        );
        return this.age;
    }
      
  }
};
</script>

<style>
</style>