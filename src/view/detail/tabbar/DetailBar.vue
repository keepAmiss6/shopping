<template>
  <div class="detail">
    <NavBar>
      <div slot="left" class="img-box" @click="()=>{$router.back()}">
        <img src="~assets/img/common/back.svg">
      </div>
      <div slot="center" class="title-box">
        <div v-for="(item,index) in title"
             @click="titleClick(index)"
             :class="{active:currentIndex===index}"
             :key="index"
        >{{item}}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "DetailBar",
    components: {
      NavBar
    },
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index
      }

    }
  }
</script>

<style scoped lang="scss">
  .detail {
    .img-box {
      margin: 5px 0 0 10px;
    }

    .title-box {
      display: flex;
      justify-content: space-evenly;
    }
    .active{
      color: var(--color-primary-tint);
    }
  }


</style>
