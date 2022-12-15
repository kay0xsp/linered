<template>
  <div id="bucket">
    <div id="bucket_header">
      <h2>ARTICLES</h2>
    </div>

    <div id="articles">
      <div class="errorMessageBucket" v-if="productsInChart.length === 0">
        <div class="no_product_inbucket">
          <figcaption>
            <img :src="`${publicPath}` + backgroundimage" alt="" />
          </figcaption>
          <div class="displayError">No products in chart</div>
        </div>
      </div>
      <ul>
        <li v-for="(item, index) in productsInChart" :key="item.index">
          <article>
            <figcaption>
              <img :src="`${publicPath}` + item.picture" alt="" />
            </figcaption>
            <div>
              <strong>{{ item.productName }} </strong>
              <em>REF : {{ item.reference }} {{ item.id }}</em>
            </div>
          </article>
          <aside>
            <p>Price: {{ item.productPrice }}</p>
            <p>
              <b>Total item Price:</b>
              {{ item.productPrice }} $
            </p>
            <p><b>Quantity:</b>{{ item.itemQuantity }}</p>
            <p>{{ item.total }}</p>
            <p class="bucket_buttons">
              <button @click="removeItemQuantity(index)" id="minusItem">
                <i class="fa fa-circle-minus" aria-hidden="true"></i>
              </button>
              <button @click="addItemQuantity(index)" id="addItem">
                <i class="fa fa-circle-plus" aria-hidden="true"></i>
              </button>
              <button @click="removeProduct(index)" id="removeItem">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>
            </p>
          </aside>
        </li>
      </ul>
      <div id="summary">
        <h3>Summary</h3>
        <div>
          <p id="total">
            <b>TOTAL ESTIMATED:</b>
            <em>{{ totalPrice }} $</em>
          </p>
        </div>
        <span id="checkout" @click="totalCheckout()">CHECKOUT</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "bucket",

  data() {
    return {
      publicPath: process.env.BASE_URL,
      total: 0,
      backgroundimage: "img/bucket/sebastian-svenson-LpbyDENbQQg-unsplash.jpg",
    };
  },
  computed: {
    ...mapState({
      myProducts: (state) => state.myProducts,
      productsInChart: (state) => state.productsInChart,
    }),

    totalPrice(){
      return this.productsInChart.reduce((acc, item) => acc + item.productPrice, 0);
    }
  },
  methods: {
    removeItemQuantity(id) {
      const item = this.productsInChart;

      if (item[id].itemQuantity === 1) {
        this.removeProduct(id);
      } else {
        item[id].itemQuantity -= 1;
        item[id].productPrice -= item[id].priceOrigin;
      }
    },
    addItemQuantity(id) {
      const item = this.productsInChart;
      item[id].itemQuantity += 1;
      item[id].productPrice += item[id].productPrice;
    },
    removeProduct(id) {
      let index = id;
      this.productsInChart.splice(index, 1);
    },
  },
};
</script>

<style>
.no_product_inbucket {
  width: 100%;
  max-width: 1000px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid rgb(206, 206, 206);
  border-radius: 0.25em;
  text-transform: capitalize;
  font-size: 3em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 5px;
  color: white;

  height: 500px;
}

.no_product_inbucket figcaption {
  width: auto;
  height: 100%;
  border-radius: 0.25em;
  overflow: hidden;
}

.no_product_inbucket figcaption img {
  opacity: 0.3;
}

.no_product_inbucket figcaption img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.displayError {
  width: 100%;
  max-width: 900px;
  display: block !important;
  position: fixed;
  text-align: center;
  margin: 0 auto;
  color: rgb(0, 0, 0) !important;
  text-transform: uppercase;
}

.errorMessageBucket {
  width: 100%;
}
#payment_methods {
  display: flex;
  justify-content: space-between;
  padding: 1em 0;
}

#payment_methods figcaption {
  width: 35px;
  height: 35px;
}

#payment_methods figcaption img {
  width: 100%;
}

#payment_methods input {
  cursor: pointer;
}

#minusItem,
#addItem {
  color: black !important;
}

#removeItem {
  color: red !important;
}

#removeItem,
#addItem,
#minusItem {
  width: 30px;
  height: 30px;
  color: white;
  border: none;
  transition: 0.5s;
  cursor: pointer;
  border-radius: 1em;
  padding: 0.2em 0 0.1em;
}

#minusItem:hover,
#addItem:hover,
#removeItem:hover {
  color: white !important;
  background: red;
}
#bucket {
  width: 1280px;
  height: auto;
  min-height: 780px;
  margin: 0 auto;
}

#bucket_header {
  width: 100%;
  height: 75px;
}

#articles {
  min-width: 600px;
  width: 100%;
  height: auto;
  display: flex;
}

#articles strong {
  display: block;
}

#articles ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

#articles ul li {
  width: 880px;
  max-height: 180px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 5px;
  background-color: #f7f7f7;
  border-radius: 0.35em;
  margin-bottom: 1em;
  justify-content: space-between;
}

#articles ul li figcaption {
  width: 150px;
  height: 150px;
  margin-right: 10px;
}

#articles ul li img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#articles article {
  display: flex;
}

.bucket_buttons {
  width: 100%;
  display: flex;
}

.bucket_buttons button {
  margin-right: 1em;
}

#summary {
  width: 350px;
  min-width: 300px;
  height: 500px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1em;
  border-radius: 0.25em;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 5px;
}

#summary p {
  text-align: justify;
  display: flex;
  justify-content: space-between;
}

h3 {
  text-transform: uppercase;

  padding-bottom: 0.5em;
  margin-bottom: 2em;
}

#checkout {
  display: block;
  text-align: center;
  background-color: black;
  padding: 1em;
  color: white;
  transition: 1s;
  border-radius: 0.25em;
  cursor: pointer;
}

#checkout:hover {
  background-color: red;
}
</style>
