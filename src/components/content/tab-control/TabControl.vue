<template>
  <div class="tab-control">
    <div v-for="(item,index) in title"
         :key="index"
         class="tab-control-item"
         :class="currentIndex === index?'active':''"
         @click="()=>{currentIndex = index}">
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
    }
  }
</script>

<style scoped lang="scss">
  .tab-control {
    display: flex;
    text-align: center;

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
