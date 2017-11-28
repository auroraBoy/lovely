<template>
	<div class="mine">
		<div class="head">
      <div class="head-nav">
        <div class="head-img">
          <p>我的</p>
          <router-link tag='div' :to="{name:'setting',query:{title:'设置'}}">
            <img :src="setimg">
          </router-link>
        </div>
      </div>
    </div>
    <div class="subject-top">
      <div class="subject-top-user"> 
        <img :src="headimg">
        <div>
          <p>Another</p>
          <p>Beautiful&nbsp;&nbsp;lucky</p>
        </div>
      </div>
      <div class="subject-top-attention">
        <router-link :to="{name:'attention',query:{title:'关注'}}">关注</router-link>
        <router-link :to="{name:'fans',query:{title:'粉丝'}}">粉丝</router-link>
      </div>
    </div>
    <div class="subject-boby">
      <!-- ../../assets/mine-images/mine-message.png -->
     <router-link tag='p' :to="{path:'/news'}">
      <img :src="newsimg">
       <a href="javascript:;">消息</a>
     </router-link>
     <router-link tag='p' :to="{path:'/collect'}">
      <img :src="collectimg">
       <a href="javascript:;">收藏</a>
     </router-link :to="{path:'/'}">
     <router-link tag='p' :to="{name:'sign',query:{title:'每日一签'}}">
      <img :src="signimg">
       <a href="javascript:;">签到</a>
     </router-link >
    </div>
     <Foots/>
	</div>
</template>
<script>
  import Foots from './common/foots'
	export default{
		name: 'mine',
		data(){
			return{
        headimg:{},
        newsimg:{},
        signimg:{},
        setimg:{},
        collectimg:{}
			}
		},
		components:{
          Foots
		},
    created(){
      this.$axios.get(this.HOST+"lovelinessData/index.json")
     .then(res => {
     this.headimg=res.data.mineimg.headimg
     this.newsimg=res.data.mineimg.newsimg
     this.signimg=res.data.mineimg.signimg
     this.setimg=res.data.mineimg.setimg
     this.collectimg=res.data.mineimg.collectimg
     })
    .catch(error => {
      console.log(error)
    })
   }
	}
</script>
<style scoped lang="less">
	.mine{
     width: 100%;
    height: 14rem;
    background: #fff;

    .head{
      width: 100%;
      height: 155/50rem;
      background: #ff406f;

      .head-nav{
        width: 98%;
        height: 48/50rem;
        margin: 0 auto;
        position:relative;
       
        &>.head-img{
          margin: 0 auto;
          text-align: center;
          width: 96%;
          line-height: 48/50rem;
          position: relative;
          p{
            display: inline-block;
            font-size: 23/50rem;
            font-family:'苹方中等';
            color:rgba(255,255,255,.7);
          }
          &>div{
            float:right;
            &>img{
            height: 25/50rem;
            margin-top:15/50rem;
            float: right;
            }
          }
          
        }
      }
    }
    .subject-top{
      width: 355/50rem;
      height: 169/50rem;
      background: #fff;
      border-radius: 5px;
      position: absolute;
      top: 82/50rem;
      right: 10/50rem;
      padding-top:20/50rem;
      box-sizing:border-box;
      box-shadow:0 0 10/50rem 5/50rem rgba(0,0,0,.1);
      .subject-top-user{
           position:relative;
           padding-left:2rem;
           padding-bottom:50px;
           &>div{
            &>p{
              font-size:14/50rem;
              color:#727272;
              margin-bottom:10/50rem;
            }
           }
           &>img{
            width:70/50rem;
            height:70/50rem;
            border-radius:10/50rem;
            position:absolute;
            top:-30/50rem;
            left:10/50rem;
           }
      }
      .subject-top-attention{
        box-sizing:border-box;
        &>a{
          display:inline-block;
          width:48%;
          height:40/50rem;
          line-height:40/50rem; 
          text-align:center;
          color:#787878;
          &:hover{
            color:#ff406f;
          }
        }
      }
    }
    .subject-boby{
      width: 355/50rem;
      height: 70/50rem;
      background: #fff;
      border-radius: 5px;
      margin-top:35/50rem;
      display:flex;
      position: absolute;
      top: 243/50rem;
      right: 10/50rem;
      box-shadow:0 0 10/50rem 1/50rem rgba(0,0,0,.1);
      box-sizing:border-box;
      text-align:center;
      padding-top:17/50rem;
      &>p{
        flex-grow:1;
        
        &>img{
          width:0.5rem;
          height:0.5rem;
          margin-left:3/50rem;
          }
          &>a{
            display:block;
          }
        }
    }
  }
</style>