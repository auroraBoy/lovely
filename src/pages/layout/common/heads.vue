<template>
    <div class="head">
        <div class="head-img">
        <button class="goback" onclick="window.history.go(-1)">
          <img :src="go">
        </button>
          <p>{{$route.query.title}}</p>
        <button class="share">
          <img :src="share">
        </button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'heads',
  data(){
    return{
      share:{},
      go:{}
      }
  },
  methods:{
    getid(){
   
    }
  },
  created(){
    this.$axios.get(this.HOST+"lovelinessData/second.json")
   .then(res => {
   this.go=res.data.articles.go
   this.share=res.data.articles.share
   })
  .catch(error => {
    console.log(error)
  })
 }
}

</script>

<style scoped lang="less">
  
    .head{
      width: 100%;
      height: 155/50rem;
      background: #ff406f;  
    .head-img{
      margin: 0 auto;
      text-align: center;
      width: 96%;
      line-height: 48/50rem;
      .goback,.share{
      	float:left;
      	outline:none;
        width:20/25rem;
        height:20/25rem;
        background-color:#FF406F;
        margin:2/50rem;
        border:0;
        &>img{
        margin-top:17/50rem;
        height: 25/50rem;
      }
      }
      .share{
      	float:right;
      }
      p{
        display: inline-block;
        margin-top:10/50rem;
        font-size: 23/50rem;
        font-family:'苹方中等';
        color:rgba(255,255,255,.7);
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