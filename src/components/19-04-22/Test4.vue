<template>
    <div>
        <h1>This is v-table</h1>
    
      <table align="center">
      <thead>
        <tr>
          <th>Name</th>

          <th>phone</th>

          <th>Email</th>

          <th>city</th>

          
        </tr>
      </thead>

      <tbody>
        <tr v-for="x in table" :key="x.id">
          <td>{{ x.name }}</td>

          <td>{{ x.phone }}</td>

          <td>{{x.Email }}</td>
          
          <td>{{x.city}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
    name:"TablE1",
  data() {
    return {
      table: [
        { name: "Abhishek", phone: "9515656088" ,Email:"   abhishek1313@500apps.com" ,city:"kakinda"},

        { name: "Bhanu prakesh", phone: "9346666651" ,Email:"bhanu.666@500apps.com",city:"razole"},

        { name: "Lokesh", phone: "8074742017" ,Email:"lokeshmuddada@500apps.com",city:"Hyd"},

        { name: "sai lohit", phone: "7386926454" ,Email:"sailohitkumar@500apps.com",city:"sivakodu"},
      ],
    };
  },
};
</script>
<style scoped>

</style>



