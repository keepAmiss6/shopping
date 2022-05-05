<template>
  <div v-if="Object.keys(commentInfo).length!==0" class="comment-info">
    <div class="info-header">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="date">{{showTime}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="info-imgs">
        <img v-for="(item,index) in commentInfo.images" :src="item" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
  import * as moment from 'moment';

  export default {
    props: {
      commentInfo: {
        type: Object,
        default: () => {
        }
      }
    },
    name: "DetailComment",
    computed:{
      showTime(){
       return moment(this.commentInfo.created).format('yyyy-MM-DD h:mm:ss')

      }
    },
    data() {
      return {
      }
    },
  }
</script>

<style scoped lang="scss">
  .comment-info {
    padding: 10px;

    .info-header {
      display: flex;
      justify-content: space-between;
      padding: 10px;
    }

    .info-user {
      display: flex;
      line-height: 50px;

      > img {
        height: 50px;
        margin-right: 20px;
      }
    }

    .info-other {
      color: gray;
    }
    .date{
      margin-right: 5px;
    }
    .info-imgs{
      >img{
        width: 60px;
        height: 60px;
        padding: 5px;
      }
    }
  }
</style>
