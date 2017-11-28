<template>
	<div class="author">
		<Headss/>
		<div class="findTo_warp">
		<div class="subject-top">
			<div class="subject-top-img">
				<img src="../../../../assets/images/blogger/1.png">
				<p>Another</p>
				<p>217粉丝</p>
				<div class="warp">
				<p>和ta聊天</p>
				<p>关注ta</p>
				</div>
			</div>
		</div>
		<div class="subject-body">
			<div class="subject-body-img">
				<img src="../../../../assets/images/blogger/2.png">
				<div>
					<p>今日推荐</p>
					<img src="../../../../assets/images/blogger/4.png" alt="">
					<p>底妆全靠它  春日幻彩</p>
				</div>
			</div>
		</div>
		<div class="subject-body">
			<div class="subject-body-img">
				<img src="../../../../assets/images/blogger/2.png">
				<div>
					<p>今日推荐</p>
					<img src="../../../../assets/images/blogger/4.png" alt="">
					<p>底妆全靠它  春日幻彩</p>
				</div>
			</div>
		</div>
	</div>
 </div>
</template>
<script>
 import Headss from '../../common/Headss'

export default {
  name: 'author',
  data(){
  	return{
	}
  },
  components:{
  	Headss
  }
}
</script>
<style scoped lang="less">
	.author{
		width: 100%;
		height: 807/50rem;
		margin: 0 auto;
	.findTo_warp{
	  width:95%;
      margin:-80/50rem auto 0;
		.subject-top{
			width: 100%;
			height: 150/50rem;
			background: #fff;
			border-radius: 5/50rem;
			box-shadow:0px 0px 10px 1px #bbb;
			.subject-top-img{
				text-align: center;
              
				img{
					width: 72/50rem;
					margin-top: 8/50rem;
				}	 .warp{
               	width: 100%;
              
					p{
						width:70/50rem;
					    height: 23/50rem;
						border-radius:18/50rem;
						border:#9B9B9B  solid 1px;
						display: block;
						float: left;
						margin-left: 70/50rem;
						overflow: auto;
						text-align: center;
						font-size: 15/50rem;
						font-family:楷体;
						color: #9B9B9B;
						line-height: 23/50rem;
					}	
				}
			}
		}
		.subject-body{
			width: 100%;
			height: 198/50rem;
			background: #fff;
			border-radius: 5/50rem;
			margin-top: 15/50rem;
			box-shadow:0px 0px 10px 1px #bbb;
			.subject-body-img{
				text-align: center;

				img{

					height: 160/50rem;
					margin-top: 8/50rem;
				}
				p{
					display: inline-block;
					overflow: auto;
					text-align: center;
					font-size: 15/50rem;
					font-family:楷体;
					color: #212020;
					line-height: 18/50rem;
				}
				div{
					float: left;
					margin-top: 5/50rem;
					margin-left: 10/50rem;
					img{
							&:nth-child(2){
							height: 10/50rem;
							position: relative;
							top: -4/50rem;
						}
					}
				}
			}
		}
	  }
	}
</style>