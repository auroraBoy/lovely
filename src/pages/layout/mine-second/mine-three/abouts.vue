<template>
	<div>
        <Headss/>
		<div class="about">
			<p>关于loveliness</p>
			<div class="warp">
			<div class="logo">
				<div>
					<img src="http://mraur.oss-cn-beijing.aliyuncs.com/img/fans1.png">
				</div>
				<p>当前版本：V1.0.0版</p>
			</div>
			<div class="share">
				<p>
					分享给朋友
				</p>
				<p>
					免责声明
				</p>
			</div>
			</div>
		</div>


		
	</div>
</template>

<script>
   import Headss from "../../common/headss"
	export default {
	  name: 'abouts',
	  data () {
	    return {
	    	
	    }
	  },
	  components:{
	  	Headss
	  }
	}
</script>

<style scoped lang="less">

.about{
	color:#808080;
	margin:0 auto;
	&>p{
		font-size:14/50rem;
		text-align:center;
		line-height:44/50rem;

	}
	.warp{
		margin-top: -140/50rem;
		height: 665/50rem;
		background-color: #fff;
	.logo{
		height:211/50rem;
		border-top:1px solid #ddd;
		border-bottom:1px solid #ddd;
		&>p{
		font-size:14/50rem;
		text-align:center;
		line-height:26/50rem;
		}
		div{
			margin:0 auto;
			width:94/50rem;
			height:94/50rem;
			margin-top:35/50rem;
			&>img{
			
			width:94/50rem;
			}
		}
		
	}
	.share{
		margin-top:17/50rem;
		border-bottom:1px solid #ddd;
		border-top:1px solid #ddd;
		&>p{
			line-height:33/50rem;
			margin-left:6%;
			font-size:14/50rem;
		}
	}
	}
}

</style>