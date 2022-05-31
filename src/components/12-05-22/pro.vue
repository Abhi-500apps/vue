<template>
  <div>
    <b>using promise</b>
    <input type="text" v-model="a">&nbsp;
      <input type="text" v-model="b"><br>
    <button @click="fun()">click me</button>
  </div>
</template>
<script>
export default {
  name: "AbhI",
  data() {
    return {
      a: " ",
      b: " ",
    };
  },
  methods: {
    fun() {
        //let a="abhi",b="abhi"
      var promise = new Promise( (resolve, reject) =>{
        if (this.a.length == this.b.length) {
          resolve();
        } else {
          reject();
        }
      });
      promise
        .then( ()=> {
          console.log("True");
        })
        .catch( ()=> {
          console.log("Flase");
        });
    },
  },
};
</script>


