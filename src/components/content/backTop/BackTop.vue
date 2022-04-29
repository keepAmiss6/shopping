<template>
<div class="back-top" @click="goTop">
  <img src="~assets/img/common/top.png">
</div>
</template>

<script>
  export default {
    name: "BackTop",
    methods:{
      goTop(){
        window.scrollTo(0,0)
      }
    }
  }
</script>

<style scoped lang="scss">
.back-top{
  position: fixed;
  bottom: 50px;
  right: 10px;
  z-index: 999;
  >img{
    width: 43px;
    height: 43px;
  }
}
</style>
