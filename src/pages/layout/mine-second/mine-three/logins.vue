<template>
	<div :class="{log}">
		<div class="logo">
			<div class="logo-img">
				<img :src="loveimg">
			</div>	
		</div>

		<div class="input">
			<div>
				<input ref="uname" type="text" name="" placeholder="账号">
			</div>
			<div>
				<input ref="upwd" type="text" name="" placeholder="密码">
			</div>
			
		</div>

		<div class="logins">
			<a v-on:click="login" href="javascript:;">
				登录
			</a>
		</div>

		<div class="forget">
			<a href="javascript:;">
				忘记密码？
				<span>|</span>
				<router-link :to="{path:'/reg'}">立即注册></router-link>
			</a>
			<div class="method">
				<img :src="qqimg">
				<img :src="weixinimg">
				<img :src="weiboimg">
			</div>
		</div>
		
	</div>
</template>

<script>
import qs from "qs"
	export default {
	  name: 'logins',
	  data() {
	    return {
	      isLogin:false,
	      loginStatus: false,
	      log:false,
	      loveimg:{},
	      peopleimg:{},
	      lockimg:{},
	      qqimg:{},
	      weixinimg:{},
	      weiboimg:{}
	    }
	  },
	   created(){
      this.$axios.get(this.HOST+"lovelinessData/index.json")
     .then(res => {
     this.loveimg=res.data.loginimg.loveimg
     this.peopleimg=res.data.loginimg.peopleimg
     this.lockimg=res.data.loginimg.lockimg
     this.qqimg=res.data.loginimg.qqimg
     this.weixinimg=res.data.loginimg.weixinimg
     this.weiboimg=res.data.loginimg.weiboimg
     })
    .catch(error => {
      console.log(error)
    })
   },
	  methods:{
	  	//登录功能
         login:function(){
         	this.isNull();
         	if(this.loginStatus){
         		console.log("格式正确")

         		this.select();
         	}else{
         		console.log("用户名和密码不能为空")
         	}
         },
         //查询数据库功能
         select:function(){

             var uname=this.$refs.uname.value;
           this.$axios.post('http://localhost:3000/regester',qs.stringify({
           	username:uname
           })).then(response => {
           	if(response.data.length==0){
           		console.log("没有这个人")
           		return
           	}else{
           		//调用方法判断密码是否正确
                   this.isRight(response.data);
           	}

        }, response => {
            console.log("error");
        });
         },
         //判断密码是否正确
         isRight:function(password){
              var upwd = this.$refs.upwd.value;
              for(var i = 0;i <password.length;i++){
              	for(var j in password[i]){
              		if(password[i]['pwd']==upwd){
                         this.isLogin=true;
              		}else{
              			this.isLogin = false;
              		}
              	}
              }
              console.log(this.isLogin)
              if(this.isLogin){
                 console.log("登录成功")
                 this.log = true;
                 setTimeout(function(){
                 	window.location.href="/#/index"
                 },1000) 
              }else{
                 console.log("用户名或密码错误")
              }
         },
         //判断用户名和密码是否为空
         isNull:function(){
         	var uname=this.$refs.uname.value;
         	var upwd=this.$refs.upwd.value;
         	this.loginStatus = !(/^\s*$/g.test(uname)||/^\s*$/g.test(upwd))
         	//
         }
	  }
	}
</script>

<style scoped lang="less">
.logo{
	width:100%;
	height:229/50rem;
	overflow: hidden;
	.logo-img{
		width:87/50rem;
		height:77/50rem;
		margin:0 auto;
		margin-top:67/50rem;
		&>img{
		width:100%;
		}
	}
	
}

.input{
	width:276/50rem;
	height:87/50rem;
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
		    font-size:14/50rem;
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
			margin-top:52/50rem;
			box-shadow:0 2px 25px #ff406f;
	}		
}
		
.forget{
	margin-top:92/50rem;
	text-align:center;
	color:#afafaf;
	span{
		margin:0 36/50rem;
	}
	.method{
		margin-top:31/50rem;
		&>img{
		width:23/50rem;
		height:23/50rem;
		margin:0 18/50rem;
		}
	}
	
}
.log{
	position: relative;
	.mark{
		position: absolute;
		top: 283/50rem;
		left: 137/50rem;
		height: 100/50rem;
		width: 100/50rem;
		border-radius:50%;
		background: #ff406f;
		transition: 1s linear;
  		-webkit-transition: -webkit-transform 1s linear;
	    transition: transform 1s linear;
	    -webkit-animation:mymove 1.2s linear;
	}
	.mark{
		transform:scale(12);
	    -webkit-transform:scale(12);
	}    
}	
</style>







