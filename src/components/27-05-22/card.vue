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
        id="Title"
        >Add Details</b-button
      ><br /><br />
    </div>

    <b-modal id="modal-1" title="Add_details" hide-footer>
      <b-form @submit="on_submit">
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
          <!-- <image-src="/home/agile/Downloads/Female.png"></image> --> </b-form-select
        ><br />
        Date_of_Birth:<b-form-input
          type="date"
          v-model="user.date_of_birth"
          required
        ></b-form-input>
        <b-button type="submit" id="save">
          <b-icon
            icon="check-square"
            v-b-tooltip.hover.right
            text="save"
            scale="2"
            variant="success"
            shift-h="-2"
            shift-v="-1"
          ></b-icon>
        </b-button>
      </b-form>
    </b-modal>
    <card1 :result="result" @delete="Delete(item)">
      <b-img
        v-if="user.gender == 'male'"
        src="https://www.fillmurray.com/640/360"
        height="60px;"
        width="60px;"
      ></b-img>
      <!-- <b-img v-else src="https://www.fillmurray.com/640/360" height= 60px; width=60px/></b-img> -->
    </card1>
  </div>
</template>
<script>
import card1 from "./card1.vue";
import axios from "axios";
//import moment from "moment";

export default {
  name: "UserData",
  components: {
    card1,
  },
  data() {
    return {
      user: {
        name: "",
        age: "",
        gender: "",
        date_of_birth: " ",
      },
      options: [
        { value: "options", text: " options", disabled: true },
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" },
      ],
      result: [],
      show: false,
      editedIndex: -1,
      src: "",
      src1: "",
    };
  },
  methods: {
    on_submit() {
      console.log(this.user);
      this.result.push(this.user);
      this.close();
    },
    close() {
      this.show = false;
    },
    edit(item) {
      this.Show = true;
      this.user = this.result.indexOf(item);
      this.user = Object.assign({}, item);
    },
    Delete(item) {
      this.item = "";
      this.$bvModal
        .msgBoxConfirm("Are you sure to delete details.", {
          title: "Delete Details",
          size: "sm",
          buttonSize: "sm",
          okVariant: "primary",
          okTitle: "YES",
          cancelVariant: "danger",
          cancelTitle: "NO",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value) {
            const index = this.result.indexOf(item);
            this.result.splice(index, 1);
            axios.delete(this.endpoint + "/" + value.id);
          } else return;
        });
    },
    // select() {
    //   if(this.options.value==this.male)
    //    <img-src="https://www.fillmurray.com/640/360";></img->

    //     else if(this.options.value==this.female)

    //     src="https://www.pinterest.com/pin/lorem-ipsum-acedia-photo--595601119470032379/";
    //   }
  },
};
</script>
<style>
#bcard {
  position: relative;
  left: 1050px;
}
#card {
  right: -1450px;
  height: 50px;
}
#save {
  position: relative;
  bottom: 340px;
  width: 40px;
  height: 40px;
  left: 400px;
}
</style>



