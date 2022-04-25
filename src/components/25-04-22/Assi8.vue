<template>
  <div>
    <h1>Assignment-8Q</h1>
    <button @click="func()">click Me</button><br/>
    {{ abc }}
  </div>
</template>
<script>
export default {
  name: "LuckY",
  data() {
    return {
      officers: [
        { id: 20, name: "Captain Piett" },
        { id: 24, name: "General Veers" },
        { id: 56, name: "Admiral Ozzel" },
        { id: 88, name: "Commander Jerjerrod" },
      ],
      abc: " ",
    };
  },
  methods: {
    func() {
      this.abc = this.officers.filter((row) => row.name == "General Veers");
      return this.abc;
    }
  }
}
</script>

<style>
</style>