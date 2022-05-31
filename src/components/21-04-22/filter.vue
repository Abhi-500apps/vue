<template>
  <div>
    <h1>Example filter</h1>
  <input type="text" {{res}} placeholder="enter the text" />
    <button type="submit" @click="func()">click</button>
  </div>
</template>
<script>
export default {
  name: "NinE",
  data() {
    return {
      array: [ "spray","limit", "elite", "exuberant", "destruction", "present","spray"],
      array1: [1, 2, 3, 51, 21, 5, 1, 8, 1, 5, 9,12],
      arr: [{ name: "saa" }, { name: "se12" }, { name: "qwe12" }],
      res: "",
    };
  },
  methods: {
    func() {
      // const value = this.array1.filter((shek) => {
      //   console.log(typeof Number(this.res));
      //   return shek.name.includes(this.res);
      // });
      // console.log(value);
      const value=this.array.filter((num)=>{
        // return num != "spray"
        return num.includes(this.res)
      });
      console.log(value)
    },
  },
};
</script>
