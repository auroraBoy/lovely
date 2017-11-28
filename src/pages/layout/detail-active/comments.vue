<template>
	<div class="articles">
		<Heads/>
		<div class="active-warp">
			<div class="banner">
			    <!-- 评论组件 -->
			    <Comment/>
			  </div>
		</div>
	</div>
</template>
<script>
   import Heads from '../common/heads'
   import Comment from '../common/comment'
	export default{
		name:'articles',
		data(){
			return{

			}
		},
		components:{
			Heads,
			Comment
		}
	}
</script>
<style scoped lang='less'>
  .articles{
  	width: 100%;
   	height: 665/50rem;
   	background-color:#fff;
	&>.active-warp{
   margin-top:-80/50rem;
   background-color: #fff;
   }
 }
 .banner{
  background:#fff;
  width: 95%;
  margin: 0 auto;
  box-shadow:0px 0px 10px 1px #ccc;
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
      &>img{
        width:335/50rem;
        margin:0.2rem 0 0 0.2rem;
      }
    }
   

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