<template>
	<div class="finds">
	  <div class="finds-warp">
		  <div class="head">
	        <div class="head-img">
	        <router-link class="seach" :to="{path:'/search2'}">
	          <img :src="sousuo">
	        </router-link>
	         <p class="text">发现</p>
	         <router-link :to="{name:'Public',query:{title:'我发起的'}}">
	        <div class="share">
	        
	        <img :src="a">
		   
	        </div>
	         </router-link>
	        </div>
	      </div>
		<div class="subject-top">
			<router-link v-for="(item,idx) in find" tag='div' :to="{name:item.name,query:{title:item.title}}" class="subject-button">
				<img :src="item.headimg">
				<p>{{item.title}}</p>
			</router-link>
		 </div>
		<div class="subject-body" v-for="(item,idx) in finds">
			<router-link tag='div' :to="{name:'blusher',query:{title:'产品详情'}}">
			<div class="subject-body-txt">
				<p>不管，就是喜欢YSL</p>
				<p>189个话题   |   23460人热议</p>
			</div>
			<div class="subject-body-img">
				<img :src="item.find1" alt="">
				<img :src="item.find2" alt="">
			</div>
		</router-link>
		</div>
	   </div>	
		<Foots/>
	</div>
</div>
</template>
<script>
   import Foots from './common/foots'
	export default{
		name: 'finds',
		data(){
			return{
              sousuo:{},
              a:{},
              find:{},
              find1:{},
              find2:{},
              finds:{}
			}
		},
		 created(){
      this.$axios.get(this.HOST+"lovelinessData/index.json")
     .then(res => {
     this.finds=res.data.finds
     this.sousuo=res.data.index.sousuo
     this.find=res.data.find
     this.a=res.data.findimg.a
     this.find1=res.data.findimg.find1
     this.find2=res.data.findimg.find2
     console.log(this.name);
     })
    .catch(error => {
      console.log(error)
       })
     },
		components:{
			Foots
		}
	}
</script>

<style scoped lang="less">
	.finds{
		width: 100%;
		height: 787/50rem;
		background: #fff;
      .finds-warp{
      	width:100%;
      	background: #fff;
      	margin-bottom:155/50rem;
      	height:667/50rem;
	  .head{
	      width: 100%;
	      height: 155/50rem;
	      background: #ff406f;  
	    .head-img{
	      margin: 0 auto;
	      text-align: center;
	      width: 96%;
	      line-height: 48/50rem;
	      .text{
	      	margin-top: 15/50rem;
	      	margin-left: 50/50rem;
	      }
	      .seach{
			 position:absolute;
			 z-index: 6;
			 top:8/50rem;
			 left:5/50rem;
			 width:25/50rem;
			 margin:15/50rem;
			 height:25/50rem;
			 background-color:#FF406F;
			 outline:none;
			 border:0;
			 &>img{
			  width:100%;
			  height: 100%;
			 }
			}
	      .share{
	      	float:left;
	      	outline:none;
	         width:25/50rem;
			 margin:9/50rem;
			 height:25/50rem;
	        background-color:#FF406F;
	        border:0;
	        &>img{
	        margin-top:18/50rem;
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
		.subject-top{
			width: 355/50rem;
			height: 169/50rem;
			background: #fff;
			border-radius: 5/50rem;
		    margin:0 auto;
		    margin-top:-85/50rem;
			padding-bottom:15/50rem;
			box-shadow:0px 0px 10px 1px #bbb;
			display:flex;
		   .subject-button{
		   	  text-align:center;
		   	  padding:10/50rem 10/50rem 10/50rem 0;
		   	  &:nth-child(1){
		   	  	padding-left:10/50rem;
		   	  }
              flex-grow:1;
              &>img{
              	width:100%;
              	height:100%; 
              }
              &>p{
              	margin-top: 5/50rem;
				color:#FFB7C5;
				font-size: 15/50rem;
              }
		    }	
		   }
		.subject-body{
			overflow:hidden;
			width: 355/50rem;
			height: 234/50rem;
			background: #fff;
			border-radius: 5/50rem;
			margin:15/50rem auto;
			box-shadow:0px 0px 10px 1px #bbb;
			.subject-body-txt{
				text-align: center;
				margin-top:10/50rem;
				p{
					font-weight:600;
					font-size: 18/50rem;
					&:nth-child(2){
						margin-top:8/50rem;
						font-size: 10/50rem;
						color: #CDCDCD;
					}
				}
			}
			.subject-body-img{
				img{
				margin-top:17/50rem;
				width: 153/50rem;
				&:nth-child(1){
						margin-left: 16/50rem;
					}
				&:nth-child(2){
						margin-left: 15/50rem;
					}	
				}
			}
		}
      }
	}
.cz{
	width:100%;
	height:47/50rem;
	text-align:center;
	&>span{
		line-height: 47/50rem;
		margin:0 auto;
		font-size:15/50rem;
		&>img{
			margin:0 5px;
		}
	}
		
	}

.czclass{
	width:357/50rem;
	height:169/50rem;
	margin:0 auto;
	border-radius: 5px;
	border:1px solid #ddd;
	&>ul{
		width:310/50rem;
		margin:0 auto;
		&>li{
			width:76/50rem;
			height:85/50rem;
			text-align:center;
			float:left;
			font-size:13/50rem;
			&>img{
				width:30/50rem;
				height:40/50rem;
				margin-top:12/50rem;
			}
			&>p{
				margin-top:5/50rem;
			}
		}
	}
}

</style> 