<template>
  <div class="tab-control">
    <div v-for="(item,index) in title"
         :key="index"
         class="tab-control-item"
         :class="currentIndex === index?'active':''"
         @click="tabClick(index)">
      <span>{{ item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {
        currentIndex: 0
      }
    },
    props: {
      title: Array,
      default: () => []
    },
    methods:{
      tabClick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;

    .tab-control-item {
      flex: 1;
    }

    .active {
      color: var(--color-primary-height);
    }

    .active span {
      border-bottom: 2px solid var(--color-primary-height);
    }
  }
</style>
