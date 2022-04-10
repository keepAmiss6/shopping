<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">欢迎来到购物街</div>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommond="recommend"></home-recommend>
    <home-feature></home-feature>
    <tab-control :title="['流行','新款','精选']" class="home-tab-control"></tab-control>

  </div>
</template>


<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tab-control/TabControl";

  import {getHomeMultidata} from 'network/home.js';

  import HomeSwiper from "./home-component/HomeSwiper";
  import HomeRecommend from "./home-component/HomeRecommend";
  import HomeFeature from "./home-component/HomeFeature";
  export default {
    name: "index",
    components:{
      NavBar,
      TabControl,
      HomeSwiper,
      HomeRecommend,
      HomeFeature
    },
    data(){
      return{
        banner:[],
        recommend:[]
      }
    },
    async created() {
      let res = await getHomeMultidata();
      console.log(res);
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list
    }
  }
</script>

<style scoped lang="scss">
.home{
  padding-top: 44px;
  .home-nav{
    background-color: var(--color-primary-height);
    color: var(--color-white);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .home-tab-control{
    position: sticky;
    top: 44px;

  }
}
</style>
