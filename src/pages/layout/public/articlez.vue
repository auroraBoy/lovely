
<template>
  <div class="body">
    <div class="head">
      <div class="head-img">
        <button class="goback" onclick="window.history.go(-1)">
          <img src="../../../assets/images/register/left.png">
        </button>

        <router-link exact :to="{path:launchPath}"><span>我发起的</span></router-link>
        <router-link :to="{path:joinPath}"><span>我参与的</span></router-link>
      </div>
    </div>
    <div class="container">
      <div class="con">
        <router-link tag="div" :to="{path:'/author'}">
        <img src="../../../assets/main/index/images/index6.png">
        </router-link>
        <div class="txt">
          <p>悦小舞</p>
          <p>2016年5月20日</p>
          <p>26分钟前</p>
        </div>
      </div>
      <img src="../../../assets/main/index/images/index2.png">
    </div>
    <div class="box-arg">
      <Title/>
     <Comment/>
    </div>
  </div>     
</template>
<script>
import Title from '../common/title'
import Comment from '../common/comment'
  export default {
  name: 'articlez',
  data () {
    return {
      joinPath:"/public/join",
      launchPath:"/public/launch",
    }
  },
    components:{
      Title,
      Comment
  }
}
</script>
<style scoped lang="less">
.body{
  height: 667/50rem;
  background:#fff;
  .container{
      height:5rem;
      width:355/50rem;
      background:#fff;
      margin:10/50rem auto;
      border-radius: 10/50rem;
      box-shadow: 0rem 0rem 0.2rem #ccc;
      .con{
        div{
          img{
            height:1rem;
            margin:-0.1rem 0.2rem 0 ;
          }
        }
        .txt{
          // width: 0.8rem;
          margin-top: -0.8rem;
          margin-left: 1.5rem;
          font-size: 10/50rem;
          p:nth-child(1){
            margin-bottom: 5/50rem;
          }
        }
      }
      &>img{
        width:335/50rem;
        margin:0.2rem 0 0 0.2rem;
      }
    }
  .head{
    width: 100%;
    height: 65/50rem;
    background: #ff406f; 
    overflow: hidden; 
    .head-img{
      margin: 0 auto;
      text-align: center;
      width: 96%;
      line-height: 65/50rem;
      text-align: center;  
      span{
        width: 85/50rem;
        height: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
        margin:8/50rem 0.8rem 0 0.05rem;
        font-size: 18/50rem;
        color: #fff;
        text-align: center;
        border-bottom: 2px solid #fff;  
      }
      .goback{
        outline:none;
        width:25/25rem;
        float: left;
        height:25/25rem;
        background-color:#FF406F;
        border:0;
        &>img{
          height: 25/50rem;
          margin-top: 10/50rem;
          line-height: 65/50rem;
        }
      }
      p{
        display:inline-block;
        font-size: 23/50rem;
        font-family:'苹方中等';
        margin:10/50rem 0 0 -25/25rem;
        color:rgba(255,255,255,.7);
      }
    }
  }
  .box-arg{
    width: 95%;
    margin: 5/50rem auto 0;
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