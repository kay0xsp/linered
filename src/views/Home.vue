<template>
  <div class="home">
    <!-- The Modal -->
    <div id="myModal" v-if="modalActivator" class="modal">
      <!-- Modal content -->
      <span class="close" @click="modalActivator = false">&times;</span>
      <div id="modalProduct">
        <div class="modal-content">
          <figcaption id="bigPic">
            <img :src="`${publicPath}` + myProducts[4]" alt="" />
          </figcaption>
          <div class="thepics">
            <figcaption class="small_pics">
              <img :src="`${publicPath}` + myProducts[4]" alt="" />
            </figcaption>
            <figcaption class="small_pics">
              <img :src="`${publicPath}` + myProducts[4]" alt="" />
            </figcaption>
            <figcaption class="small_pics">
              <img :src="`${publicPath}` + myProducts[4]" alt="" />
            </figcaption>
          </div>
        </div>
        <div class="description">
          <strong>{{ myProducts[1] }}</strong>
          <em>Miscalleneous</em>

          <b>{{ myProducts[2] }} €</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisi
            nisi, facilisis a iaculis eu, viverra eleifend tortor. Curabitur a
            justo auctor, pellentesque mauris ut, posuere metus. Maecenas sed
            metus ac sem aliquam eleifend id quis elit. Maecenas in massa
            placerat, egestas sapien at, vehicula orci. Suspendisse fermentum
          </p>
          <button
            @click="
              addToChart(
                myProducts[0],
                myProducts[1],
                myProducts[2],
                myProducts[3],
                myProducts[4]
              )
            "
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
    <article v-if="!modalActivator">
      <div id="filters">
        <div class="filter_search">
          <div class="filter_component">
            <strong>SEARCH</strong>
          </div>
          <div class="filter_component">     
              <input v-model="searchValue" placeholder="Search" />
            <span><i class="fas fa-search"></i></span>
          </div>
        </div>
        <div class="filter_categories">
          <strong>CATEGORIES</strong>
          <ul>
            <li 
                v-for="categories in categoryList" 
                :key="categories.id"
            >
              <p>{{categories.name}}</p> <i :class="`${categories.icon}`"></i>
            </li>
          </ul>
        </div>
        <div class="filter_ad">
          <img :src="`${publicPath}` + './img/publicity/boxed-water-is-better-PHQVYFgTerA-unsplash.jpg'" alt="" />
        </div>
      </div>
      <ul id="home_products">
        <li
          v-for="products in productsDisplay"
          :key="products.id"
          @click="addProduct(products.id, products.name, products.price, products.ref, products.img)"
          class="list_product"
        >
          <figcaption>
            <img :src="`${publicPath}` + products.img" alt="" />
          </figcaption>
          <div class="description_product">
            <strong>{{ products.name }}</strong>

            <div class="product_info">
              <p>{{ products.price }} €</p>
              <div class="ratings">
                <span class="" v-for="r in products.ratings" :key="r"
                  ><i class="fas fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import product from '../json/products.json';
import categories from '../json/categories.json';
export default {
  name: "Home",

  data() {
    return {
      publicPath: process.env.BASE_URL,
      productList: product,
      categoryList: categories,
      searchValue:'',
      dialog: false,
      modalActivator: false,
    };
  },

  computed: {
    ...mapMutations(["connectToLinered"]),
    ...mapState({
      myProducts: (state) => state.myProducts,
      productsInChart: (state) => state.productsInChart,
      isConnected: (state) => state.isConnected,
    }),

    productsDisplay(){
      if(this.searchValue.trim().length > 0){
        return this.productList.filter((productList) => productList.name.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
      }
      return this.productList;
    }
  },
  methods: {
    addProduct(id, name, price, ref, image) {
      this.myProducts.splice("");
      const index = id;
      const productName = name;
      const productPrice = price;
      const reference = ref;
      const picture = image;

      this.myProducts.push(
        index,
        productName,
        productPrice,
        reference,
        picture
      );
      this.modalActivator = true;
    },
    addToChart(id, name, price, ref, image) {
      const item = {
        index: id,
        productName: name,
        productPrice: price,
        reference: ref,
        picture: image,
        itemQuantity: 1,
      };
      this.productsInChart.push(item);
    },
    connexionTemp() {
      this.$store.commit("connectToLinered", true);
    },
  },
};
</script>

<style>
.list_product {
  cursor: pointer;
}

#admin {
  height: 100px;
}

#myModal {
  width: 1380px;
  height: 750px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: white;
  position: fixed;
  transition: 1s;
  padding: 2em;
  top: 120px;
  z-index: 100;
  border-bottom: 2em;
  border-radius: 0.5em;
}

#modalProduct {
  display: flex;
  justify-content: space-between;
}

#modalProduct .description {
  width: 600px;
  height: 500px;
}

#modalProduct .description strong {
  display: block;
  font-size: 1.8em;
}

#modalProduct .description em,
#modalProduct .description b,
#modalProduct .description p {
  display: block;
  font-size: 0.9em;
  margin-bottom: 1em;
}

#modalProduct button {
  width: 100%;
  max-width: 250px;
  height: 50px;
  font-size: 0.8em;
  padding: 0.5em;
  background-color: black;
  color: white;
  transition: 0.5s;
  text-align: left;
}

#modalProduct img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#modalProduct button:hover {
  background-color: red;
  color: black;
}

#modalProduct .modal-content {
  width: 100%;
  height: 600px;
  margin-right: 50px;
}

#bigPic {
  width: 100%;
  height: 400px;
  margin-bottom: 50px;
}

.thepics {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
}

.small_pics {
  width: 250px;
  height: 150px;
}

#filters {
  padding: 1em;
  border-radius: 0.25em;
  width: 300px;
  height: 250px;
  margin: 5px 30px 20px 0px;
  position:fixed;
}

.filter_search, .filter_ad, .filter_categories {
  width: 300px;
  max-height: 400px;
  box-shadow: rgba(0, 0, 0, 0.24) 1px 2px 5px;
  border-radius: 0.25em;
  margin-bottom:15px;
  background-color: white;
  overflow: hidden;
}

.filter_search, .filter_categories{
  padding: 1em;
  color: rgb(102, 102, 102);
}

.filter_categories ul {
  padding:0;
  justify-content: left;
  display:flex;
  border:1px solid transparent;
  flex-direction: column;
  border-radius:0.25em;
  margin-top:1em;
}

.filter_categories ul li{
  display: flex;
  justify-content: space-between;
  padding:0;
  width:100%;
  margin-bottom:0.15em;
  padding:0.5em;
  border:1px solid transparent;
  transition:0.5s;
  border-radius:0.25em;
  cursor: pointer;
}

.filter_categories ul li:hover{
  border:1px solid red;
}

.filter_categories ul li p{
  margin:0;
}

.filter_categories strong{
  font-size:0.8em;

}

.filter_ad {
  top:320px;
}

.filter_ad img{
  width:300px;
  object-fit: cover;
}

.filter_component {
  color: rgb(102, 102, 102);
  font-size: 0.8em;
  display: flex;
  justify-content: space-between;
}

.filter_component input {
  border: 1px solid #d3d3d3;
  display: block;
}

.filter_padding {
  margin-top: 2em;
}

.home article {
  width: auto;
  height: 100%;
  min-height: 500px;
  display: flex;
}

.home article #home_products {
  display: flex;
  flex-wrap: wrap;
  margin-left:350px;
  padding: 0 !important;
  justify-content: space-between;
  width: 1600px;
}

.home article #home_products li {
  width: 215px;
  height: 350px;
  border: 1px solid transparent;
  background-color: #f1f1f1;
  margin: 20px 5px;
  padding: 0;
  transition: 0.25s;
  border-radius: 0.25em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 2px;
  overflow: hidden;
}

.home article #home_products li:hover {
  border-color: red;
}

.home article #home_products li figcaption {
  width: 100%;
  height: 250px;
  background-color: burlywood;
}

.home article #home_products li figcaption img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.description_product {
  padding: 1em;
}
.description_product strong {
  display: block;
}

.product_info {
  display: flex;
  justify-content: space-between;
}

.ratings i {
  padding-top: 0.8em;
  color: rgb(206, 119, 21);
}

.close {
  color: red;
  font-weight: bolder;
  cursor: pointer;
  font-size: 2em;
}

#credentials {
  width: 100%;
  height: 100%;
  background-color: white;
  position: absolute;
}

#credentials form {
  border: 1px solid rgb(172, 172, 172);
  display: flex;
  margin: 0 auto;
  border-radius: 0.25em;
  padding: 1em;
  flex-direction: column;
  width: 500px;
}

#credentials form input {
  border: 1px solid gray;
  margin: 0.5em;
  border-radius: 0.25em;
}
</style>
