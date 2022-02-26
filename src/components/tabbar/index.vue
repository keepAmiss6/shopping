<template>
  <div class="bar-box">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "barIndex",
    components: {
    }
  }
</script>

<style scoped lang="scss">
.bar-box{
  display: flex;
  text-align: center;
  height: 49px;
  background: ghostwhite;
  /*
  定位相关的，单纯加position fixed后会影响flex布局
  使用bottom,left,right调整
  */
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

}
  .bar-box{

  }
</style>