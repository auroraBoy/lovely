<template>
	<div>
		<Headss/>
		<P>绑定手机号，获得更周全的服务</P>

		<div class="input">
			<div>
				<span>手机号</span>
				<input ref="number" type="text" name="" placeholder="手机号">
			</div>
			
			<div>
				<input ref="code" type="text" name="" placeholder="验证码">
				<a v-on:click="submit" href="javascript:;">
					获取验证码
				</a>
				<span v-if="codeStatus">手机号码格式不正确</span>
			</div>
			
		</div>

		<div class="logins">
			<a  href="javascript:;">
				提交
			</a>
		</div>

		<div class="forget">
			<a href="javascript:;">
				绑定第三方
			</a>
			<div class="method">
				<img src="../../../../assets/images/login/4.png">
				<img src="../../../../assets/images/login/5.png">
				<img src="../../../../assets/images/login/6.png">
			</div>
		</div>
		
	</div>
</template>

<script>
   import Headss from "../../common/headss"
	export default {
	  name: 'bindphone',
	  data() {
	    return {
           codeStatus:false
	    }
	  },
	  components:{
	  	Headss
	  },
	  methods:{
	  	submit:function(){
	  		var number= this.$refs.number.value;
            this.codeStatus = !/^1[3|4|5|8][0-9]\d{4,8}$/.test(number);
            
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

p{
	text-align:center;
	margin-top:55/50rem;
	font-size:14/50rem;
}

.input{
	width:276/50rem;
	height:87/50rem;
	margin:0 auto;
	margin-top:43/50rem;
	&>div{
		position: relative;
		border-bottom:1px solid #a6a6a6;
		&>span{
			margin-right:35/50rem;
		}
		&>input{
			width:190/50rem;
			height:23/50rem;
			border:none;
		    background: none;
		    outline: none;
		    font-size:14/50rem;
		    color:#a6a6a6;
		}
		&>a{
			display: inline-block;
			border:2px solid #808080;
			padding:3/50rem;
			border-radius:12/50rem;
			font-size:10/50rem;
			color:#a6a6a6;
			margin-bottom: 4/50rem;
		}
		
	}
	&>div:nth-child(2){
		margin-top:40/50rem;
		position: relative;
		&>span{
			position: absolute;
			top:-0.6rem;
			left:0px;
		}
	}

}

.logins{
		margin:0 auto;
		text-align:center;

		&>a{
			background:#ff406f;
			padding:11/50rem 113/50rem;
			display:inline-block;
			font-size:18/50rem;
			color:#fff;
			border-radius:10/50rem;
			margin-top:40/50rem;
			box-shadow:0 2px 25px #ff406f;
	}		
}
		
.forget{
	margin-top:74/50rem;
	text-align:center;
	color:#afafaf;
	span{
		margin:0 36/50rem;
	}
	.method{
		margin-top:33/50rem;
		&>img{
		width:23/50rem;
		height:23/50rem;
		margin:0 18/50rem;
		}
	}
	
}
</style>