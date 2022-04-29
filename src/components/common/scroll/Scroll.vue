<template>
<div class="wrapper" ref="wrappr">
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true
      })
    }
  }
</script>

<style scoped>

</style>
