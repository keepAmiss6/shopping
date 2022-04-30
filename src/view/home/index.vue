<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">欢迎来到购物街</div>
    </nav-bar>
<!--    <scroll-->
<!--        class="content"-->
<!--        ref="scroll"-->
<!--        @scroll="homeScroll"-->
<!--        @pullingUp="homePullingUp"-->
<!--        :pull-up-load="true"-->
<!--        :probeType="3">-->
    <home-swiper :banner="banner"></home-swiper>
    <home-recommend :recommond="recommend"></home-recommend>
    <home-feature></home-feature>
    <tab-control :title="['流行','新款','精选']"
                 class="home-tab-control"
                 @tabClick="tabClick"/>
    <goods-list :goods="goods[currentType].list" class="goods-list"></goods-list>
<!--    </scroll>-->
    <BackTop @click.native="backTopClick" v-show="showGoTop"/>
  </div>
</template>


<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tab-control/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import {getHomeMultidata, getHomeGoods} from 'network/home.js';

  import HomeSwiper from "./home-component/HomeSwiper";
  import HomeRecommend from "./home-component/HomeRecommend";
  import HomeFeature from "./home-component/HomeFeature";

  // import Scroll from 'components/common/scroll/Scroll'

  import BackTop from "components/content/backTop/BackTop";

  export default {
    name: "index",
    components: {
      NavBar,
      TabControl,
      GoodsList,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      // Scroll,
      BackTop
    },
    data() {
      return {
        banner: [],
        recommend: [],
        currentType:'pop',
        goods: {
          pop: {pageIndex: 0, list: [{title: 11}]},
          new: {pageIndex: 0, list: []},
          sell: {pageIndex: 0, list: []}
        },
        showGoTop:false
      }
    },
    async created() {
      this.getHomeMultidata();
      this.getHomeGoods()
    },
    mounted(){
      // new BScroll('.goods-list')
      let that = this;
      window.onscroll=function () {
        that.showGoTop = Number(window.scrollY)>=1000
      }
    },
    methods: {

      /**
       * 事件相关的
       * */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType='pop';
            break;
          case 1:
            this.currentType='new';
            break;
          case 2:
            this.currentType='sell';
            break;
          default:
            this.currentType='pop'

        }
        this.getHomeGoods()
      },
      backTopClick(){
        console.log(11111)
      },
      homeScroll(){
        console.log('scroll start');
      },
      homePullingUp(){
        console.log('上拉加载更多');
      },
      /**
       * 网络请求相关
       * @returns {Promise<void>}
       */
      async getHomeMultidata() {
        let res = await getHomeMultidata();
        // console.log(res);
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list

      },
      async getHomeGoods() {
        const page = this.goods[this.currentType].pageIndex + 1;
        let res = await getHomeGoods(this.currentType, page);
        console.log('goods',res);
        let list = res?.data?.list;
        this.goods[this.currentType].list.push(...list)
      }

    }
  }
</script>

<style scoped lang="scss">
  .home {
    height: 100vh;
    padding-top: 44px;
    margin-bottom: 49px;

    .home-nav {
      background-color: var(--color-primary-height);
      color: var(--color-white);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    .home-tab-control {
      position: sticky;
      top: 44px;
      z-index: 1;

    }
  }
</style>
