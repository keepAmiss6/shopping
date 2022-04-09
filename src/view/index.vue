<template>
  <div>
    <router-view></router-view>
    <bar-index>
      <tab-bar link="/home" activeColor="deepPink">
        <img src="~assets/tabbar/home.svg" slot="item-img">
        <img src="~assets/tabbar/home_active.svg" slot="item-img-active">
        <p slot="item-text">首页</p>
      </tab-bar>
      <tab-bar link="/category" activeColor="deepPink">
        <img src="~assets/tabbar/category.svg" slot="item-img">
        <img src="~assets/tabbar/category_active.svg" slot="item-img-active">
        <p slot="item-text">分类</p>
      </tab-bar>
      <tab-bar link="/shopcart" activeColor="deepPink">
        <img src="~assets/tabbar/shopcart.svg" slot="item-img">
        <img src="~assets/tabbar/shopcart_active.svg" slot="item-img-active">
        <p slot="item-text">购物车</p>
      </tab-bar>
      <tab-bar link="/profile" activeColor="deepPink">
        <img src="~assets/tabbar/profile.svg" slot="item-img">
        <img src="~assets/tabbar/profile_active.svg" slot="item-img-active">
        <p slot="item-text">我的</p>
      </tab-bar>
    </bar-index>
  </div>
</template>

<script>
  import barIndex from "components/common/tabbar/index";
  import TabBar from "components/common/tabbar/TabBar";
  export default {
    name: "shopIndex",
    components:{
      barIndex,
      TabBar
    }
  }
</script>

<style scoped>

</style>
