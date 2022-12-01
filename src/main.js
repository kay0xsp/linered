import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    myProducts: [],
    productsInChart: [],
    userDisplay: [],
    isConnected: false,
  },
  mutations: {
    connectToLinered(state, payload) {
      state.isConnected = payload;
    },
  },
});

new Vue({
  router,
  vuetify,
  Vuex,
  store,
  render: (h) => h(App),
}).$mount("#app");
