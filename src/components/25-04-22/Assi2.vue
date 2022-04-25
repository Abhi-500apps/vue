<template>
  <div>
    <h1>Assignment-2Q></h1>
    <h1 align="center">Data</h1>
    <ul align="center">
      <li v-for="item in item" :key="item.print">
        {{ item.print }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LuckY",
  data() {
    return {
      item: [
        { print: "name:Agile CRM" },
        { print: "description: A company of excellence" },
        { print: "Years of expeience: 12" },
        { print: "location: Hyderabad" },
      ],
    };
  },
};
</script>


