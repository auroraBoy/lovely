<template>
  <div class="articles">
    <Heads/>
    <div class="active-warp">
      <div class="banner">
    <div class="box-mid">
      <div class="container">
        <div class="con">
          <img :src="headimg">
          <span>{{name}}</span>
          <a href="javascript:;">关注ta</a>
        </div>
        <video class="lib-video" loop="" controlslist="" controls="" webkit-playsinline="webkit-playsinline" playsinline="playsinline" autoplay="true" poster="//img.alicdn.com/imgextra/i2/6000000002427/TB2noZLfvBNTKJjSszeXXcu2VXa_!!0-0-tbvideo.jpg_600x600.jpg" src="//cloud.video.taobao.com/play/u/776151038/p/1/e/6/t/1/50031758060.mp4" type="video/mp4"></video>
      </div>
    </div>

    <div class="box-arg">
      <Title/>
     <Comment/>
    </div>

    <router-link tag='div' :to="{name:'comments',query:{title:'全部评论'}}" class="box-check">
      <p>查看全部评论</p>
    </router-link>

    <div class="box-btm">
      <input type="text" name="" class="comment" placeholder="评论一下楼主吧~">
    </div>
  </div>

    </div>
  </div>
</template>
<script>
   import Heads from '../common/heads'
    import Title from '../common/title'
   import Comment from '../common/comment'
  export default{
    name:'articles',
    newsList:{},
    data(){
      return{
       headimg:{},
       name:{}
      }
    },
    components:{
      Heads,
      Title,
      Comment
    },
      created(){
      this.$axios.get(this.HOST+"lovelinessData/second.json")
     .then(res => {
     this.headimg=res.data.intelligent[0].headimg
     this.name=res.data.intelligent[0].name
     })
    .catch(error => {
      console.log(error)
    })
   }
  }
</script>
<style scoped lang='less'>
 .banner{
  background:#fff;
  .box-up{
    height:95/50rem;
    width:100%;
    background:#ff406f;
    padding:1.1rem 0;
  } 
  .box-mid{
    margin:-1.7rem auto 1.8rem ;
    .container{
      height:5rem;
      width:355/50rem;
      background:#fff;
      margin:0 auto;
      .con{
        &>img{
          height:0.8rem;
          margin:-0.2rem 0.2rem 0 ;
        }
        a{
          display:inline-block;
          line-height:0.2rem;
          border-radius:0.2rem;
          border:1px solid #8c8c8c;
          padding:0.15rem;
          float:right;
          margin:0.2rem 0.2rem 0 0;
        }
      }
     &>video{
        width:335/50rem;
        margin:0.2rem 0 0 0.2rem;
      }
    }
   

  } 
  .box-arg{
    width:95%;
    margin:-1.8rem auto 0;
  }
  .box-check{
    height:1rem;
    border-top:1px solid #000;
    text-align:center;
    line-height:0.6rem;
    width:95%;
    margin:0 auto 70/50rem;
    font-size:14/50rem;
    &>p{
      color: #ff406f;
    }
  }
  .box-btm{
    position:fixed;
    bottom:0;
    left:0;
    height:1.4rem;
    width:100%;
    background:#fff;
    box-shadow:0rem -0.1rem 0.2rem 0.05rem #ddd;
    .comment{
      height:0.8rem;
      width:95%;
      margin-left:2%;
      margin-top:0.3rem;
      font-size:14/50rem;
    }
  }


}

</style>

