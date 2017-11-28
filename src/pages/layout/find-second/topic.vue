<template>
	<div class="topic">
	  <Heads/>
	  <div class="findTo_warp">
	  	<div class="subject-top">
			<div class="subject-top-img">
				<img :src="topimg">
			</div>
			<div class="subject-top-tet">
				<p>话题排行榜</p>
			</div>
		</div>
		<div class="subject-body-warp">
		<Commodity/>
	    <router-link tag="div" :to="{name:'shopdetail',query:{title:'产品详情'}}" class="subject-body">
			<div class="subject-body-img">
				<img :src="bodyimg2" alt="">
			</div>
			<div class="subject-body-txt">
				<p>圣罗兰圆管口红</p>
				<img :src="headimg2" alt="" class="img-1">
				<p>LULI</p>
				<img :src="commentimg" alt="" class="img-2">
				<p>552</p>
			</div>
		</router-link>
		<router-link tag="div" :to="{name:'shopdetail',query:{title:'产品详情'}}" class="subject-body single">
			<div class="subject-body-img">
				<img :src="bodyimg3" alt="">
			</div>
			<div class="subject-body-txt">
				<p>春天来抢购</p>
				<img :src="headimg3" alt="" class="img-1">
				<p>SASA</p>
				<img :src="commentimg" class="img-2">
				<p>844</p>
			</div>
		 </router-link>
		</div>
	  </div>
	</div>
</template>
<script>
 import Heads from '../common/heads'
 import Commodity from './find-common/commodity'
	export default{
		name:'topic',
		data(){
			return{
			  topimg:{},
              newsList:{},
              bodyimg2:{},
              bodyimg3:{},
              commentimg:{},
              headimg2:{},
              headimg3:{}
			}
		},
		created(){
	      this.$axios.get(this.HOST+"lovelinessData/index.json")
	     .then(res => {
	     this.newsList=res.data.topic
	     this.topimg=this.newsList[0].topimg
	     this.bodyimg2=this.newsList[2].bodyimg
	     this.bodyimg3=this.newsList[3].bodyimg
	     this.commentimg=this.newsList[0].commentimg
         this.headimg2=this.newsList[2].headimg
         this.headimg3=this.newsList[3].headimg
	     })
	    .catch(error => {
	      console.log(error)
	    })
	   },
		components:{
			Heads,
			Commodity
		}
	}
</script>
<style scoped lang='less'>
	 .topic{
        width:100%;
        height:667/50rem;
        background-color:#fff;
	  }
	.findTo_warp{
      width:95%;
      margin:-80/50rem auto 0;
      	.subject-top{
			width:100%;
			height: 150/50rem;
			border-radius: 5/50rem;
			box-shadow:0px 0px 10px 1px #bbb;
			.subject-top-img{
				margin: 0 auto;
				img{
					width: 100%;
				}	
			}
			.subject-top-tet{
				text-align: center;
				p{
					display: inline-block;
					margin-top: 28/50rem;
					color:#8A8A8A;
					font-family:宋体;
					font-size: 14/50rem;
					font-weight:600;
				}
			}
		}
		.subject-body-warp{
			margin-top:60/50rem;
		 .single{
		 	margin-left:10/50rem;
		 }
		.subject-body{
			width: 172/50rem;
			height: 172/50rem;
			border-radius: 5/50rem;
			float: left;
			margin-bottom: 10/50rem;
			box-shadow:0px 0px 10px 1px #bbb;
			.subject-body-img{
				img{
				width: 100%;	
				}
			}
			.subject-body-txt{
				float: left;
				img{
					position: relative;
					top: 3/50rem;
				}
				.img-1{
					width: 16/50rem;
					margin-left: 5/50rem;
					
				}
				.img-2{
					width: 15/50rem;
					height: 12/50rem;
					position: relative;
					left: 65/50rem;
				}
				p{
					margin-top: 3/50rem;
					font-size: 10/50rem;
					&:nth-child(3),&:nth-child(5){
						display: inline-block;
					}
					&:nth-child(1){
						margin-left: 5/50rem;
					}
					&:nth-child(5){
						position: relative;
						left: 65/50rem;
					}
				}
			}
		}
	  }
	}
</style>

