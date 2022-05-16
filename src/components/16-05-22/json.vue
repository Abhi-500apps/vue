<template>
<div>
    <strong>Student:</strong><b-form-select v-model="StudentDetails.studentid"  :options="students" class="w-25" placeholder="Student Data" value-field="id" text-field="Name"></b-form-select>&nbsp;
    <strong>Subject:</strong><b-form-select v-model="StudentDetails.subject" :options="options"  class="w-25"></b-form-select><br><br>
    <center>
    <b-card class="w-25">
    <b-form >
    Date Picker:<b-form-datepicker v-model="StudentDetails.date" required></b-form-datepicker>
    Marks:<b-form-input  v-model="StudentDetails.marks" type="number" min=0 max=100 required></b-form-input>
    Remarks:<b-form-input v-model="StudentDetails.remarks" type="text" placeholder="Text Area" required></b-form-input>
    </b-form><br>
    <b-button type="submit" variant="success" @click="fun()">Submit</b-button>
    </b-card>
    </center>
    <p id="demo"></p>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name:'AbhI',
    data(){
        return{
          options: [
          { value: null, text: 'Please Select an Subject' },
          { value: 1, text: 'English' },
          { value: 2, text: 'Mathematics' },
          { value: 3, text: 'Electronics' },
        ],
            StudentDetails:{
                 studentid : '' ,
                 date : 'DD-MM-',
                 subject : '', 
                 marks : '',
                 remarks : ''
            },
            students:[]
            
          
        }
        
    },
    methods:{
        fun() {
        document.getElementById("demo").innerHTML=JSON.stringify(this.StudentDetails);
        
    },
    async fun1() {
    let response =await axios.get("https://api.sampleapis.com/baseball/battingAvgsSingleSeason");
    this.students= await response.data;
    },
    
},
 async created(){
    await this.fun1();

   },


  
};
</script>



