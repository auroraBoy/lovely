<template>
	<div class="intelligent">
		<Heads/>
	  <div class="findTo_warp">
	  	<div class="subject-top">
			<div class="subject-top-img">
				<img :src="topimg">
			</div>
		</div>
	  <div class="subject-body-warp">
		<div class="subject-body" v-for="(item,key) in newsList" key="key">
			<div class="subject-body-txt">
				<router-link :to="{path:'/author'}">
				<img :src="item.headimg" alt="">
				</router-link>
				<p>{{item.name}}</p>
				<div class="subject-body-txt-1">
					<p>关注ta</p>
				</div>
			</div>
			<div class="subject-body-img">
				<img :src="item.img1" alt="">
				<img :src="item.img2" alt="">
			</div>
		</div>
	   </div>
	  </div>
    </div>
</template>
<script>
    import Heads from '../common/heads'
	export default{
		name:'intelligent',
		data(){
			return{
              topimg:{},
              newsList:{}
			}
		},
		components:{
			Heads
		},
		created(){
	      this.$axios.get(this.HOST+"lovelinessData/second.json")
	     .then(res => {
	     this.newsList=res.data.intelligent
	     this.topimg=res.data.shoptop
	      console.log(this.topimg);
	     })
	    .catch(error => {
	      console.log(error)
	    })
	   }
	}
</script>
<style scoped lang='less'>
    .intelligent{
    	width:100%;
        height:775/50rem;
        background-color:#fff;
    }
	.findTo_warp{
	  width:92.5%;
      margin:-80/50rem auto 0;
		.subject-top{
			width:100%;
			background: #fff;
			border-radius: 5/50rem;
			box-shadow:0px 0px 10px 1px #bbb;
			.subject-top-img{
				margin: 0 auto;
				height: 150/50rem;
				img{
					width: 100%;
					height: 100%;
				}	
			}
		}
		.subject-body-warp{
			margin-top:25/50rem;
		.subject-body{
			width: 355/50rem;
			height: 246/50rem;
			background: #fff;
			border-radius: 5/50rem;
			margin-bottom: 20/50rem;
			box-shadow:0px 0px 10px 1px #bbb;
			.subject-body-txt{
				img{
					width: 42/50rem;
					margin-left:8/50rem;
					margin-top: -10/50rem; 
				}
				p{
					display: inline-block;
					margin-left: 8/50rem;
					color: #9B9B9B;
				}
				div{
					width: 48/50rem;
					height: 18/50rem;
					border-radius:8/50rem;
					border:#9B9B9B  solid 1px;
					float: right;
					position: relative;
					top: 15/50rem;
					right: 14/50rem;
					p{
						overflow: auto;
						text-align: center;
						font-size: 10/50rem;
						color: #9B9B9B;
						line-height: 18/50rem;
					}
				}
			}

			.subject-body-img{
				img{
					margin-top: 20/50rem;
					width: 158/50rem;
					&:nth-child(1){
						margin-left: 14/50rem;
					}
					&:nth-child(2){
						margin-left: 7/50rem;
					}
				}
			}
		}
	  }	
	}
</style>
