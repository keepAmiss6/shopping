<template>
  <swiper>
    <swiper-item v-for="(item ,index) in banner" v-bind:key="index">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
  export default {
    name: "HomeSwiper",
    props:{
      banner:{
        type:Array,
        default:()=>[]
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped lang="scss">

</style>
