<template>
  <div class="goods-item">
   <img :src="goodsItem.show && goodsItem.show.img || defaultImg" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
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
    },
    data(){
      return{
        defaultImg:'http://s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg_320x999.jpg'
      }
    }
  }
</script>

<style scoped lang="scss">
.goods-item{
  width: 48%;
  padding-bottom: 40px;
  position: relative;

  img{
    width: 100%;
    border-radius:5px;
  }
  .goods-info{
    font-size: 12px;
    text-align: center;
    bottom:5px;
    position: absolute;
    left: 0;
    right: 0;
    p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
    }
    .price{
      color: var(--color-primary-height);
      margin-right: 20px;
    }
    .collect{
      position: relative;
    }
    .collect::before{
      content: '';
      position: absolute;
      left: -15px;
      top: 1px;
      width: 14px;
      height: 14px;
      background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }
  }
}
</style>
