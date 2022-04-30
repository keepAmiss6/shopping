<template>
  <div class="wrapper" ref="wrapper">
      <slot></slot>
  </div>
</template>
<!--
const bscroll = new BScroll(el,{})
注意：wrapper->content->很多内容
监听滚动
  probetype 0,1,2手指滚动,3只要是滚动
上拉加载
  pullUploadd:true
  bscroll.on('pullingUp',()=>{})
click:false

-->
<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpload: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      console.log('scroll load');
      console.log(BScroll);
      console.log(this.$refs.wrapper);
      this.$nextTick(()=>{

        // console.log(bs);
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType,
          pullUpload: this.pullUpload
        })

        // 监听滚动以及获取位置
        if (this.probeType === 2 || this.probeType === 3) {
          this.scroll.on('scroll', (position) => {
            console.log(position);
            this.$emit('scroll', position)
          })
        }

        //监听滚动到底部
        if (this.pullUpLoad) {
          this.scroll.on('pullingUp', () => {
            this.$emit('pullingUp')
          })
        }
      })


    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo(x, y, time)
      },
      refresh() {
        this.scroll && this.scroll.refresh()
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp()
      },
      getScrollY() {
        return this.scroll ? this.scroll.Y : 0
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    height: 100vh;
  }
</style>
