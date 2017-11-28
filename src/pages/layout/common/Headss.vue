<template>
	  <div class="head">
        <div class="head-img">
        <button class="goback" onclick="window.history.go(-1)">
          <img :src="go">
        </button>
          <p>{{$route.query.title}}</p>
        </div>
    </div>
</template>
<script>
	export default{
		name:'headss',
		data(){
			return{
        go:{}
			}
		},
    created(){
      this.$axios.get(this.HOST+"lovelinessData/second.json")
     .then(res => {
     this.go=res.data.articles.go
     })
    .catch(error => {
      console.log(error)
    })
   }
	}
</script>
<style scoped lang='less'>
   .head{
   	width: 100%;
   	background-color: #fff;
   }
	.findTo_warp{
	 width:95%;
      margin:-80/50rem auto 0;
     }

    .head{
      width: 100%;
      height: 155/50rem;
      background: #ff406f; 
      overflow: hidden; 
    .head-img{
      margin: 0 auto;
      text-align: center;
      width: 96%;
      line-height: 48/50rem;
      .goback{
      	outline:none;
        width:25/25rem;
        float: left;
        height:25/25rem;
        background-color:#FF406F;
        border:0;
        &>img{
        margin-top:15/50rem;
        height: 25/50rem;
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
 
  .head-img img:nth-child(1){
    line-height: 48/50rem;
    float: left;
  }
  .head-img img:nth-child(3){
    line-height: 48/50rem;
    float: right;
  }
</style>
