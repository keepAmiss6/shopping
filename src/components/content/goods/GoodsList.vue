<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped lang="scss">
.goods-list{
  display: flex;
  flex-wrap: wrap; //控制flex布局下是否换行，wrap为换行，需要子元素定义宽度来配合使用
  justify-content: space-around;//子元素均等分
}
</style>
