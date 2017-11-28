<template>
	<div class="subject-body-warp">
	<router-link tag="div" :to="{name:'shopdetail',query:{title:'产品详情'}}" class="subject-body">
		<div class="subject-body-img">
			<img :src="bodyimg0" alt="">
		</div>
		<div class="subject-body-txt">
			<p>迪奥超实用妆九色眼影盘</p>
			<img :src="headimg0" alt="" class="img-1">
			<p>Asura</p>
			<img :src="commentimg" alt="" class="img-2">
			<p>442</p>
		</div>
	</router-link>
	<router-link tag="div" :to="{name:'shopdetail',query:{title:'产品详情'}}" class="subject-body single">
		<div class="subject-body-img">
			<img :src="bodyimg1" alt="">
		</div>
		<div class="subject-body-txt">
			<p>MAKE UP FOR 单色眼影</p>
			<img :src="headimg1" alt="" class="img-1">
			<p>小仙</p>
			<img :src="commentimg" alt="" class="img-2">
			<p>421</p>
		</div>
	</router-link>
	</div>
</template>
<script>
	export default{
		name:'commodity',
		data(){
			return{
               newsList:{},
               bodyimg0:{},
               bodyimg1:{},
               commentimg:{},
               headimg0:{},
               headimg1:{}
			}
		},created(){
	      this.$axios.get(this.HOST+"lovelinessData/index.json")
	     .then(res => {
	     this.newsList=res.data.topic
	     this.bodyimg0=this.newsList[0].bodyimg
	     this.bodyimg1=this.newsList[1].bodyimg
	     this.commentimg=this.newsList[0].commentimg
         this.headimg0=this.newsList[0].headimg
         this.headimg1=this.newsList[1].headimg
	     })
	    .catch(error => {
	      console.log(error)
	    })
	   },
	}
</script>
<style scoped lang='less'>
	.subject-body-warp{
		 .single{
		 	margin-left:10/50rem;
		   }
		.subject-body{
			width: 172/50rem;
			height: 172/50rem;
			border-radius: 5/50rem;
			background-color: #fff;
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
</style>