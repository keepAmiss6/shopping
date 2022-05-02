<template>
  <div class="detail-index">
    <div v-if="!iid">
      <p>接口数据异常，无id</p>
    </div>
    <div v-else>
      <DetailBar class="detail-bar"></DetailBar>
      <Scroll class="content" ref="scroll">
        <DetailSwiper :top-img="topImg" class="detail-swiper"></DetailSwiper>
        <DetailBaseInfo :goods="good"></DetailBaseInfo>
        <DetailShopInfo :shop="shop"></DetailShopInfo>
        <DetailGoodsInfo :detail-info="detailInfo"></DetailGoodsInfo>
        <DetailParamInfo :param-info="paramInfo"></DetailParamInfo>

      </Scroll>
    </div>
  </div>
</template>

<script>
  import DetailBar from "./tabbar/DetailBar";
  import DetailSwiper from "./swiper/DetailSwiper";
  import DetailBaseInfo from "./base-infor/DetailBaseInfo";
  import DetailShopInfo from "./shop-infor/DetailShopInfo";
  import DetailGoodsInfo from "./good-info/DetailGoodsInfo";
  import DetailParamInfo from "./param-info/DetailParamInfo";

  import {getGoodDetail, Good, Shop,GoodsParam} from 'network/detail.js'
  import Scroll from "components/common/scroll/Scroll";

  export default {
    name: "index",
    components: {
      DetailBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo
    },
    data() {
      return {
        topImg: [],
        iid: '',
        good: {},
        shop: {},
        detailInfo: {},
        paramInfo:{}
      }
    },
    async created() {
      this.iid = this.$route.params.iid;
      let res = await getGoodDetail(this.iid);
      console.log(res);
      this.topImg = res?.result?.itemInfo?.topImages

      const data = res.result
      this.good = new Good(data?.itemInfo, data?.columns, data?.shopInfo?.services)
      console.log(this.good)

      this.shop = new Shop(data.shopInfo)


      this.detailInfo = data.detailInfo

      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    }
  }
</script>

<style scoped lang="scss">
  .detail-index {
    position: relative;
    z-index: 9;
    background: #ffffff;
    height: 100vh;
    margin-bottom: 20px;
    >div{
      background: #ffffff;
    }

    .detail-bar {
      /*position: relative;*/
      /*z-index: 9;*/
      background: #ffffff;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    .content {
      height: calc(100% - 44px);
    }
  }

</style>
