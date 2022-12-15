<template>
  <div id="popular_products">
    <strong>LAST PRODUCTS PURCHASED</strong>

    <div v-if="productsInChart.length === 0">
      There is currently no products in chart at the moment
    </div>
    <ul>
      <li v-for="item in productsInChart" :key="item.index">
        <div class="details_products">{{ item.productName }}</div>
        <figcaption>
          <img :src="`${publicPath}` + item.picture" alt="" />
        </figcaption>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "popular_products",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  computed: {
    ...mapState({
      myProducts: (state) => state.myProducts,
      productsInChart: (state) => state.productsInChart,
    }),
  },
};
</script>

<style>
#popular_products strong {
  text-transform: uppercase;
}

#popular_products {
  width: -webkit-fill-available;
  height: auto;
  max-width:750px;
  border: 1px solid rgb(216, 216, 216);
  padding: 1em;
  border-radius: 0.5em;
  background-color:white;
  transition:0.5s;
}

#popular_products ul {
  display: flex;
  justify-content: flex-start;
  padding: 0;
}

#popular_products li {
  width: 150px;
  height: 170px;
  padding: 0;
  overflow: hidden;
  margin:0.25em;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 0.5em;
}

#popular_products li figcaption {
  width: 150px;
  height: 150px;
}

#popular_products li figcaption img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
