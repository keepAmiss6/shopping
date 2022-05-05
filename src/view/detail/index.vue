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
        <DetailComment :comment-info="commentInfo"></DetailComment>
        <GoodsList :goods="recommend"></GoodsList>
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
  import DetailComment from './comment/DetailComment'
  import GoodsList from "components/content/goods/GoodsList";

  import {getGoodDetail, Good, Shop, GoodsParam, getRecommend} from 'network/detail.js'
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
      DetailParamInfo,
      DetailComment,
      GoodsList
    },
    data() {
      return {
        topImg: [],
        iid: '',
        good: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommend: []
      }
    },
    async created() {
      this.iid = this.$route.params.iid;
      let res = await getGoodDetail(this.iid);
      // console.log(res);
      this.topImg = res?.result?.itemInfo?.topImages

      const data = res.result
      this.good = new Good(data?.itemInfo, data?.columns, data?.shopInfo?.services)
      // console.log(this.good)

      this.shop = new Shop(data.shopInfo)


      this.detailInfo = data.detailInfo

      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      if (data.rate.CRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }


      let recommend = await getRecommend();
      this.recommend = recommend?.data?.list
      console.log('recommend', this.recommend?.data?.list);
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

    > div {
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
