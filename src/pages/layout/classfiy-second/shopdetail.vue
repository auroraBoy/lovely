<template>
	<div class="shopdetail">
		<Headss/>
	   <div class="findTo_warp">
	     <div class="shop_warp">
	     	<div class="img">
	     		<img :src="bigimg">
	     	</div>
	     	<div class="text">
	     		<h2>{{title}}</h2>
	     		<p>{{pirce}}</p>
	     		<p>产品说明书：</p>
	     		<p>功效：{{effect}}</p>
	     		<p>适用肤质：{{apply}}</p>
	     		<p>针对：{{aim}}  </p>
	     		<p>主要科技/成分:{{ingredient}}</p>
	     	</div>
	     </div>
	     <h3>推荐购买</h3>
	     <div class="recommend">
	     	<div class="shops">
	     		<div class="shop-left">
            <img :src="smallimg">
          </div>
          <div class="shop-desc">
            <h2>天天网</h2>
            <p>价格：￥ <span>{{pirce1}}</span></p>
            <p>市场价：￥ <span>{{pirce2}}</span></p>
          </div>
          
          <div class="shop-right">
             <p><span>{{num}}</span>人评价</p>  
          </div>
	     	</div>
        <div class="title-warp">
        <router-link tag='div' :to="{path:'/shopdetail/remark'}">口碑点评</router-link>
        <router-link tag='div' :to="{path:'/shopdetail/theme'}">相关话题</router-link>
        <router-link tag='div' :to="{path:'/shopdetail/products'}">相识产品</router-link>
        </div>      <!-- 用户评价 -->
        <router-view></router-view>
	     </div>
	   </div>
	</div>
</template>
<script>
     import Headss from '../common/Headss'
	export default{
		name:'shopdetail',
		data(){
			return{
        value5:4.5,
        bigimg:{},
        title:{},
        pirce:{},
        pirce1:{},
        pirce2:{},
        num:{},
        effect:{},
        apply:{},
        aim:{},
        ingredient:{},
        smallimg:{}
			}
		},
		components:{
		  Headss
		},
    created(event){
        this.$axios.get(this.HOST+"lovelinessData/shopdetail.json")
       .then(res => {
       var obj=this.$route.query.id
       this.bigimg=res.data[obj].bigimg
       this.title=res.data[obj].title
       this.pirce=res.data[obj].pirce
       this.effect=res.data[obj].effect
       this.apply=res.data[obj].apply
       this.aim=res.data[obj].aim
       this.ingredient=res.data[obj].ingredient
       this.smallimg=res.data[obj].smallimg
       this.pirce1=res.data[obj].pirce1
       this.pirce2=res.data[obj].pirce2
       this.num=res.data[obj].num

       })
      .catch(error => {
        console.log(error)
      })
	}
}
</script>
<style scoped lang='less'>
     .head{
      width: 100%;
      height: 155/50rem;
      background: #ff406f; 
      overflow: hidden; 
    .head-img{
      margin: 0 auto;
      text-align: center;
      width: 96%;
      line-height: 48/50rem;
      .goback{
        outline:none;
        width:25/25rem;
        float: left;
        height:25/25rem;
        background-color:#FF406F;
        border:0;
        &>img{
        margin-top:15/50rem;
        height: 25/50rem;
      }
      }
      p{
        display:inline-block;
        font-size: 23/50rem;
        font-family:'苹方中等';
        margin:10/50rem 0 0 -25/25rem;
        color:rgba(255,255,255,.7);
      }
      
    }
    }
 
  .head-img img:nth-child(1){
    line-height: 48/50rem;
    float: left;
  }
  .head-img img:nth-child(3){
    line-height: 48/50rem;
    float: right;
  }
  .findTo_warp{
     width:100%;
     height: 775/50rem;
     margin:-95/50rem auto 0;
     background-color: #fdfdfd;
     overflow: hidden;
     .shop_warp{
      margin-top: 35/50rem;
      height: 150/50rem;
       .img{
      width: 2rem;
      height: 2rem;
      border-radius:5/50rem;
      margin-left: 10/50rem;
      border: 2/50rem solid #ccc;
      overflow: hidden;
      float: left;
      &>img{
        width: 100%;
        height: 100%;
      }
      }
      .text{
        width: 230/50rem;
        height: 98/50rem;
        float: right;
        margin-right: 3/50rem;
        h2{
          font-size: 14/50rem;
        }
        &>p{
          font-size: 13/50rem;
          color:#c9c9c9;
          line-height:15/50rem;
        }
      }
     }
     h3{
       font-size:20/50rem;
       color: #a0a0a0;
       width: 95%;
       margin: 0 auto;
     }
     .recommend{
      width: 95%;
      height: 255/50rem;
      margin: 10/50rem auto;
      padding: 15/50rem 0rem;
      box-sizing: border-box;
      border-radius: 5/50rem;
      box-shadow:0px 0px 20px 1px #ccc;
      .shops{
        overflow: hidden;
        height: 70/50rem;
        margin-bottom: 40/50rem;
        .shop-left{
          float: left;
          width: 2rem;
           height: 66/50rem;
          &>img{
            float: left; 
            margin-left: 10/50rem; 
            width: 66/50rem;
            height: 66/50rem;
            border: 2px solid #BCBCBC;
            box-sizing: border-box;
          }
          .shop-desc{
            margin-left: 13/50rem;  
            width: 200/50rem;
            height: 66/50rem;
            padding-top: 7/50rem;
            box-sizing: border-box;
            &>h2{
              font-size: 15/50rem;
            }
            &>p{
              margin-top: 10/50rem;
              font-size: 13/50rem;
              color: #d2d2d2;
              &:nth-of-type(2){
                &>span{
                  text-decoration: line-through;
                }
              }
            }
          }
        }
        .shop-right{
          float: right;
          &>p{
            margin-top: 1rem;
            font-size: 9/50rem;
            color: #d2d2d2;
            position: relative;
            &:before{
              content: "";
              width:20/50rem;
              height:16/50rem;
              // background: url(../../assets/home-images/pinglun.png);
              background-size: 20/50rem 16/50rem;
              position: absolute;
              top:-2/50rem;
              left:-24/50rem;
            }
          }
        }
      }
     }
    .title-warp{
      display: flex;
      &>div{
        flex-grow:1;
        font-size: 15/50rem;
        text-align: center;
      }
    }
     
    }
    .active{
      font-size:15/50rem;
    }
</style>