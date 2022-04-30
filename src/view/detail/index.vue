<template>
  <div>
    <div v-if="!iid">
      <p>接口数据异常，无id</p>
    </div>
    <div v-else>
      <DetailBar></DetailBar>
      <DetailSwiper :top-img="topImg"></DetailSwiper>
    </div>
  </div>
</template>

<script>
  import DetailBar from "./detail-tab-bar/DetailBar";
  import DetailSwiper from "./detail-swiper/DetailSwiper";

  import getGoodDetail from 'network/detail.js'

  export default {
    name: "index",
    components: {
      DetailBar,
      DetailSwiper
    },
    data() {
      return {
        topImg: [],
        iid: ''
      }
    },
    async created() {
      this.iid = this.$route.params.iid;
      let res = await getGoodDetail(this.iid);
      console.log(res);
      this.topImg = res?.result?.itemInfo?.topImages
    }
  }
</script>

<style scoped>

</style>
