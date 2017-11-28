<template>
	<div>

		<div class="head">
			<div class="search" onclick="window.history.go(-1)">
				<img src="../../../../assets/images/fans/7.png">
				<p>loveliness客服</p>
				<img src="../../../../assets/chat/1.png">
			</div>
		</div>

		<div class="chat">

			<div class="contact2">
				<img src="../../../../assets/chat/8.png">
				<p>您好</p>
			</div>


			<div class="contact">
				<img src="../../../../assets/chat/9.png">
				<p>你好</p>
			</div>
			
		</div>

		
		<div class="footer">
			<div class="anniu">
				<img src="../../../../assets/chat/6.png">
				<span>|</span>
				<img src="../../../../assets/chat/7.png">
				<input type="text" name="" placeholder="请输入文字">
				<button>发送</button>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {
	  name: 'airlines',
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
		&>img:nth-child(3){
			width:25/50rem;
			height:25/50rem;
				float:right;
			}
		&>p{
			display: inline-block;
			font-size: 18/50rem;
			color: #fff;
			line-height:25/50rem;
		}

	}

}

.chat{
	.contact{
		width:94%;
		height:40/50rem;
		margin:34/50rem auto;
		&>img{
		width:40/50rem;
		height:40/50rem;
		}
		&>p{
			display:inline-block;
			text-align:center;
			width:67/50rem;
			line-height:25/50rem;
			background:url(../../../../assets/chat/3.png) no-repeat;
			background-size:67/50rem 25/50rem;

		}
	}
	.contact2{
		width:94%;
		height:40/50rem;
		margin:34/50rem auto;
		&>img{
		width:40/50rem;
		height:40/50rem;
		float:right;
		}
		&>p{
			display:inline-block;
			text-align:center;
			width:67/50rem;
			line-height:25/50rem;
			background:url(../../../../assets/chat/5.png) no-repeat;
			background-size:67/50rem 25/50rem;
			float:right;

		}

	}
	
}


.footer{
	width:100%;
	height:44/50rem;
	position: fixed;
	bottom:0;
	font-size:9/50rem;
	color:#ccc;
	.anniu{
		width:96%;
		margin-top:11/50rem;
		line-height:23/50rem;
		margin:0 auto;
		&>img{
			width:17/50rem;
			height:17/50rem;
			display:inline-block;
			margin-top:5/50rem;
		}
		&>span{
			display:inline-block;
			line-height:17/50rem;
		}
		&>input{
				width:214/50rem;
				height:23/50rem;
				border-radius:6px;
				border:2px solid #ccc;
			}
		&>button{
			width:54/50rem;
			height:25/50rem;
			border:2px solid #ccc;
			border-radius:6px;
			background:#fff;
		}
	}
}
</style>