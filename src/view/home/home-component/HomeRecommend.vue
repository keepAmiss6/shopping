<template>
<div class="recommond">
  <div v-for="(item,index) in recommond" :key="index" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image"/>
    </a>
    <div>{{item.title}}</div>
  </div>
</div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommond:{
        type:Array,
        default:()=>[]
      }
    }
  }
</script>

<style scoped lang="scss">
.recommond{
  display:flex;
  width:100%;
  text-align: center;
  padding: 10px 0 20px 0;
  border-bottom: 10px solid #eeeeee;
  font-size: 12px;

  .recommend-item{
    flex: 1;

    img{
      width: 70px;
      height: 70px;
      margin-bottom: 10px;
    }
  }


}
</style>
