<template>
	<div>

		<div class="head">
			<div class="search" onclick="window.history.go(-1)">
				<img src="../../../../assets/images/fans/7.png">
				<p>新好友通知</p>
			</div>
		</div>

		<div class="center">
			<div class="content">
				<img src="../../../../assets/images/fans/1.png">
				<div class="name">
					<p>loveliness官方</p>
					<p>女  18-25岁  混合性肌肤</p>
				</div>
				<div class="attention">
					<p>已关注</p>
				</div>
			</div>
		</div>


		<div class="center">
			<div class="content">
				<img src="../../../../assets/images/fans/2.png">
				<div class="name">
					<p>蕊儿</p>
					<p>女  18-35岁</p>
				</div>
				<div class="attention">
					<p>已关注</p>
				</div>
			</div>
		</div>

		<div class="center">
			<div class="content">
				<img src="../../../../assets/images/fans/3.png">
				<div class="name">
					<p>内儿</p>
					<p>女  18-35岁</p>
				</div>
				<div class="attention">
					<p>已关注</p>
				</div>
			</div>
		</div>

		<div class="center">
			<div class="content">
				<img src="../../../../assets/images/fans/4.png">
				<div class="name">
					<p>蜜萌</p>
					<p>女  18-35岁</p>
				</div>
				<div class="attention">
					<p>关注ta</p>
				</div>
			</div>
		</div>



		
	</div>
</template>

<script>
	export default {
	  name: 'inform',
	  data () {
	    return {
	    }
	  }
	}
</script>

<style scoped lang="less">
.head{
	width:100%;
	height:50/50rem;
	background:#ff406f;
	overflow: hidden;
	.search{
		margin:0 auto;
		width:96%;
		line-height:50/50rem;
		text-align: center;
		&>img{
			width:18/50rem;
			height:18/50rem;
			margin-top:15/50rem;
			float: left;
		}
		&>p{
			display: inline-block;
			font-size: 18/50rem;
			color: #fff;
			line-height:25/50rem;
		}
	}

}

.center{
	width:100%;
	height:78/50rem;
	border-top:1px solid #ddd;
	border-bottom:1px solid #ddd;
	margin-top:9/50rem;
	.content{
		width:329/50rem;
		height:48/50rem;
		margin:0 auto;
		margin-top:16/50rem;
		&>img{
			width:48/50rem;
			height:48/50rem;
			float:left;
		}
		.name{
			float:left;
			margin-left:9/50rem;
			&>p{
				line-height:23/50rem;
				font-size:13/50rem;
			}
		}
		.attention{
			width:55/50rem;
			height:21/50rem;
			float:right;
			border-radius:15px;
			border:1px solid #ff406f;
			margin-top:15/50rem;
			&>p{
				font-size:10/50rem;
				color:#ff406f;
				line-height:21/50rem;
				margin-left:9/50rem;
			}	

		}

	}
}

</style>