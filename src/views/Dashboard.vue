<template>
  <div>
    <div id="header_admin">
      <ul>
        <li><i class="fa fa-bars" aria-hidden="true"></i></li>
        <li><i class="fa fa-shopping-cart" aria-hidden="true"></i></li>
        <li><i class="fa fa-user" aria-hidden="true"></i></li>
      </ul>
    </div>
    <div id="section_admin">
      <new_users />
      <popular_products />
    </div>
  </div>
</template>

<script>
import popular_products from "../components/admin/popular_products.vue";
import new_users from "../components/admin/new_users.vue";
export default {
  name: "dashboard",
  components: { popular_products, new_users },
};
</script>

<style>
#header_admin {
  width: auto;
  height: auto;
  margin-top:35px;
  margin-bottom: 20px;
  border-radius:0.5em;
  background-color:white;
}

#header_admin ul {
  display: flex;
  justify-content: flex-start;
  border: 1px solid rgb(216, 216, 216);
}

#section_admin {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
}
</style>
