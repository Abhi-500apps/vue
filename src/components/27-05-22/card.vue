<template>
  <div>
    <center>
      <b-navbar
        type="success"
        variant="success"
        style="width: 95rem; heigth: 75px"
        class="navbar navbar-expand-lg fixed-top row"
        ><b-navbar-nav>
          <b-iconstack font-scale="3" animation="cylon">
            <b-icon
              stacked
              icon="house-fill"
              animation="throb"
              variant="purple"
              scale="0.75"
            ></b-icon>
          </b-iconstack>
          <h1 style="color: white"><b> Vue</b></h1>
          &nbsp;

          <b-card id="bcard">Login Name: Abhishek_Kudupudi</b-card>

          <!-- <b-container align="left">
            <b-card bg-variant="black" text-variant="primary" id="card"
              >Login Name: Abhishek_Kudupudi</b-card
            >
          </b-container> -->
        </b-navbar-nav>
        </b-navbar>
    </center>
    <br /><br />
    <div class="text-left">
      <b-button
        v-b-modal.modal-1
        variant="success"
        stacked
        icon="check"
        id="button1"
        >Add Details</b-button
      ><br /><br />
    </div>

    <b-modal id="modal-1" title="Add_details" hide-footer>
      <b-iconstack font-scale="2">
        <b-icon stacked icon="square"></b-icon>
        <b-icon stacked icon="check"></b-icon>
      </b-iconstack>
      <!-- <b-tab v-for="i in card" :key="'card-' + i" :title="'card ' + i">
          card contents {{ i }} -->
      <b-form @click="On_Submit()">
        Name:<b-form-input
          type="text"
          placeholder="Name"
          v-model="user.name"
          required
        ></b-form-input>
        Age:<b-form-input
          type="number"
          placeholder="Age"
          v-model="user.age"
          required
        ></b-form-input
        ><br />
        Gender:<b-form-select
          text="Select Gender"
          v-model="user.gender"
          :options="options"
        >
        </b-form-select
        ><br />
        Date of Birth:<b-form-input
          type="date"
          v-model="user.date_of_birth"
          required
        ></b-form-input>
        <b-button type="Submit">Submit</b-button>
        <b-button type="Reset" variant="danger"> Reset</b-button>&nbsp;
      </b-form>
    </b-modal>
    <b-card class="w-25"><p id="user"></p></b-card>
  </div>
</template>
<script>
export default {
  name: "User_Data",
  data() {
    return {
      user: {
        name: " ",
        age: " ",
        gender: " ",
      },
      card: [],
      cardCounter: [0],
      options: [
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
      ],
      // cardData:[{
      //     name: " ",
      //     age: " ",
      //     gender: " ",
      //      date_of_brith:"" ,
      //      image:" "
      //   }],
    };
  },

  methods: {
    On_Submit() {
      setTimeout(() => {
        // using setTimeout
        document.getElementById("user").innerHTML = JSON.stringify(this.user);
      }, 10000);
    },

    // Add_Details(x) {
    //   for (let i = 0; i < this.card.length; i++) {
    //     if (this.card[i] === x) {
    //       this.card.splice(i, 1);
    //     }
    //   }
    // },
    // newTab() {
    //   this.card.push(this.cardCounter++);
    // },
  },
};
</script>
<style>
#bcard {
  position: relative;
  left: 1050px;
}
</style>


