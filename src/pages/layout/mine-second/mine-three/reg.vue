<template>
	<div class="register">
		<div class="return">
			<img src="../../../../assets/home-images/back.png" onclick="window.history.go(-1)">
		</div>
		<div class="register-message">
			<div class="input">
				<div>
					<input v-on:keyup="isUname" ref="uname" type="text" name="" placeholder="账号">
					<!-- <span style="color:#ff406f" v-if="!unamestatus">用户名6~18位，必须以字母开头，后面可以有字母、数字、下划线。</span> -->
				</div>
				<div>
					<input v-on:keyup="isUpwd" ref="upwd" type="text" name="" placeholder="密码">
					<span style="color:#ff406f" v-if="!upwdstatus">密码  8~24位  必须有字母</span>
				</div>
				<div>
					<input ref="rpwd" type="text" name="" placeholder="重新输入">
				</div>
			
		</div>
	  </div>
	  <div class="Idcode">
	  	<input ref="code" type="" name=""><a v-on:click="makeCode" href="javascript:;">{{code}}</a>
	  </div>
	  <div class="logins">
			<a v-on:click="register" href="javascript:;">
				注册
			</a>
		</div>
	</div>
</template>

<script>
import qs from "qs"
	export default {
	  name: 'register',
	  data() {
	    return {
	    	unamestatus:false,
	    	upwdstatus:false,
	    	rpwdstatus:false,
	    	codestatus:false,
	    	code:""
	    }
	  },
	  created:function(){
	  	this.makeCode();
	  },
	  //事件处理方法
	  methods:{
         register:function(event){
         	this.isUname()
         	this.isUpwd()
         	this.isRpwd()
         	this.isCode()
	          var name=this.unamestatus
	          var pwd=this.upwdstatus
	          var rpwd=this.rpwdstatus
	          var code=this.codestatus
          if(name&&pwd&&rpwd&&code){
          	console.log("可以注册");
          	this.select();
          }else{
          	console.log("有哪里出错了")
          }
	  	},
	  	isUname:function(){
	  		var uname=this.$refs.uname.value;
	  		this.unamestatus=/^[a-z]\w{5,17}$/i.test(uname)
	  	},
	  	isUpwd:function(){
	  		var upwd=this.$refs.upwd.value;
	  		this.upwdstatus=/^\S{8,24}$/.test(upwd) && /[a-z]/.test(upwd)
	  	},
	  	isRpwd:function(){
	  		var upwd=this.$refs.upwd.value;
	  		var rpwd=this.$refs.rpwd.value;
	  		if(upwd==rpwd){
	  			this.rpwdstatus=true
	  		}else{
	  			this.rpwdstatus=false
	  		}
	  	},
	  	//验证码
	  	isCode:function(){
           var code=this.$refs.code.value.toLocaleUpperCase();
            if(code==this.code){
            	this.codestatus=true;
            }else{
            	this.codestatus=false;
            }
	  		
	  	},
	  	//生成验证码
	  	makeCode:function(){
	  		this.code="";
	  		var str=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
			     var strlength=4;
			           for(var i=0;i<strlength;i++){
			           	 var index = Math.floor(Math.random()*36);
			           	this.code+=str[index]
			           }
	  	},
	  	//查询功能
	  	select:function(){

             var uname=this.$refs.uname.value;
           this.$axios.post('http://localhost:3000/login',qs.stringify({
           	username:uname
           })).then(response => {
           	if(response.data.length==0){
           		this.reg();
           		alert("注册成功")
           	}else{
           		alert("用户名已存在")
           	}
            // get body data
            // this.someData = response.body;

        }, response => {
            console.log("error");
        });
	  	},
	  	//注册功能
	  	reg:function(){
	  		var uname=this.$refs.uname.value;
	  		var upwd=this.$refs.upwd.value;
           this.$axios.post('http://localhost:3000/regester',qs.stringify({
           	username:uname,
           	password:upwd
           })).then(response => {
             console.log(response.data);
            // get body data
            // this.someData = response.body;

        }, response => {
            console.log("error");
        });
	  	}
	  }
	}
</script>

<style scoped lang="less">
.register{
	padding:10/50rem 20/50rem 0 20/50rem;
	.return{
		&>img{
            width:18/50rem;
            height:18/50rem;
		}
	}
	.register-message{
		margin-top:120/50rem;
		.input{
	width:276/50rem;
	margin:0 auto;
	&>div{
		padding-left: 22/50rem;
		position: relative;
		&>input{
			width:248/50rem;
			height:23/50rem;
			border:none;
			border-bottom: 1px solid #a6a6a6;
			margin-left:7/50rem;
		    background: none;
		    outline: none;
		    font-size:15px;
		    color:#a6a6a6;
		}
		&:before{
			content:"";
			width:22/50rem;
			height:22/50rem; 
			position: absolute;
			top:0px;
			left:0px;
			background:url(../../../../assets/images/login/2.png);
			background-size: 22/50rem;

		}
		
	}
	&>div:nth-child(2){
		margin-top:37/50rem;
		&:before{
			content:"";
			width:22/50rem;
			height:22/50rem; 
			position: absolute;
			top:0px;
			left:0px;
			background:url(../../../../assets/images/login/3.png);
			background-size: 22/50rem;

		}

	}
	&>div:nth-child(3){
		margin-top:37/50rem;
		&:before{
			content:"";
			width:22/50rem;
			height:22/50rem; 
			position: absolute;
			top:0px;
			left:0px;
			background:url(../../../../assets/images/login/3.png);
			background-size: 22/50rem;
		}
		
	}
		

}
	}
	.Idcode{
		&>input{
			width:125/50rem;
			height:23/50rem;
			border:none;
			border-bottom: 1px solid #a6a6a6;
			margin-left:60/50rem;
			margin-top:25/50rem;
		    background: none;
		    outline: none;
		    font-size:15px;
		    color:#a6a6a6;
		}
		&>a{
			display: inline-block;
			width: 1.3rem;
			height: 0.6rem;
			margin-left: 0.5rem;
			padding: 0rem 0.2rem 0.2rem;
			background: #ff406f;
			line-height: 0.8rem;
			color: #fff;
			font-size: 20px;
			text-align: center;
			letter-spacing:2px;
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
			margin-top:175/50rem;
			box-shadow:0 2px 25px #ff406f;

	}		
}
}
</style>