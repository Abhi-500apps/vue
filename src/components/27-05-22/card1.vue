<template>
  <div>
    <div v-if="result.length">
      <b-card
        id="data"
        class="w-25"
        header="Saved Details"
        header-bg-variant="info"
        header-text-variant="light"
        v-for="(data, index) in result"
        :key="index"
      >
        <strong>Name:{{ data.name }}</strong>
        <br />
        <strong>Age:{{ data.age }}</strong>
        <br />
        <strong>Gender:{{ data.gender }}</strong>
        <br />

        <strong>Date_of_birth:{{ data.date_of_birth }}</strong>
        <br />

        <b-button
          v-b-tooltip.hover.left
          title="Edit"
          @click="edit"
          id="edit"
          variant="info"
          ><b-icon icon="server" scale="1.5"></b-icon
        ></b-button>
        <b-button
          v-b-tooltip.hover.right
          title="Delete"
          id="delete"
          variant="info"
          @click="Delete"
          ><b-icon icon="trash-fill" scale="1.5"></b-icon
        ></b-button>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "Data_Card",

  props: {
    result: {
      type: Array,
    },
  },

  data() {
    return {};
  },
  methods: {
    Delete() {
      this.$emit("delete");
    },
    edit() {
      this.$emit("edit");
    },
  },
};
</script>
<style>
#data {
  position: relative;
  left: 25px;
}
#edit {
  position: relative;
  top: -160.5px;
  left: 140px;
}
#delete {
  position: relative;
  top: -160.5px;
  left: 140px;
}
</style>



