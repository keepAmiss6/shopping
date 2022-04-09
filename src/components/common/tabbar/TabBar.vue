<template>
  <div class="bar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-img-active"></slot>
    </div>
    <div :style="isActive?{'color':activeColor}:{}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    props:{
      link:{
        type:String,
      },
      activeColor:{
        type: String,
        default:'red'
      }
    },
    computed:{
      isActive(){
        return this.$route.path.includes(this.link)
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped lang="scss">
  .bar-item {
    flex: 1;

    img {
      width: 24px;
      height: 24px;
      vertical-align: middle;
    }
    p{
      margin: 0;
    }
  }
</style>
