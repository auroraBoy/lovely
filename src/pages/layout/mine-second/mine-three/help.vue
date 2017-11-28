<template>
	<div class="vessel">
		<div class="head">
			<div class="head-nav">
				<div class="head-img">
					<img src="../../../../assets/images/goods/go.png" onclick="window.history.go(-1)">
					<p>帮助</p>
				</div>
			</div>
		</div>
		<div class="subject-body">
			<div class="subject-body-txt">
					<p><a href="#">功能介绍</a></p>
					<p><a href="#">常见问题</a></p>
					<p><a href="#">成长值记录与原则</a></p>
					<p><a href="#">loveliness认证说明</a></p>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'help',
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
		.subject-body{
			width: 100%;
			height: 133/50rem;
			background: #fff;
			margin-top: 44/50rem;
			box-shadow:0px 0px 5px 1px #bbb;
			text-align: center;
			.subject-body-txt{
				text-align: left;
				font-size: 14/50rem;
				font-family:宋体;
				color: #C9C9C9;
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
				}
			} 
		}
	}
</style>