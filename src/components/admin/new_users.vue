<template>
  <div id="new_users">
    <div id="titre_users">LAST USERS</div>
    <ul>
      <li v-for="u in users" :key="u.id" @click="displayUser(u.id)">
        <strong>{{ u.name }}</strong>
        <figcaption>
          <img :src="`${publicPath}` + u.img" alt="" />
        </figcaption>
      </li>
    </ul>
    <div id="userModal" v-if="modalActivator">
      <span class="close" @click="modalActivator = false">&times;</span>
      <div id="modalProduct">
        <div class="modal-content">
          <figcaption id="bigPic">
            <img :src="`${publicPath}` + users[1].img" alt="" />
          </figcaption>
          <div class="thepics">
            <!--
            <figcaption class="small_pics">
              <img :src="`${publicPath}` + myProducts[4]" alt="" />
            </figcaption>
            <figcaption class="small_pics">
              <img :src="`${publicPath}` + myProducts[4]" alt="" />
            </figcaption>
            <figcaption class="small_pics">
              <img :src="`${publicPath}` + myProducts[4]" alt="" />
            </figcaption>-->
          </div>
        </div>
        <div class="description">
          <strong>{{ users[1].name }}</strong>
          <br />
          <p>Phone number : {{ users[1].tel }}</p>
          <p>E mail : {{ users[1].mail }}</p>
          <p>Adresse : {{ users[1].adress }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      modalActivator: true,
      publicPath: process.env.BASE_URL,
      users: [
        {
          id: 0,
          name: "Lionel richie",
          img: "./img/users/dami-adebayo-k6aQzmIbR1s-unsplash.jpg",
          tel: 1563513651,
          mail: "pamelaestpasla@pas.la",
          adress: "9 rue inconnue",
        },
        {
          id: 1,
          name: "Pamelapasla",
          img: "./img/users/ahmed-carter-tiWcNvpQF4E-unsplash.jpg",
          tel: 1563513651,
          mail: "pamelaestpasla@pas.la",
          adress: "9 rue inconnue",
        },
        {
          id: 2,
          name: "AL batard",
          img: "./img/users/dom-hill-nimElTcTNyY-unsplash.jpg",
          mail: "pamelaestpasla@pas.la",
          adress: "9 rue inconnue",
        },
        {
          id: 3,
          name: "Geul de rake",
          img: "./img/users/mark-adriane-V7IJzp_ElQc-unsplash.jpg",
          mail: "pamelaestpasla@pas.la",
          adress: "9 rue inconnue",
        },
      ],
    };
  },
  computed: {
    ...mapMutations(["connectToLinered"]),
    ...mapState({
      productsInChart: (state) => state.productsInChart,
    }),
  },
};
</script>

<style>
#titre_users {
  display: block;
  font-weight: bold;
  font-size: 1em;
  text-transform: uppercase !important;
  padding: 1em 0 0 1em;
}
#new_users {
  width: 550px;
  height: 450px;
  padding: 0px !important;
  border: 1px solid rgb(216, 216, 216);
  margin-right: 2em;
  border-radius: 0.5em;
}

#new_users strong {
  text-transform: uppercase !important;
}
#new_users ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
#new_users li {
  font-size: 0.7em;
  margin: 10px;
  width: 100px;
  height: 120px;
  padding: 0px !important;
}
#new_users li figcaption {
  width: 100px;
  height: 100px;
  border-radius: 0.25em;
  overflow: hidden;
}
#new_users li figcaption img {
  width: 100px;
  height: 100%;
  object-fit: cover;
}

#userModal {
  width: 1280px;
  position: absolute;
  height: 700px;
  background-color: white;
  border-radius: 0.25em;
  top: -20px;
  padding: 2em;
  border: 1px solid red;
}
</style>
