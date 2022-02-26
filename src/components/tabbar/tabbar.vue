<template>
  <div class="bar-item" @click="itemClick">
    <div v-show="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-show="isActive">
      <slot name="item-img-active"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbar",
    props:{
      link:{
        type:String,
        require:true
      }
    },
    data(){
      return{
        isActive: false
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