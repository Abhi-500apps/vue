<template>
  <div>
    <h1>This is Assignment-1Q</h1>
    <center>
    <table class="table table-striped table-bordered w-50">
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr v-for="table in table" :key="table.id">
          <td>{{ table.name }}</td>
          <td>{{ table.description }}</td>
        </tr>
    </table>
    </center>
  </div>
</template>
<script>
export default {
  name: "TablE",
  data() {
    return {
      table :[{name :" Agile CRM", description : "A company of excellence"},
                {name:"mantra technologies", description:"500apps" },
                {name:"500apps Python",description:"Backend built using python"},
                {name:"500apps infinity", description:"Builtusing vue JS"}],
}
}
}       
</script>
<style scoped>
</style>



