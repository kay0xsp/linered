<template>
  <div id="header">
    <header>
      <main>
        <h1>
          <p>LINE<span>RED</span></p>
        </h1>
        <div id="navbox">
          <nav>
            <ul>
              <li>
                <router-link to="/">
                  <span class=""><i class="fas fa-search"></i> </span>
                </router-link>
              </li>
              <li>
                <router-link to="/bucket">
                  <span class=""><i class="fas fa-shopping-bag"></i> </span>
                  <v-badge
                    color="red"
                    class="product_badge"
                    v-if="productsInChart.length != 0"
                    :content="productsInChart.length"
                  >
                  </v-badge>
                </router-link>
              </li>
              <li>
                <router-link to="/dashboard">
                  <span class=""><i class="fas fa-cog"></i> </span>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navbar",
  computed: {
    ...mapState({
      productsInChart: (state) => state.productsInChart,
    }),
  },
};
</script>

<style>
.product_badge {
  top: -15px !important;
}
#header {
  width: 100%;
  height: 100px;

  margin-bottom: 2em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
  position: fixed;
  z-index: 1;
  background-color: white;
}
header {
  width: 1280px;
  height: 100px;
  margin: 0 auto !important;
}

#admin {
  z-index: 200;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#admin ul {
  padding-left: 0;
}
#admin ul li {
  padding: 0 !important;
}

#admin ul li a {
  color: black;
}

#admin ul li span:hover {
  color: red;
}

#admin span {
  font-size: 2em;
}

main {
  width: 1280px;
  margin: 0 auto;
  height: 75px;
  display: flex !important;
  justify-content: space-between;
}

#navbox {
  z-index: 200;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

nav {
  margin-right: 1em;
}

ul {
  display: flex;
  justify-content: center;
  padding-left: 0;
}
ul li {
  transition: 1s;
  padding: 1em;
}

li span {
  transition: 1s;
}

li span i {
  color: rgb(78, 78, 78);
  font-size: 1.2em;
  transition: 1s;
}

li span i:hover {
  color: red;
}

h1 {
  z-index: 100;

  margin: 0;
  height: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

h1 span {
  color: red;
}
</style>
