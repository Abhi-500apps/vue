<template>
  <div>
      <b-form-select v-model="value" :options="countries" class="w-75"></b-form-select><br /><br />
      <button @click="fun()">click</button>
    <b-table striped hover :items="res" fields="fields"></b-table>
    
    <b-link href=" ">{{ value.web_pages }}</b-link>
  </div>
</template>
<script>
import axios from "axios";
const { getNames } = require("country-list");
export default {
  name: "AbhI",
  data() {
    return {
      res: " ",
      value: " ",
      countries:[ ],
      fields: ["university_name", "domains", "website_url", "state_province"],
    };
  },
  methods: {
    async fun() {
      let response = await axios.get(
        "http://universities.hipolabs.com/search?country=" + this.value
      );
      var responseText = await response.data;
      this.res = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
  },
  mounted() {
    var countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
  },
};
</script>


