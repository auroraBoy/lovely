<template>
	<div>

		<div class="head">
			<div class="search" onclick="window.history.go(-1)">
				<img src="../../../../assets/images/fans/7.png">
				<p>话题消息通知</p>
			</div>
		</div>

		<div class="center">
			<div class="content">
				<img src="../../../../assets/images/fans/1.png">
				<div class="name">
					<p>YSL大牌彩妆使用小技巧</p>
				</div>
			</div>
		</div>

		<div class="center">
			<div class="content">
				<img src="../../../../assets/images/fans/2.png">
				<div class="name">
					<p>那些年我们追过的女神</p>
				</div>
			</div>
		</div>


		



		
	</div>
</template>

<script>
	export default {
	  name: 'topic',
	  data () {
	    return {
	    	
	      msg: 'h啊哈哈哈'
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
			
				

	}
}

</style>