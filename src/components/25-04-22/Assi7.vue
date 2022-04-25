// Find the index of id: 88 using inbuilt javascript method
<template>
  <div>
    <h1>Assignment-7Q</h1>
    <button @click="fun()">Try it</button>
    {{ "Index of Id is:" + " " + find }}
  </div>
</template>

<script>
export default {
  name: "NoN",
  data() {
    return {
      user: [
        { id: 20, name: "Captain Piett" },
        { id: 24, name: "General Veers" },
        { id: 56, name: "Admiral Ozzel" },
        { id: 88, name: "Commander Jerjerrod" },
      ],
      find: " ",
    };
  },
  methods: {
    fun() {
      this.find = this.user.findIndex((row) => row.id == 88);
      return this.find;
    }
  }
}
</script>

<style>
</style>