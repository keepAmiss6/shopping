<template>
<div class="nav-bar">
  <div class="left"><slot name="left"></slot></div>
  <div class="center"><slot name="center"></slot></div>
  <div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped lang="scss">
.nav-bar{
  display: flex;
  text-align: center;
  height: 44px;//一般移动端的导航栏都是44px左右
  line-height: 44px;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);

  .left .right{
    width: 60px;
    background: green;
  }
  .center{
    flex: 1;
  }
}
</style>
