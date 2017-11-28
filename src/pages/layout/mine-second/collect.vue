<template>
  <div class="collect">
     <Heads/>
     <div style=" background-color:#fff">
      <div class="title_warp">
        <router-link :to="{path:'/collect/collecttopic'}" class="topic">
          话题
        </router-link>
        <router-link :to="{path:'/collect/collectshop'}" class="shop">
          产品
        </router-link>
        <router-link :to="{path:'/collect/collectmovie'}" class="movie">
          视频
        </router-link>
      </div>
      <router-view></router-view>
      </div>
  </div>
    
</template>

<script>
 import Heads from '../common/heads'
export default {
  name: 'collect',
  data(){
    return{
  }
  },
  components:{
    Heads
  }
}

</script>

<style scoped lang="less">
  .collect{
    width: 100%;
    height: 14rem;
    background: #fff;
      .title_warp{
        display: flex;
        height: 50/50rem;
        margin-top: -100/50rem;
        background: #fff;
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
            border-right:1px solid #808080;
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
  .active{
  color:#000 !important;
   }
</style>
