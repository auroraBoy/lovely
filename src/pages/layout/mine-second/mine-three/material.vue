<template>
	<div class="vessel">
		<div class="head">
			<div class="head-nav">
				<div class="head-img">
					<img src="../../../../assets/images/goods/go.png" onclick="window.history.go(-1)">
					<p>个人资料</p>
				</div>
			</div>
		</div>
		<div class="subject-top">
			<p>完善个人资料可以获得10个成长值哦~</p>
		</div>
		<div class="subject-body">
			<div class="subject-body-txt">
					<p>
						<a href="#">头像</a>
						<a href="#"><img src="../../../../assets/images/material/1.png" alt=""></a>
					</p>
					<p>
						<a href="#">昵称</a>
						<span>Another</span>
					</p>
			</div>
		</div>
		<div class="subject-body a">
			<div class="subject-body-txt">
					<p>
						<a href="#">性别</a>
						<span>女</span>
					</p>
					<p>
						<a href="#">生日</a>
						<span>生日惊喜年年有</span>
					</p>
					<p>
						<a href="#">肤质</a>
						<span>贴心内容推荐多</span>
					</p>
					<p>
						<a href="#">兴趣</a>
						<span><a href="#">选择你的兴趣</a></span>
					</p>
			</div>
		</div>
		<div class="subject-body">
			<div class="subject-body-txt">
					<p>
						<a href="#">loveliness暗号</a>
						<span>5552loveliness</span>
					</p>
					<p>
						<a href="#">注册日期</a>
						<span>2017-2-20</span>
					</p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'material',
  data(){
  	return{
	}
  }
}
</script>
<style scoped lang="less">
.vessel{
		width: 100%;
		height: 667/50rem;
		margin: 0 auto;
		.head{
			width: 100%;
			height: 50/50rem;
			background: #ff406f;
			.head-nav{
				width: 98%;
				height: 48/50rem;
				margin: 0 auto;
				.head-img{
					margin: 0 auto;
					text-align: center;
					width: 96%;
					line-height: 48/50rem;

					p{
						display: inline-block;
						font-size: 17/50rem;
						color: #fff; 
					}
					img{
						margin-top:15/50rem;
						height: 15/50rem;
						&:nth-child(1){
							line-height: 48/50rem;
							float: left;
						}
						&:nth-child(3){
							line-height: 48/50rem;
							float: right;
						}
					}
				}
			}
		}
		.subject-top{
			width: 100%;
			height: 44/50rem;
			text-align: center;
			font-size: 12/50rem;
			line-height: 44/50rem;
			color: #9C9C9C;
		}
		.subject-body{
			width: 100%;
			height: 70/50rem;
			background: #fff;
			box-shadow:0px 0px 5px 1px #bbb;
			.subject-body-txt{
				font-size: 14/50rem;
				font-family:宋体;
				color: #8E8E8E;
				p{
					display: inline-block;
					width: 375/50rem;
					height: 33/50rem;
					line-height: 33/50rem;
					border-top: 1px solid #F3F3F3;
					a{
						margin-left: 27/50rem;
					}
					&:nth-child(1){
						border:none;
					}
					span{
						float: right;
						margin-right: 27/50rem;
					}
					img{
						float: right;
						line-height: 33/50rem;
						width: 30/50rem;
						margin-top: 1.5/50rem;
						margin-right: 27/50rem;
					}
				}
			} 
		}
		.a{
			height: 135/50rem;
			margin-top: 10/50rem;
			margin-bottom: 10/50rem;
		}
	}
</style>