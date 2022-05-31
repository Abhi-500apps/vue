<template>
<div>
        <!-- <strong>Year:</strong><b-form-select v-model="StudentDetails.Year" :options="students" class='w-25' placeholder="Enter your Year" value-field="Year" text-field="Year" required></b-form-select> -->
     <h1 style="background-color:DodgerBlue;">Student Details</h1><br/><br/>
     <center>
    <b-form @submit="fun" class="w-25">
    <strong>Student:</strong><b-form-select v-model="StudentDetails.student_id"  :options="students"  placeholder="Student Data" value-field="id" text-field="Name" required></b-form-select><br /><br />
    <strong>Subject:</strong><b-form-select v-model="StudentDetails.subject" :options="options"  value-field="value" text-field="text" required></b-form-select><br><br>
    <b-container>
    <b-row>
        <b-col align="left"><strong>Date Picker:</strong></b-col>
    <b-form-input type="date" v-model="StudentDetails.date" required></b-form-input></b-row>
    <b-row>
     <b-col align="left"><strong>Marks:</strong></b-col>
     <b-form-input  v-model="StudentDetails.marks" placeholder="Enter the your marks" type="number" min=0 max=100 required></b-form-input>
     </b-row>
     <b-row>
    <b-col align="left"><strong>Remarks:</strong></b-col><b-form-input v-model="StudentDetails.remarks" type="text" placeholder="Text Area" required></b-form-input>
     </b-row>
      </b-container>
        <b-button type="submit" variant="success">Submit</b-button>
    <p id="StudentDetails"></p>
    </b-form>
     </center>
  </div>
</template>
<script>
import axios from "axios"
export default {
  name: "StudentForm",
  data() {
    return {
      options: [
        { value: 0, text: "Select Subject" },
        { value: 1, text: "English" },
        { value: 2, text: "Mathematics" },
        { value: 3, text: "Electronics" },
      ],
      StudentDetails:{
        student_id: "",
        date: "DD-MM-YYYY",
        subject: "",
        marks: "",
        remarks: "",
        // Year: "",
      },
      students: [],
    };
  },
  methods: {
    fun() {
        document.getElementById("StudentDetails").innerHTML = JSON.stringify(
        this.StudentDetails
      );
    },
    async student() {
      let response = await axios.get("https://api.sampleapis.com/baseball/battingAvgsSingleSeason");
      this.students = await response.data;
      // return this.students
    },
  },
  async created() {
    await this.student();
  },
};
</script>