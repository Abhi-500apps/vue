<template>
    <div>
        <b-table :items="table"></b-table>
    </div>
</template>

<script>
export default {
    name:"TablE",
  data() {
    return {
      table: [
        { name: "agile CRM", Index: "0" },

        { name: "mantra technologies", Index: "1" },

        { name: "500apps python", Index: "2" },

        { name: "500apps infinity", Index: "3" },
      ],
    };
  },
};
</script>