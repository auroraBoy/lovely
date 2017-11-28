<template>
  <div class="collect">
    <Headss/>
      <div class="title_warp">
        <router-link :to="{path:'/news/word'}" class="topic">
  
          通知
        </router-link>
        <router-link :to="{path:'/news/coze'}" class="shop">
          聊天
        </router-link>
      </div>
      <router-view></router-view>
  </div>
    
</template>

<script>
 import Headss from '../common/headss'
export default {
  name: 'news',
  data(){
    return{
  }
  },
  components:{
    Headss
  }
}

</script>

<style scoped lang="less">
  .collect{
    width: 100%;
    height: 14rem;
    background: #fff;

    .head{
      width: 100%;
      height: 60/50rem;
      background: #ff406f;
      .head-img{
          margin: 0 auto;
          text-align: center;
          width: 96%;
          line-height: 48/50rem;
          position: relative;
          p{
            margin-top: 5/50rem;
            display: inline-block;
            font-size: 24/50rem;
            font-family:'苹方中等';
            color:rgba(255,255,255,.8);
          }
          &>img{
            margin-top:15/50rem;
            height: 25/50rem;
          }
        }
      }
      .title_warp{
        display: flex;
        height: 50/50rem;
        &>a{
          flex-grow:1;
          text-align: center;
          font-size: 18/50rem;
          color: #808080;
          height:25/50rem;
          line-height:25/50rem;
          margin: 12.5/50rem;
          box-sizing: border-box;
          &:nth-child(2){
            border-left:1px solid #808080;
          }
        }
      }
  }
  .head-img img:nth-child(1){
    line-height: 48/50rem;
    float: left;
  }
  .head-img img:nth-child(3){
    line-height: 48/50rem;
    float: right;
  }
</style>