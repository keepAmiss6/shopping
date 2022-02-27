<template>
  <div>
    <router-view></router-view>
    <bar-index>
      <tabbar link="/home" activeColor="deepPink">
        <img src="../assets/tabbar/home.svg" slot="item-img">
        <img src="../assets/tabbar/home_active.svg" slot="item-img-active">
        <p slot="item-text">首页</p>
      </tabbar>
      <tabbar link="/category" activeColor="deepPink">
        <img src="../assets/tabbar/category.svg" slot="item-img">
        <img src="../assets/tabbar/category_active.svg" slot="item-img-active">
        <p slot="item-text">分类</p>
      </tabbar>
      <tabbar link="/shopcart" activeColor="deepPink">
        <img src="../assets/tabbar/shopcart.svg" slot="item-img">
        <img src="../assets/tabbar/shopcart_active.svg" slot="item-img-active">
        <p slot="item-text">购物车</p>
      </tabbar>
      <tabbar link="/profile" activeColor="deepPink">
        <img src="../assets/tabbar/profile.svg" slot="item-img">
        <img src="../assets/tabbar/profile_active.svg" slot="item-img-active">
        <p slot="item-text">我的</p>
      </tabbar>
    </bar-index>
  </div>
</template>

<script>
  import barIndex from "../components/tabbar";
  import tabbar from "../components/tabbar/tabbar";
  export default {
    name: "shopIndex",
    components:{
      barIndex,
      tabbar
    }
  }
</script>

<style scoped>

</style>