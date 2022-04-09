<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">欢迎来到购物街</div>
    </nav-bar>
    <home-swiper :data="banner"></home-swiper>
  </div>
</template>


<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./home-component/HomeSwiper";
  import {getHomeMultidata} from 'network/home.js';
  export default {
    name: "index",
    components:{
      NavBar,
      HomeSwiper
    },
    data(){
      return{
        banner:[]
      }
    },
    async created() {
      let res = await getHomeMultidata();
      this.banner = res.data.banner.list
    }
  }
</script>

<style scoped lang="scss">
.home{
  .home-nav{
    background-color: var(--color-primary-height);
    color: var(--color-white);
  }
}
</style>
