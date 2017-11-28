<template>
  <div class="news-body">
    <router-link :to="{name:'inform',query:{title:'新好友通知'}}">
    <div class="new-body">
        <img src="../../../../assets/word/3.png" alt="">
        <p>好友通知</p>
        <p>你的好友刚刚上线</p>
        <p>26分钟前</p>
    </div>
    </router-link>
  </div>
</template>
<script>
  export default{
    name:'news',
    data(){
      return{

      }
    }
  }
</script>
<style scoped lang="less">
  .news-body{
    width: 100%;
    color: #AAAAAA;
    font-size: 13/50rem;
    // font-family:'仿宋';
    
    .new-body{
      width: 100%;
      height: 66/50rem;
      background: #fff;
      box-shadow:0px 0px 20px 1px #ccc;
      margin-top: 12/50rem;

      img{
        width: 48/50rem;
        margin-top: 8/50rem;
        margin-left: 25/50rem;
      }
      p{

        margin-left: 85/50rem;
        margin-top:-46/50rem;
        &:nth-child(3){
              margin-top: 12/50rem;
          }
          &:nth-child(4){
              float: right;
              font-size: 10/50rem;
              margin-right: 25/50rem;
          }
      }
    }
  }
</style>