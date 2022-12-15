<template>
  <div id="new_users">
    <div id="titre_users">LAST USERS</div>
    <ul>
      <li v-for="user in userDisplay" :key="user.id" @click="displayUser(user.id, user.name, user.tel, user.mail, user.img)">
        <strong>{{ user.name }}</strong>
        <figcaption>
          <img :src="`${publicPath}` + user.img" alt="" />
        </figcaption>
      </li>
    </ul>
    <div id="userModal" v-if="modalActivator">
      <span class="close" @click="modalActivator = false">&times;</span>
      <div id="modalUser">
        <div class="modal-content">
          <figcaption class="bigPic">
            <img :src="(`${publicPath}` + userDisplay[4])" alt="" />
          </figcaption>
          <div class="thepics">
        
          </div>
        </div>
        <div class="description">
          <strong>{{ userDisplay[1] }}</strong>
          <br />
          <p>Phone number : {{ userDisplay[2]}}</p>
          <p>E mail : {{ userDisplay[3] }}</p>
          <p>Adresse :</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import users from '../../json/users.json';
export default {
  data() {
    return {
      modalActivator: false,
      publicPath: process.env.BASE_URL,
      userDisplay: users
    };
  },
  computed: {
    ...mapMutations(["connectToLinered"]),
    ...mapState({
      productsInChart: (state) => state.productsInChart,
      userDisplay: (state) => state.userDisplay,
    }),
  },
  methods : {
    displayUser(id, name, tel, mail, image) {
      this.userDisplay.splice("");
      const index = id;
      const username = name;
      const phone = tel;
      const email = mail;
      const picture = image;

      this.userDisplay.push(
        index,
        username,
        phone,
        email,
        picture
      );
      console.log(this.userDisplay);
      this.modalActivator = true;
    }
  }
};
</script>

<style>
#titre_users {
  display: block;
  font-weight: bold;
  font-size: 1em;
  border-bottom:1px solid rgb(223, 223, 223);
  text-transform: uppercase !important;
  padding: 1em 0 0.5em 1em;
}
#new_users {
  width: 800px;
  height: auto;
  min-height:450px;
  padding: 0px !important;
  border: 1px solid rgb(216, 216, 216);
  margin-right: 2em;
  border-radius: 0.5em;
  background-color:white;
  transition:0.5s;
}

#new_users li strong {
  text-transform: uppercase !important;
  display:flex;
  width:123px;
  height:35px;
  justify-content: center;
  color:white;
  background-color: black;
  position:absolute;
  margin-top:133px;
  text-align: center;
  border-bottom-left-radius:0.25em;
  border-bottom-right-radius:0.25em;
  flex-direction: column;
}

#new_users ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding:0;
}

#new_users li {
  font-size: 0.7em;
  margin: 10px;
  width: 125px;
  height: 170px;
  padding: 0px !important;
  vertical-align: middle;
  border-radius:0.25em;
  border:1px solid transparent;
  cursor: pointer;
}

#new_users li:hover{
  border:1px solid red;
}

#new_users li figcaption {
  width: 125px;
  height: 167px;
  border-radius: 0.25em;
  overflow: hidden;
}

#new_users li figcaption img {
  width: 123px;
  height: 100%;
  object-fit: cover;
}

#userModal {
  width: 1280px;
  position: absolute;
  height: 700px;
  background-color: white;
  border-radius: 0.25em;
  top: 30px;
  padding: 2em;
  border: 1px solid red;
}

#userModal .bigPic{
  width:550px;
  height:550px;
  overflow: hidden;
  border-radius:0.5em;
}

#modalUser{
  display: flex;
}

#modalUser .description{
  margin-left:50px;
}

.description strong{
  font-size:2em;
  padding-bottom:1em;
}

.bigPic img{
  width:100%;
  object-fit: contain;
}

</style>
