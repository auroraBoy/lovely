<template>
  <div class="articles">
    <Heads/>
     <div class="banner-warp">
     <div class="container">
        <div class="con">
          <img :src="headimg">
          <div class="span">
          <span>{{name}}</span>
          <span>{{fans}}</span>
          </div>
          <a href="javascript:;" @click="showHide">关注ta</a>
        </div>
        <img :src="img">
      </div>
    <div class="banner">
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
    data(){
      return{
          flag:false,
          headimg:{},
          name:{},
          fans:{},
          img:{}
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
     this.headimg=res.data.articles.headimg
     this.name=res.data.articles.name
     this.fans=res.data.articles.fans
     this.img=res.data.articles.img
     })
    .catch(error => {
      console.log(error)
    })
   },
  methods:{
    showHide(event){
      // 值的改变会引起视图重新渲染
      // data中的值一旦发生改变，则会引起视图重新渲染
      this.flag = !this.flag;
      var flag= this.flag;
      console.log(flag);
      console.log(event.target.innerHTML)
      if(flag){
           event.target.innerHTML="已关注";
           event.target.style.color="#ff406f";
           event.target.style.border="1px solid #ff406f"
      }else{
        event.target.innerHTML="关注ta";
        event.target.style.color="#C0C0C0";
       event.target.style.border="1px solid #C0C0C0"
      }
    }
  }
  }
</script>
<style scoped lang='less'>
   .container{
      height:250/50rem;
      width:355/50rem;
      background:#fff;
      margin:-140/50rem auto 10/50rem;
      border-radius:0.2rem; 
      box-shadow:0rem 0rem 0.2rem 0.05rem #ddd;
      .con{
        &>img{
          height:1.2rem;
          margin:-0.2rem 0.2rem 0 ;
           float: left;
        }
        .span{
          width: 60/50rem;
          height: 20/50rem;
          margin-top: 10/50rem;
          float: left;
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
      &>img{
        width:335/50rem;
        height: 160/50rem;
        margin:0.2rem 0 0 0.2rem;
      }
    }
.banner-warp{
  width: 100%;
  margin-top: 70/50rem;
  background: #fff;
  clear: both;
}
 .banner{
  width: 100%;
 background-color: #fff;
  .box-up{
    height:95/50rem;
    width:100%;
    background:#ff406f;
    padding:1.1rem 0;
  } 
 

  .box-arg{
    width:95%;
    background: #fff;
  }
  .box-check{
    height:1rem;
    border-top:.3px solid rgba(0,0,0, 0.5);
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