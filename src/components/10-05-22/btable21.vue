<template>
  <div>
    <b-form id="form">
      Enter product name:<b-form-input
        id="name"
        class="name"
        placeholder="Enter your product name"
        small_class='w-50'
      ></b-form-input>
      Enter product price:<b-form-input
        id="price"
        class="prices"
        placeholder="Enter your product price:"
        small_class='w-50'
      ></b-form-input>
      Enter product category:<b-form-input
        id="category"
        class="categories"
        placeholder="Enter your product category"
        small_class='w-50'
      ></b-form-input>
      <b-button variant="success" @click="fun()">clickme</b-button><br /><br />
    </b-form>
    <b-table striped hover v-model="value" :items="items" :fields="fields" small class='w-75'></b-table>
  </div>
</template>

<script>
export default {
  name: "AbhI",
  data() {
    return {
      fields: [
        {
          product_name: "Nokia",
          product_price: "23000",
          product_category: "mobile",
        },
      ],
      items: [],
    };
  },
  methods: {
    clickme() {
      this.items.push({
        productname: document.getElementById("name").value,
        productprice: document.getElementById("price").value,
        productcategory: document.getElementById("category").value,
      });
    },
  },
};
</script>




