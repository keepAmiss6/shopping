<template>
  <div>
    <div>商品1</div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default: () => {
        }
      }
    }
  }
</script>

<style scoped>

</style>
